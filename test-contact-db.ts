import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import path from "path";

// Load .env from current directory
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const apiKey = process.env.NOTION_API_KEY;
const contactDbId = "8b02bb871c4248ef96d9f06cf27521e4";

console.log("API Key present:", !!apiKey);
console.log("Contact DB ID:", contactDbId);

if (!apiKey || !contactDbId) {
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
        const formattedId = formatUUID(contactDbId!);
        console.log("Retrieving Contact database schema for:", formattedId);

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
        console.error("Error accessing specific DB:", error.message);
    }

    console.log("\n--- Listing All Accessible Databases ---");
    try {
        const search = await notion.search({});
        console.log(`Found ${search.results.length} accessible objects:`);
        search.results.forEach((obj: any) => {
            let name = "Untitled";
            if (obj.object === 'database' && obj.title && obj.title.length > 0) {
                name = obj.title[0].plain_text;
            } else if (obj.object === 'page' && obj.properties) {
                // Try to find a title property
                const titleProp = Object.values(obj.properties).find((p: any) => p.id === 'title') as any;
                if (titleProp && titleProp.title && titleProp.title.length > 0) {
                    name = titleProp.title[0].plain_text;
                }
            }

            if (obj.id.replace(/-/g, "") === contactDbId) {
                console.log(`- Type: ${obj.object}`);
                console.log(`  Name: ${name}`);
                console.log(`  ID: ${obj.id.replace(/-/g, "")}`);
                console.log("  *** MATCH FOUND ***");
                console.log("Full Object:", JSON.stringify(obj, null, 2));
            } else {
                // console.log(`- Type: ${obj.object} Name: ${name} ID: ${obj.id.replace(/-/g, "")}`);
            }
        });
    } catch (error: any) {
        console.error("Error searching databases:", error.message);
    }

    console.log("\n--- Attempting to Create Page ---");
    try {
        await notion.pages.create({
            parent: { database_id: contactDbId },
            properties: {
                "Name": { title: [{ text: { content: "Test Entry" } }] },
                "Email": { email: "test@example.com" },
                "Message": { rich_text: [{ text: { content: "Test message from script" } }] }
            }
        });
        console.log("Successfully created page in", contactDbId);
    } catch (error: any) {
        console.error("Failed to create page:", error.message);
    }
}

test();
