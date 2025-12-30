import { Client } from "@notionhq/client";
import { Work, WorkType, WorkStatus } from "@/types/portfolio";

export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export const getWorks = async (): Promise<Work[]> => {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
        console.warn("Notion Token or Database ID is missing. Returning empty array.");
        return [];
    }

    try {
        const response = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
            filter: {
                property: "Status",
                status: {
                    equals: "Published",
                },
            },

            sorts: [
                {
                    property: "Year",
                    direction: "descending",
                },
            ],
        });

        const works: Work[] = response.results.map((page: any) => {
            const props = page.properties;
            return {
                id: page.id,
                title: props.Title?.title[0]?.plain_text || "Untitled",
                oneLiner: props.OneLiner?.rich_text[0]?.plain_text || "",
                role: props.Role?.rich_text[0]?.plain_text || "",
                impact: props.Impact?.rich_text[0]?.plain_text || "",
                deliverables: props.Deliverables?.rich_text[0]?.plain_text || "",
                tags: props.Tags?.multi_select?.map((tag: any) => tag.name) || [],
                year: props.Year?.rich_text[0]?.plain_text || "",
                type: (props.Type?.select?.name as WorkType) || "Product",
                featured: props.Featured?.checkbox || false,
                status: (props.Status?.status?.name as WorkStatus) || "Draft",
                date: props.Date?.date?.start || "",
                slug: props.Slug?.rich_text[0]?.plain_text || "",
                url: props.URL?.url || undefined,
            };
        });

        return works;
    } catch (error) {
        console.error("Failed to fetch works from Notion:", error);
        return [];
    }
};
