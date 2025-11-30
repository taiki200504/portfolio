import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Roadmap() {
    return (
        <Section id="roadmap" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#092a62]">
                    ひとつのポッドから、
                    <br className="md:hidden" />
                    内側のプラットフォームへ。
                </h2>
                <p className="text-[#092a62]/70">
                    The EGGは、LYENが描く“内部OS”構想のはじまりにすぎません。
                </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute top-8 left-0 right-0 h-0.5 bg-slate-200 hidden md:block" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            phase: "NOW",
                            title: "Phase 1: The EGG",
                            items: ["フラッグシップモデル導入", "世界観と体験の確立", "初期ログの蓄積"],
                            active: true,
                        },
                        {
                            phase: "NEXT",
                            title: "Phase 2: Expansion",
                            items: ["バリエーションモデル展開", "教育・コワーキングへの導入", "OSダッシュボード強化"],
                            active: false,
                        },
                        {
                            phase: "FUTURE",
                            title: "Phase 3: Platform",
                            items: ["ソフトウェア版インターフェース", "自宅向けデバイス", "日常の意思決定プラットフォーム"],
                            active: false,
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative pt-8 md:pt-16"
                        >
                            {/* Dot */}
                            <div className={`absolute top-8 left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white ${item.active ? 'bg-[#f6bd2b] shadow-[0_0_0_4px_rgba(246,189,43,0.2)]' : 'bg-slate-300'}`} />

                            <div className="pl-8 md:pl-0 md:text-center">
                                <div className={`text-xs font-bold tracking-widest mb-2 ${item.active ? 'text-[#f6bd2b]' : 'text-slate-400'}`}>
                                    {item.phase}
                                </div>
                                <h3 className="font-bold text-[#092a62] text-lg mb-4">{item.title}</h3>
                                <ul className="space-y-2">
                                    {item.items.map((sub, j) => (
                                        <li key={j} className="text-sm text-slate-600">
                                            {sub}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
