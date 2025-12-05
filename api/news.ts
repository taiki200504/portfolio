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
    const databaseId = process.env.NOTION_NEWS_DB_ID;
    const apiKey = process.env.NOTION_API_KEY;

    if (!databaseId || !apiKey) {
        console.warn("[News API Warning] Missing credentials (NOTION_NEWS_DB_ID or NOTION_API_KEY). Returning empty list.");
        return res.status(200).json([]);
    }

    try {
        const formattedId = formatUUID(databaseId);
        console.log(`[News API] Fetching from DB: ${formattedId}`);

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

        res.status(200).json(news);
    } catch (error: any) {
        console.error("API Error (News):", error);
        res.status(500).json({ error: error.message || "Failed to fetch news" });
    }
}
