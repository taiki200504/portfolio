import { Section } from "@/components/ui/section";
import { Link } from "wouter";
import { ExternalLink } from "lucide-react";

export function Skills() {
    const categories = [
        {
            title: "Product",
            skills: [
                { name: "Concept / Visioning", level: "Strong", proof: { text: "The EGG", link: "#case-studies" } },
                { name: "Information Architecture", level: "Strong", proof: { text: "Taiki Life OS", link: "#case-studies" } },
                { name: "Community Design", level: "Strong", proof: { text: "UNION / Cometree", link: "#case-studies" } },
                { name: "UX Writing", level: "Good", proof: { text: "LYEN HP", link: "#case-studies" } },
            ]
        },
        {
            title: "Growth / Biz",
            skills: [
                { name: "M&A Strategy", level: "Good", proof: { text: "UNION", link: "#case-studies" } },
                { name: "Alliance / Sales", level: "Strong", proof: { text: "Regalis", link: "#case-studies" } },
                { name: "Tokenomics", level: "Familiar", proof: { text: "Anime Research", link: "#case-studies" } },
                { name: "Fundraising", level: "Familiar", proof: { text: "LYEN (TBD)", link: "#case-studies" } },
            ]
        },
        {
            title: "Build / Ops",
            skills: [
                { name: "Notion Architecture", level: "Strong", proof: { text: "Life OS", link: "#case-studies" } },
                { name: "Frontend (React/Next)", level: "Good", proof: { text: "This Portfolio", link: "#case-studies" } },
                { name: "Automation (GAS/iPaaS)", level: "Good", proof: { text: "Life OS", link: "#case-studies" } },
                { name: "Solidity", level: "Familiar", proof: { text: "Research", link: "#case-studies" } },
            ]
        }
    ];

    const getBarColor = (level: string) => {
        switch (level) {
            case "Strong": return "bg-[#f6bd2b]";
            case "Good": return "bg-[#f6bd2b]/60";
            case "Familiar": return "bg-[#f6bd2b]/30";
            default: return "bg-white/10";
        }
    };

    const getBarWidth = (level: string) => {
        switch (level) {
            case "Strong": return "w-full";
            case "Good": return "w-[70%]";
            case "Familiar": return "w-[40%]";
            default: return "w-[10%]";
        }
    };

    return (
        <Section id="skills" className="py-24 bg-[#040B17] border-t border-white/5">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] uppercase mb-16 text-center font-['Outfit']">
                    SKILL MATRIX
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {categories.map((cat, i) => (
                        <div key={i}>
                            <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4 font-['Outfit']">
                                {cat.title}
                            </h3>
                            <div className="space-y-8">
                                {cat.skills.map((skill, j) => (
                                    <div key={j}>
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="text-white font-medium">{skill.name}</span>
                                            {skill.proof && (
                                                <a href={skill.proof.link} className="text-xs text-white/40 hover:text-[#f6bd2b] flex items-center gap-1 transition-colors">
                                                    {skill.proof.text} <ExternalLink className="w-2.5 h-2.5" />
                                                </a>
                                            )}
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className={`h-full rounded-full ${getBarColor(skill.level)} ${getBarWidth(skill.level)}`} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
