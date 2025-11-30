import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });
const databaseId = process.env.NOTION_DATABASE_ID;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { slug } = req.query;

    if (!process.env.NOTION_API_KEY || !databaseId) {
        return res.status(500).json({ error: "Notion credentials not configured" });
    }

    try {
        // First, find the page by slug
        const response = await (notion.databases as any).query({
            database_id: databaseId,
            filter: {
                and: [
                    {
                        property: "Slug",
                        rich_text: {
                            equals: slug as string,
                        },
                    },
                    {
                        property: "Published",
                        checkbox: {
                            equals: true,
                        },
                    },
                ],
            },
        });

        if (response.results.length === 0) {
            return res.status(404).json({ error: "News not found" });
        }

        const page = response.results[0];
        const mdblocks = await n2m.pageToMarkdown(page.id);
        const mdString = n2m.toMarkdownString(mdblocks);

        const properties = (page as any).properties;
        const newsDetail = {
            id: page.id,
            title: properties.Title?.title[0]?.plain_text || "Untitled",
            date: properties.Date?.date?.start || "",
            slug: properties.Slug?.rich_text[0]?.plain_text || page.id,
            content: mdString.parent,
        };

        res.status(200).json(newsDetail);
    } catch (error) {
        console.error("Notion API Error:", error);
        res.status(500).json({ error: "Failed to fetch news detail" });
    }
}
