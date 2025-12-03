import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import path from "path";

// Load .env from current directory
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const apiKey = process.env.NOTION_API_KEY;
const waitingListDbId = process.env.NOTION_WAITING_LIST_DB_ID;

console.log("API Key present:", !!apiKey);
console.log("Waiting List DB ID:", waitingListDbId);

if (!apiKey || !waitingListDbId) {
    console.error("Missing credentials");
    process.exit(1);
}

const notion = new Client({ auth: apiKey });

const formatUUID = (id: string) => {
    if (id.includes("-")) return id;
    return `${id.slice(0, 8)}-${id.slice(8, 12)}-${id.slice(12, 16)}-${id.slice(16, 20)}-${id.slice(20)}`;
};

async function test() {
    try {
        const formattedId = formatUUID(waitingListDbId!);
        console.log("Retrieving Waiting List database schema for:", formattedId);

        const db = await notion.databases.retrieve({ database_id: formattedId });
        console.log("Database Title:", (db as any).title[0]?.plain_text);
        console.log("Full DB Object:", JSON.stringify(db, null, 2));

        if ((db as any).data_sources && (db as any).data_sources.length > 0) {
            const sourceId = (db as any).data_sources[0].id;
            console.log("Found Source DB ID:", sourceId);
            console.log("Retrieving Source DB...");
            const sourceDb = await notion.databases.retrieve({ database_id: sourceId });
            console.log("Source DB Properties:", JSON.stringify(sourceDb.properties, null, 2));
        }

    } catch (error: any) {
        console.error("Error:", error.message);
        if (error.body) {
            console.error("Details:", error.body);
        }
    }
}

test();
