"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function History() {
    const historyData = [
        {
            year: "2022–2023",
            content: "米国（コロラド州）へ留学し現地高校を卒業。異文化環境での学習・探究を経験。"
        },
        {
            year: "2023",
            content: "アニメ × DAOをテーマに研究を開始。エンタメにおける資金調達と合理性を探究。"
        },
        {
            year: "2024",
            content: "立教大学 経済学部へ入学。学生団体連合 UNION を立ち上げ、コミュニティ運営と情報発信を推進。"
        },
        {
            year: "2025",
            content: "UNIONを Cometreeへ事業譲渡・統合し、Founder / Advisorとして継続関与。\n同時にガイアックスでDAO領域の実務を経験。"
        },
        {
            year: "2025–",
            content: "LYEN / The Egg構想を中心に、空間体験 × AIのプロダクト設計・検証を進行中。"
        }
    ];
    return (
        <Section id="history" className="py-20 bg-white border-t border-black/10">
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
                            className="grid grid-cols-1 md:grid-cols-[120px_1fr] relative group py-6 first:pt-0 last:pb-0"
                        >
                            {/* Year */}
                            <div className="hidden md:flex items-start pt-1 relative">
                                <span className="text-sm font-bold text-black/40 font-['Outfit'] group-hover:text-black transition-colors">{item.year}</span>
                                <div className="absolute right-[-5px] top-[9px] w-2.5 h-2.5 bg-white border-2 border-black rounded-full z-10" />
                            </div>
                            {/* Content */}
                            <div className="pl-8 relative border-l md:border-l-0 border-black/10 md:border-none">
                                {/* Mobile Dot */}
                                <div className="absolute left-[-5px] top-[9px] w-2.5 h-2.5 bg-white border-2 border-black rounded-full z-10 md:hidden" />

                                <div className="md:hidden mb-2">
                                    <span className="text-sm font-bold text-black/40 font-['Outfit']">{item.year}</span>
                                </div>
                                <p className="text-black text-sm leading-relaxed whitespace-pre-line">
                                    {item.content}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
