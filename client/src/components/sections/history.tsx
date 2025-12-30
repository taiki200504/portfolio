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
            output: "30+の学生団体のネットワーク化、事業譲渡契約の締結、コミュニティ統合プロセス"
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
        <Section id="history" className="py-24 bg-white border-t border-black/10">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-black text-xs font-bold tracking-[0.3em] uppercase mb-12 text-left font-['Outfit']">
                    HISTORY
                </h2>

                <div className="space-y-0 border-l border-black/10 ml-2 md:ml-0">
                    {historyData.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="grid grid-cols-1 md:grid-cols-[120px_1fr] relative group"
                        >
                            {/* Timestamp Marker */}
                            <div className="hidden md:flex justify-end pr-8 py-8 border-b border-black/5 group-last:border-none relative">
                                <span className="text-lg font-bold text-black/40 font-['Outfit'] group-hover:text-black transition-colors">{item.year}</span>
                                <div className="absolute right-[-5px] top-10 w-2.5 h-2.5 bg-black rounded-full" />
                            </div>

                            {/* Content */}
                            <div className="pl-6 md:pl-12 py-8 border-b border-black/5 group-last:border-none relative border-l md:border-l-0 border-black/10 md:border-none">
                                {/* Mobile Dot */}
                                <div className="absolute left-[-5px] top-10 w-2.5 h-2.5 bg-black rounded-full md:hidden" />
                                <div className="md:hidden mb-2">
                                    <span className="text-xl font-bold text-black font-['Outfit']">{item.year}</span>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-black">{item.title}</h3>
                                    <span className="text-sm text-black/40 font-['Outfit']">{item.role}</span>
                                </div>
                                <p className="text-black/70 leading-relaxed mb-4 text-sm">
                                    {item.desc}
                                </p>
                                <div className="bg-gray-50 border border-black/5 p-3 text-sm text-black/80 inline-block w-full">
                                    <span className="text-black font-bold mr-2 text-xs uppercase tracking-wider block mb-1 md:inline md:mb-0">Output :</span>
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
