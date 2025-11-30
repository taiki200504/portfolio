import { Client } from "@notionhq/client";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (!process.env.NOTION_API_KEY || !databaseId) {
        return res.status(500).json({ error: "Notion credentials not configured" });
    }

    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: "Status",
                select: {
                    equals: "Published",
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

        res.status(200).json(news);
    } catch (error) {
        console.error("Notion API Error:", error);
        res.status(500).json({ error: "Failed to fetch news" });
    }
}
