import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function History() {
    const historyData = [
        {
            year: "2025",
            title: "LYEN Project / The EGG",
            role: "Founder / Product Owner",
            desc: "「内側のOS」を構築する没入ポッドプロジェクトを始動。",
            output: "概念実証(PoC)の設計、初期プロトタイプ仕様策定、Web・ブランド設計"
        },
        {
            year: "2024",
            title: "Gaiax DAO / Anime Research",
            role: "Intern / Researcher",
            desc: "DAO事業部にて自律分散型組織の実装と、アニメ業界での活用可能性を研究。",
            output: "アニメ×DAOの資金調達モデルに関する研究レポート、DAO組成支援"
        },
        {
            year: "2023",
            title: "UNION / Cometree",
            role: "Founder -> Advisor",
            desc: "学生団体連合UNIONを立ち上げ、株式会社Cometreeへ事業譲渡・統合。",
            output: "30+団体のネットワーク化、事業譲渡契約の締結、コミュニティ統合プロセス"
        },
        {
            year: "2022",
            title: "Regalis Japan Group",
            role: "CMO",
            desc: "学生向けラグジュアリースーツブランドのマーケティングを統括。",
            output: "ブランド・マーケティング戦略の立案、学生アンバサダー制度の設計"
        }
    ];

    return (
        <Section id="history" className="py-24 bg-[#040B17] border-t border-white/5">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] uppercase mb-12 text-center font-['Outfit']">
                    HISTORY
                </h2>

                <div className="space-y-12">
                    {historyData.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 md:gap-12 group"
                        >
                            <div className="text-right pt-1 hidden md:block">
                                <span className="text-2xl font-bold text-white/20 font-['Outfit'] group-hover:text-[#f6bd2b] transition-colors">{item.year}</span>
                            </div>
                            {/* Mobile Year */}
                            <div className="md:hidden">
                                <span className="text-xl font-bold text-[#f6bd2b] font-['Outfit']">{item.year}</span>
                            </div>

                            <div className="relative border-l border-white/10 pl-8 md:pl-12 pb-2">
                                {/* Dot */}
                                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#040B17] border border-white/40 group-hover:border-[#f6bd2b] group-hover:bg-[#f6bd2b] transition-colors" />

                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    <span className="text-sm text-white/40 font-['Outfit']">{item.role}</span>
                                </div>
                                <p className="text-white/70 leading-relaxed mb-4">
                                    {item.desc}
                                </p>
                                <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white/80">
                                    <span className="text-[#f6bd2b] font-bold mr-2 text-xs uppercase tracking-wider">Output</span>
                                    {item.output}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
