import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const apiKey = process.env.NOTION_API_KEY;
const dbId = process.env.NOTION_WAITING_LIST_DB_ID;

if (!apiKey || !dbId) {
    console.error("Missing credentials");
    process.exit(1);
}

const notion = new Client({ auth: apiKey });

const formatUUID = (id: string) => {
    if (id.includes("-")) return id;
    return `${id.slice(0, 8)}-${id.slice(8, 12)}-${id.slice(12, 16)}-${id.slice(16, 20)}-${id.slice(20)}`;
};

async function updateSchema() {
    try {
        const formattedId = formatUUID(dbId!);
        console.log(`Updating schema for database: ${formattedId}`);

        const response = await notion.databases.update({
            database_id: formattedId,
            properties: {
                "Company / Organization": { rich_text: {} },
                "Role / Title": { rich_text: {} },
                "Website / URL": { url: {} },
                "Interested In": {
                    multi_select: {
                        options: [
                            { name: "Product", color: "blue" },
                            { name: "Partnership", color: "green" },
                            { name: "Investment", color: "yellow" },
                            { name: "Other", color: "gray" },
                        ]
                    }
                },
                "Expected Installation Timing": {
                    select: {
                        options: [
                            { name: "Within 6 months", color: "red" },
                            { name: "Within 1 year", color: "orange" },
                            { name: "Within 2 years", color: "yellow" },
                            { name: "Undecided", color: "gray" },
                        ]
                    }
                },
                "Source": {
                    select: {
                        options: [
                            { name: "HP Waiting List", color: "purple" }
                        ]
                    }
                },
                "Lead Status": {
                    select: {
                        options: [
                            { name: "New", color: "blue" },
                            { name: "Contacted", color: "yellow" },
                            { name: "Qualified", color: "green" },
                            { name: "Lost", color: "gray" }
                        ]
                    }
                },
                "Notes / Use case image": { rich_text: {} },
            },
        });

        console.log("Schema updated successfully!");
        console.log(JSON.stringify(response, null, 2));

    } catch (error: any) {
        console.error("Failed to update schema:", error.message);
        if (error.body) {
            console.error("Details:", error.body);
        }
    }
}

updateSchema();
