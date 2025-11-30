import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import type { VercelRequest, VercelResponse } from "@vercel/node";

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { slug } = req.query;
    const databaseId = process.env.NOTION_NEWS_DB_ID;
    const apiKey = process.env.NOTION_API_KEY;

    if (!databaseId || !apiKey) {
        console.error("[News Detail API Error] Missing credentials");
        return res.status(500).json({ error: "Notion credentials not configured" });
    }

    try {
        const formattedId = formatUUID(databaseId);
        const notion = new Client({ auth: apiKey });
        const n2m = new NotionToMarkdown({ notionClient: notion });

        console.log(`[News Detail] Searching for slug: ${slug}`);

        // 1. Find the page by slug using fetch
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
                            equals: slug as string,
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
            return res.status(404).json({ error: "News not found" });
        }

        const page = queryData.results[0] as any;
        const properties = page.properties;
        console.log(`[News Detail] Found page: ${page.id}`);

        // 2. Convert page content to markdown
        let mdString = "";
        try {
            const mdblocks = await n2m.pageToMarkdown(page.id);
            const mdObject = n2m.toMarkdownString(mdblocks);
            mdString = mdObject.parent;
        } catch (n2mError: any) {
            console.error(`[News Detail Error] n2m failed:`, n2mError);
            throw new Error(`Markdown Conversion Error: ${n2mError.message}`);
        }

        const newsDetail = {
            id: page.id,
            title: getTextValue(properties.Title) || "Untitled",
            date: properties.Date?.date?.start || "",
            slug: getTextValue(properties.Slug) || page.id,
            content: mdString,
        };

        res.status(200).json(newsDetail);
    } catch (error: any) {
        console.error("API Error (News Detail):", error);
        res.status(500).json({ error: error.message || "Failed to fetch news detail" });
    }
}
