import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import path from "path";

// Load .env from current directory
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const apiKey = process.env.NOTION_API_KEY;
const newsDbId = process.env.NOTION_NEWS_DB_ID;

console.log("API Key present:", !!apiKey);
console.log("News DB ID:", newsDbId);

if (!apiKey || !newsDbId) {
    console.error("Missing credentials");
    process.exit(1);
}

const notion = new Client({ auth: apiKey });
console.log("Notion client keys:", Object.keys(notion));
if (notion.databases) {
    console.log("Notion databases keys:", Object.keys(notion.databases));
} else {
    console.log("Notion databases is undefined");
}

const formatUUID = (id: string) => {
    if (id.includes("-")) return id;
    return `${id.slice(0, 8)}-${id.slice(8, 12)}-${id.slice(12, 16)}-${id.slice(16, 20)}-${id.slice(20)}`;
};

const formattedId = formatUUID(newsDbId!);
console.log("Formatted ID:", formattedId);

async function test() {
    try {
        console.log("Retrieving database...");
        const db = await notion.databases.retrieve({ database_id: formattedId });
        console.log("Database retrieved successfully. Title:", db.title?.[0]?.plain_text);

        console.log("Querying database via fetch...");
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
            throw new Error(`Fetch failed: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();
        console.log("Success! Results:", data.results.length);
        if (data.results.length > 0) {
            console.log("First item properties:", JSON.stringify(data.results[0].properties, null, 2));
        }
    } catch (error: any) {
        console.error("Error:", error.message);
        if (error.body) {
            console.error("Details:", error.body);
        }
    }
}

test();
