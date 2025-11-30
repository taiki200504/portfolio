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

const waitingListDbId = process.env.NOTION_WAITING_LIST_DB_ID;

async function test() {
    try {
        if (!waitingListDbId) {
            throw new Error("NOTION_WAITING_LIST_DB_ID is not defined");
        }
        const formattedId = formatUUID(waitingListDbId);
        console.log("Retrieving Waiting List database schema for:", formattedId);

        const db = await notion.databases.retrieve({ database_id: formattedId });
        console.log("Object Type:", db.object);
        console.log("Data Sources:", (db as any).data_sources);

        if ((db as any).data_sources && (db as any).data_sources.length > 0) {
            const sourceId = (db as any).data_sources[0].id;
            console.log("Found Source DB ID:", sourceId);
            console.log("Retrieving Source DB...");
            const sourceDb = await notion.databases.retrieve({ database_id: sourceId });
            console.log("Source DB Properties Keys:", Object.keys(sourceDb.properties));
        } else if ('properties' in db) {
            console.log("Properties Keys:", Object.keys(db.properties));
        } else {
            console.log("No properties field found on object.");
        }

    } catch (error: any) {
        console.error("Error:", error.message);
        if (error.body) {
            console.error("Details:", error.body);
        }
    }
}

test();
