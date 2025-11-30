import { Client } from "@notionhq/client";
import type { VercelRequest, VercelResponse } from '@vercel/node';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const WAITING_LIST_DB_ID = process.env.NOTION_WAITING_LIST_DB_ID;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    if (!process.env.NOTION_API_KEY || !WAITING_LIST_DB_ID) {
        console.error("Missing Notion environment variables");
        // In development, we might want to return success to simulate behavior if env vars are missing
        if (process.env.NODE_ENV === "development") {
            console.log("Simulating Notion submission (missing env vars):", req.body);
            return res.status(200).json({ ok: true, simulated: true });
        }
        return res.status(500).json({ error: "Server configuration error" });
    }

    try {
        const {
            name,
            email,
            organization,
            role,
            website,
            interest,
            timing,
            message,
        } = req.body;

        await notion.pages.create({
            parent: { database_id: WAITING_LIST_DB_ID },
            properties: {
                "Name": { title: [{ text: { content: name || "Anonymous" } }] },
                "Email": { email: email },
                "Company / Organization": { rich_text: [{ text: { content: organization || "" } }] },
                "Role / Title": { rich_text: [{ text: { content: role || "" } }] },
                "Website / URL": { url: website || null },
                "Interested In": {
                    multi_select: Array.isArray(interest)
                        ? interest.map((v: string) => ({ name: v }))
                        : interest ? [{ name: interest }] : []
                },
                "Expected Installation Timing": { select: { name: timing || "Undecided" } },
                "Source": { select: { name: "HP Waiting List" } },
                "Lead Status": { select: { name: "New" } },
                "Notes / Use case image": {
                    rich_text: [{ text: { content: message || "" } }],
                },
            },
        });

        return res.status(200).json({ ok: true });
    } catch (error: any) {
        console.error("Notion API Error:", error);
        return res.status(500).json({ error: "Failed to submit to Notion", details: error.message });
    }
}
