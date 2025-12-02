import { Client } from "@notionhq/client";
import type { VercelRequest, VercelResponse } from '@vercel/node';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const CATALOG_DB_ID = process.env.NOTION_CATALOG_DB_ID;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    if (!process.env.NOTION_API_KEY || !CATALOG_DB_ID) {
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
            country,
            facilityType,
            usage,
            status,
            preorderIntention,
            quantity,
            priceRange,
            specificPrice,
            requests,
            timing,
        } = req.body;

        // Calculate Estimated Pre-order Amount
        // Mapping price ranges to estimated values (using lower bound or mid-point)
        let estimatedUnitPrice = 0;
        if (specificPrice) {
            estimatedUnitPrice = parseInt(specificPrice, 10);
        } else {
            switch (priceRange) {
                case "~ 300万円":
                case "~ 3M JPY":
                    estimatedUnitPrice = 3000000;
                    break;
                case "300〜500万円":
                case "3M - 5M JPY":
                    estimatedUnitPrice = 4000000;
                    break;
                case "500〜800万円":
                case "5M - 8M JPY":
                    estimatedUnitPrice = 6500000;
                    break;
                case "800万円以上":
                case "8M+ JPY":
                    estimatedUnitPrice = 8000000;
                    break;
                default:
                    estimatedUnitPrice = 0;
            }
        }

        const qty = parseInt(quantity, 10) || 0;
        // Note: Formula property in Notion will calculate the total, but we can also store the unit price.

        await notion.pages.create({
            parent: { database_id: CATALOG_DB_ID },
            properties: {
                "Name": { title: [{ text: { content: name || "Anonymous" } }] },
                "Email": { email: email },
                "Company / Organization": { rich_text: [{ text: { content: organization || "" } }] },
                "Role / Title": { rich_text: [{ text: { content: role || "" } }] },
                "Website / URL": { url: website || null },
                "Country / Region": { select: { name: country || "Unknown" } },
                "Facility Type": { select: { name: facilityType || "Other" } },
                "Use Case": {
                    rich_text: [{ text: { content: Array.isArray(usage) ? usage.join(", ") : usage || "" } }]
                },
                "Purchase Interest Level": { select: { name: status || "Info Only" } },
                "Pre-order Intention": { select: { name: preorderIntention || "Info Only" } },
                "Desired Model / Package": { select: { name: "Standard" } }, // Defaulting for now
                "Expected Quantity": { number: qty },
                "Expected Unit Price (JPY)": { number: estimatedUnitPrice },
                "Currency": { select: { name: "JPY" } },
                "Catalog Sent": { checkbox: true }, // Assuming we show the link after submission
                "Follow-up Status": { select: { name: "New" } },
                "Source": { select: { name: "HP Catalog Form" } },
                "Expected Installation Timing": { select: { name: timing || "Undecided" } },
                "Requests": { rich_text: [{ text: { content: requests || "" } }] },
            },
        });

        return res.status(200).json({ ok: true });
    } catch (error: any) {
        console.error("Notion API Error:", error);
        return res.status(500).json({ error: "Failed to submit to Notion", details: error.message });
    }
}
