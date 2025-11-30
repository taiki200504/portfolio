import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

export default defineConfig({
  plugins,
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
    strictPort: false, // Will find next available port if 3000 is busy
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
            // This is a placeholder. Since we don't have a separate API server running on 3000 (Vite is on 3000),
            // we need to handle the request directly in configureServer, NOT proxy it to ourselves.
          });
        },
      },
    },
  },
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url?.startsWith("/api/")) {
        const { Client } = await import("@notionhq/client");
        const dotenv = await import("dotenv");
        dotenv.config();

        const url = new URL(req.url || "", `http://${req.headers.host}`);
        const pathname = url.pathname;

        if (req.method === "GET" && pathname === "/api/news") {
          try {
            const notion = new Client({ auth: process.env.NOTION_API_KEY });
            const databaseId = process.env.NOTION_NEWS_DB_ID;

            if (!databaseId) {
              throw new Error("NOTION_NEWS_DB_ID is not defined");
            }

            const response = await (notion.databases as any).query({
              database_id: databaseId,
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
            });

            const news = response.results.map((page: any) => {
              const properties = page.properties;
              return {
                id: page.id,
                title: properties.Title?.title[0]?.plain_text || "Untitled",
                date: properties.Date?.date?.start || "",
                slug: properties.Slug?.rich_text[0]?.plain_text || page.id,
                excerpt: properties.Excerpt?.rich_text[0]?.plain_text || "",
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

        if (req.method === "POST" && pathname.startsWith("/api/notion/")) {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString();
          });
          req.on("end", async () => {
            try {
              const data = JSON.parse(body);
              const notion = new Client({ auth: process.env.NOTION_API_KEY });

              if (pathname === "/api/notion/waiting-list") {
                const { name, email, interest, timing, message, organization, role, website } = data;
                await notion.pages.create({
                  parent: { database_id: process.env.NOTION_WAITING_LIST_DB_ID! },
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
                  parent: { database_id: process.env.NOTION_CATALOG_DB_ID! },
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
});
