import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Lock } from "lucide-react";

export function CaseStudies() {
    const cases = [
        {
            id: "lyen",
            title: "The EGG / LYEN",
            oneliner: "Internal OS for Humanity",
            problem: "情報過多による現代人の脳疲労と、内省時間の欠如。",
            role: "Founder / PM / Designer",
            deliverables: "Brand Identity, Web App, Hardware Prototype",
            impact: "TBD (Pre-launch)",
            tech: "Next.js, Tailwind, Framer Motion, 3D Print",
            links: [
                { label: "Visit Site", url: "#", disabled: true }
            ]
        },
        {
            id: "union",
            title: "UNION to Cometree",
            oneliner: "30+の学生団体を統合するプラットフォーム",
            problem: "学生団体の分散によるリソースの非効率と、協賛企業のリーチ困難。",
            role: "Founder -> Advisor",
            deliverables: "Community Architecture, M&A Strategy",
            impact: "30+団体加盟 / 事業譲渡達成",
            tech: "Notion, Discord, Community Ops",
            links: [
                { label: "Coming Soon", url: "#", disabled: true }
            ]
        },
        {
            id: "gaiax",
            title: "Anime x DAO Research",
            oneliner: "日本アニメの資金調達とファンガバナンスの分散化",
            problem: "製作委員会の閉鎖性と、ファンの熱量が還元されない構造。",
            role: "Researcher",
            deliverables: "Research Paper, DAO Scheme Proposal",
            impact: "社内新規事業案としての採択",
            tech: "Solidity (Basic), Tokenomics Design",
            links: [
                { label: "Read Report (Req)", url: "#", disabled: true }
            ]
        },
        {
            id: "lifeos",
            title: "Taiki Life OS",
            oneliner: "個人の思考・行動・資産を全自動化するNotion基盤",
            problem: "マルチタスクによる認知資源の枯渇。",
            role: "Architect / User",
            deliverables: "Notion Template, Automation Scripts",
            impact: "月間100時間の管理工数削減",
            tech: "Notion API, GAS, Python",
            links: [
                { label: "View Setup", url: "#", disabled: true }
            ]
        }
    ];

    return (
        <Section id="case-studies" className="py-24 bg-white border-t border-black/10">
            <div className="container mx-auto px-4">
                <h2 className="text-black text-xs font-bold tracking-[0.3em] uppercase mb-12 text-left font-['Outfit']">
                    CASE STUDIES / WORKS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cases.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white border text-black border-black p-8 hover:bg-black hover:text-white transition-all group flex flex-col relative"
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2 font-['Outfit']">{item.title}</h3>
                                <p className="text-sm font-bold opacity-60 group-hover:opacity-100">{item.oneliner}</p>
                            </div>

                            <div className="space-y-4 mb-8 flex-grow">
                                <div>
                                    <span className="text-xs opacity-40 uppercase tracking-widest block mb-1">Problem</span>
                                    <p className="text-sm leading-relaxed">{item.problem}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-xs opacity-40 uppercase tracking-widest block mb-1">Role</span>
                                        <p className="text-sm">{item.role}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs opacity-40 uppercase tracking-widest block mb-1">Impact</span>
                                        <p className="text-sm">{item.impact}</p>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-xs opacity-40 uppercase tracking-widest block mb-1">Deliverables</span>
                                    <p className="text-sm">{item.deliverables}</p>
                                </div>
                                <div>
                                    <span className="text-xs opacity-40 uppercase tracking-widest block mb-1">Tech / Tools</span>
                                    <p className="text-xs font-mono opacity-60">{item.tech}</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-black/10 group-hover:border-white/20">
                                {item.links.map((link, idx) => (
                                    <Button
                                        key={idx}
                                        variant="outline"
                                        size="sm"
                                        className="w-full text-xs font-bold tracking-widest border border-black text-black group-hover:border-white group-hover:text-white group-hover:bg-transparent rounded-none"
                                        disabled={link.disabled}
                                    >
                                        {link.disabled ? <Lock className="w-3 h-3 mr-2" /> : <ExternalLink className="w-3 h-3 mr-2" />}
                                        {link.label}
                                    </Button>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
