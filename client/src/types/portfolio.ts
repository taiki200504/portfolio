export type WorkType = "Product" | "Community" | "Dev" | "Research";
export type WorkStatus = "Published" | "Draft";

export interface Work {
    id: string;
    title: string;
    oneLiner: string;
    role: string;
    impact: string;
    deliverables: string; // Added field
    tags: string[];
    year: string;
    type: WorkType;
    featured: boolean;
    status: WorkStatus;
    url?: string;
    slug: string;
    thumbnail?: string;
}

export interface ConsultationType {
    title: string;
    desc: string;
    price: string;
    link: string;
    recommendedFor: string[];
}
