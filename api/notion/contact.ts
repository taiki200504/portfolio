import { Client } from "@notionhq/client";
import type { VercelRequest, VercelResponse } from '@vercel/node';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const CONTACT_DB_ID = process.env.NOTION_CONTACT_DB_ID;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    if (!process.env.NOTION_API_KEY || !CONTACT_DB_ID) {
        console.error("Missing Notion environment variables");
        return res.status(500).json({ error: "Server configuration error" });
    }

    try {
        const {
            name,
            email,
            company,
            subject,
            message,
        } = req.body;

        await notion.pages.create({
            parent: { database_id: CONTACT_DB_ID },
            properties: {
                "Name": { title: [{ text: { content: name || "Anonymous" } }] },
                "Email": { email: email },
                "Company": { rich_text: [{ text: { content: company || "" } }] },
                "Subject": { select: { name: subject || "Other" } },
                "Message": { rich_text: [{ text: { content: message || "" } }] },
                "Status": { select: { name: "New" } },
                "Submitted At": { date: { start: new Date().toISOString() } },
            },
        });

        return res.status(200).json({ ok: true });
    } catch (error: any) {
        console.error("Notion API Error:", error);
        return res.status(500).json({ error: "Failed to submit to Notion", details: error.message });
    }
}
