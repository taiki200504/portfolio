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
                "Organization": { rich_text: [{ text: { content: organization || "" } }] },
                "Role": { rich_text: [{ text: { content: role || "" } }] },
                "Website": { url: website || null },
                "Interest": {
                    multi_select: Array.isArray(interest)
                        ? interest.map((v: string) => ({ name: v }))
                        : interest ? [{ name: interest }] : []
                },
                "Timing": { select: { name: timing || "Undecided" } },
                "Status": { select: { name: "New" } },
                "Status": { select: { name: "New" } },
                // "Source": { select: { name: "HP Waiting List" } },
                "Message": {
                    rich_text: [{ text: { content: message || "" } }],
                },
                "Submitted At": { date: { start: new Date().toISOString() } },
            },
            children: [
                {
                    object: "block",
                    type: "heading_3",
                    heading_3: {
                        rich_text: [{ text: { content: "Contact Details" } }]
                    }
                },
                {
                    object: "block",
                    type: "paragraph",
                    paragraph: {
                        rich_text: [
                            { text: { content: "Email: " }, annotations: { bold: true } },
                            { text: { content: email || "N/A" } }
                        ]
                    }
                },
                {
                    object: "block",
                    type: "paragraph",
                    paragraph: {
                        rich_text: [
                            { text: { content: "Company: " }, annotations: { bold: true } },
                            { text: { content: organization || "N/A" } }
                        ]
                    }
                },
                {
                    object: "block",
                    type: "paragraph",
                    paragraph: {
                        rich_text: [
                            { text: { content: "Role: " }, annotations: { bold: true } },
                            { text: { content: role || "N/A" } }
                        ]
                    }
                },
                {
                    object: "block",
                    type: "paragraph",
                    paragraph: {
                        rich_text: [
                            { text: { content: "Website: " }, annotations: { bold: true } },
                            { text: { content: website || "N/A" } }
                        ]
                    }
                },
                {
                    object: "block",
                    type: "heading_3",
                    heading_3: {
                        rich_text: [{ text: { content: "Interest & Timing" } }]
                    }
                },
                {
                    object: "block",
                    type: "paragraph",
                    paragraph: {
                        rich_text: [
                            { text: { content: "Interested In: " }, annotations: { bold: true } },
                            { text: { content: Array.isArray(interest) ? interest.join(", ") : (interest || "N/A") } }
                        ]
                    }
                },
                {
                    object: "block",
                    type: "paragraph",
                    paragraph: {
                        rich_text: [
                            { text: { content: "Timing: " }, annotations: { bold: true } },
                            { text: { content: timing || "N/A" } }
                        ]
                    }
                },
                {
                    object: "block",
                    type: "heading_3",
                    heading_3: {
                        rich_text: [{ text: { content: "Message" } }]
                    }
                },
                {
                    object: "block",
                    type: "paragraph",
                    paragraph: {
                        rich_text: [{ text: { content: message || "N/A" } }]
                    }
                },
                {
                    object: "block",
                    type: "paragraph",
                    paragraph: {
                        rich_text: [
                            { text: { content: "Submitted At: " }, annotations: { bold: true, color: "gray" } },
                            { text: { content: new Date().toISOString() }, annotations: { color: "gray" } }
                        ]
                    }
                }
            ],
        });

        return res.status(200).json({ ok: true });
    } catch (error: any) {
        console.error("Notion API Error:", error);
        return res.status(500).json({ error: "Failed to submit to Notion", details: error.message });
    }
}
