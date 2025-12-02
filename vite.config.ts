import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      ...plugins,
      {
        name: "api-middleware",
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url?.startsWith("/api/")) {
              const { Client } = await import("@notionhq/client");

              const url = new URL(req.url || "", `http://${req.headers.host}`);
              const pathname = url.pathname;

              // Helper to safely extract text from Notion properties
              const getTextValue = (property: any): string => {
                if (!property) return "";
                if (property.type === "rich_text") {
                  return property.rich_text?.[0]?.plain_text || "";
                }
                if (property.type === "title") {
                  return property.title?.[0]?.plain_text || "";
                }
                if (property.type === "url") {
                  return property.url || "";
                }
                if (property.type === "formula") {
                  return property.formula?.string || "";
                }
                return "";
              };

              // Helper to format UUID
              const formatUUID = (id: string) => {
                if (id.includes("-")) return id;
                return `${id.slice(0, 8)}-${id.slice(8, 12)}-${id.slice(12, 16)}-${id.slice(16, 20)}-${id.slice(20)}`;
              };

              if (req.method === "GET" && pathname === "/api/news") {
                try {
                  const databaseId = env.NOTION_NEWS_DB_ID;
                  const apiKey = env.NOTION_API_KEY;

                  if (!databaseId || !apiKey) {
                    console.error("[News API Error] Missing credentials");
                    throw new Error("NOTION_NEWS_DB_ID or NOTION_API_KEY is not defined");
                  }

                  const formattedId = formatUUID(databaseId);

                  const response = await fetch(`https://api.notion.com/v1/databases/${formattedId}/query`, {
                    method: "POST",
                    headers: {
                      "Authorization": `Bearer ${apiKey}`,
                      "Notion-Version": "2022-06-28",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      filter: {
                        property: "Published",
                        checkbox: {
                          equals: true,
                        },
                      },
                      sorts: [
                        {
                          property: "Date",
                          direction: "descending",
                        },
                      ],
                    }),
                  });

                  if (!response.ok) {
                    const errorText = await response.text();
                    console.error(`[News API Error] Status: ${response.status} ${response.statusText}`);
                    console.error(`[News API Error] Body: ${errorText}`);
                    throw new Error(`Notion API Error: ${response.status} ${response.statusText} - ${errorText}`);
                  }

                  const data = await response.json();
                  console.log(`[News API Success] Retrieved ${data.results.length} items`);

                  const news = data.results.map((page: any) => {
                    const properties = page.properties;
                    return {
                      id: page.id,
                      title: getTextValue(properties.Title) || "Untitled",
                      date: properties.Date?.date?.start || "",
                      slug: getTextValue(properties.Slug) || page.id,
                      excerpt: getTextValue(properties.Excerpt) || "",
                    };
                  });

                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify(news));
                } catch (error: any) {
                  console.error("API Error (News):", error);
                  res.statusCode = 500;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify({ error: error.message || "Internal Server Error", details: error.body || "" }));
                }
                return;
              }

              if (req.method === "GET" && pathname.startsWith("/api/news/")) {
                try {
                  const slug = pathname.replace("/api/news/", "");
                  const databaseId = env.NOTION_NEWS_DB_ID;
                  const apiKey = env.NOTION_API_KEY;

                  if (!databaseId || !apiKey) {
                    throw new Error("NOTION_NEWS_DB_ID or NOTION_API_KEY is not defined");
                  }

                  const formattedId = formatUUID(databaseId);
                  const notion = new Client({ auth: apiKey });
                  const { NotionToMarkdown } = await import("notion-to-md");
                  const n2m = new NotionToMarkdown({ notionClient: notion });

                  // 1. Find the page by slug using fetch (since notion.databases.query might be broken)
                  console.log(`[News Detail] Searching for slug: ${slug}`);
                  const queryResponse = await fetch(`https://api.notion.com/v1/databases/${formattedId}/query`, {
                    method: "POST",
                    headers: {
                      "Authorization": `Bearer ${apiKey}`,
                      "Notion-Version": "2022-06-28",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      filter: {
                        property: "Slug",
                        formula: {
                          string: {
                            equals: slug,
                          },
                        },
                      },
                    }),
                  });

                  if (!queryResponse.ok) {
                    const errorText = await queryResponse.text();
                    console.error(`[News Detail Error] Query failed: ${queryResponse.status} ${errorText}`);
                    throw new Error(`Notion Query Error: ${queryResponse.status} - ${errorText}`);
                  }

                  const queryData = await queryResponse.json();

                  if (queryData.results.length === 0) {
                    console.warn(`[News Detail] No page found for slug: ${slug}`);
                    res.statusCode = 404;
                    res.end(JSON.stringify({ error: "News not found" }));
                    return;
                  }

                  const page = queryData.results[0] as any;
                  const properties = page.properties;
                  console.log(`[News Detail] Found page: ${page.id}`);

                  // 2. Convert page content to markdown
                  // We hope notion.blocks.children.list works for n2m. 
                  // If not, we might need to fetch blocks manually too, but let's try this first.
                  let mdString = "";
                  try {
                    const mdblocks = await n2m.pageToMarkdown(page.id);
                    const mdObject = n2m.toMarkdownString(mdblocks);
                    mdString = mdObject.parent;
                  } catch (n2mError: any) {
                    console.error(`[News Detail Error] n2m failed:`, n2mError);
                    // Fallback: Just return empty content or try to fetch raw blocks if needed?
                    // For now, let's throw to see the error.
                    throw new Error(`Markdown Conversion Error: ${n2mError.message}`);
                  }

                  const newsDetail = {
                    id: page.id,
                    title: getTextValue(properties.Title) || "Untitled",
                    date: properties.Date?.date?.start || "",
                    content: mdString,
                  };

                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify(newsDetail));
                } catch (error: any) {
                  console.error("API Error (News Detail):", error);
                  res.statusCode = 500;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify({ error: error.message || "Internal Server Error" }));
                }
                return;
              }

              if (req.method === "POST" && pathname.startsWith("/api/notion/")) {
                let body = "";
                req.on("data", (chunk) => {
                  body += chunk.toString();
                });
                req.on("end", async () => {
                  try {
                    const data = JSON.parse(body);
                    const notion = new Client({ auth: env.NOTION_API_KEY });

                    if (pathname === "/api/notion/waiting-list") {
                      const { name, email, interest, timing, message, organization, role, website } = data;
                      await notion.pages.create({
                        parent: { database_id: env.NOTION_WAITING_LIST_DB_ID! },
                        properties: {
                          "Name": { title: [{ text: { content: name || "Anonymous" } }] },
                          "Email": { email: email },
                          "Interest": { multi_select: (Array.isArray(interest) ? interest : [interest]).map((i: string) => ({ name: i })) },
                          "Timing": { select: { name: timing } },
                          "Status": { select: { name: "New" } },
                          "Organization": { rich_text: [{ text: { content: organization || "" } }] },
                          "Role": { rich_text: [{ text: { content: role || "" } }] },
                          "Website": { url: website || null },
                          "Message": { rich_text: [{ text: { content: message || "" } }] },
                          "Submitted At": { date: { start: new Date().toISOString() } },
                        },
                      });
                    } else if (pathname === "/api/notion/catalog") {
                      const {
                        name, email, organization, role, website, country,
                        facilityType, usage, status, preorderIntention,
                        quantity, priceRange, specificPrice, requests
                      } = data;

                      let estimatedUnitPrice = 0;
                      if (specificPrice) {
                        estimatedUnitPrice = parseInt(specificPrice, 10);
                      } else {
                        switch (priceRange) {
                          case "~ 300万円": case "~ 3M JPY": estimatedUnitPrice = 3000000; break;
                          case "300 ~ 500万円": case "3M ~ 5M JPY": estimatedUnitPrice = 4000000; break;
                          case "500 ~ 1000万円": case "5M ~ 10M JPY": estimatedUnitPrice = 7500000; break;
                          case "1000万円 ~": case "10M JPY ~": estimatedUnitPrice = 10000000; break;
                        }
                      }
                      const qty = parseInt(quantity, 10) || 0;

                      await notion.pages.create({
                        parent: { database_id: env.NOTION_CATALOG_DB_ID! },
                        properties: {
                          "Name": { title: [{ text: { content: name || "Anonymous" } }] },
                          "Email": { email: email },
                          "Organization": { rich_text: [{ text: { content: organization || "" } }] },
                          "Role": { rich_text: [{ text: { content: role || "" } }] },
                          "Website": { url: website || null },
                          "Country": { select: { name: country } },
                          "Facility Type": { select: { name: facilityType } },
                          "Usage": { multi_select: (usage || []).map((u: string) => ({ name: u })) },
                          "Status": { select: { name: status } },
                          "Pre-order Intention": { select: { name: preorderIntention } },
                          "Expected Quantity": { number: qty },
                          "Expected Unit Price (JPY)": { number: estimatedUnitPrice },
                          "Catalog Sent": { checkbox: true },
                          "Requests": { rich_text: [{ text: { content: requests || "" } }] },
                          "Submitted At": { date: { start: new Date().toISOString() } },
                        },
                      });
                    } else if (pathname === "/api/notion/contact") {
                      const { name, email, company, subject, message } = data;
                      await notion.pages.create({
                        parent: { database_id: env.NOTION_CONTACT_DB_ID! },
                        properties: {
                          "Name": { title: [{ text: { content: name || "Anonymous" } }] },
                          "Email": { email: email },
                          "Company": { rich_text: [{ text: { content: company || "" } }] },
                          "Subject": { select: { name: subject || "Other" } },
                          "Message": { rich_text: [{ text: { content: message || "" } }] },
                          "Status": { select: { name: "New" } },
                          "Source": { select: { name: "HP Contact Form" } },
                          "Submitted At": { date: { start: new Date().toISOString() } },
                        },
                      });
                    }

                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify({ success: true }));
                  } catch (error: any) {
                    console.error("API Error (Notion Action):", error);
                    res.statusCode = 500;
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify({ error: error.message || "Internal Server Error", details: error.body || "" }));
                  }
                });
                return;
              }
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    envDir: path.resolve(import.meta.dirname),
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      port: 3000,
      strictPort: false,
      host: true,
      allowedHosts: [
        ".manuspre.computer",
        ".manus.computer",
        ".manus-asia.computer",
        ".manuscomputer.ai",
        ".manusvm.computer",
        "localhost",
        "127.0.0.1",
      ],
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
          configure: (proxy, options) => {
            proxy.on("proxyReq", (proxyReq, req, res) => {
              // Placeholder
            });
          },
        },
      },
    },
  };
});
