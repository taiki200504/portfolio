"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
    { year: "2023", title: "LYEN 創業", desc: "株式会社LYENを設立。未踏の領域への挑戦を開始。" },
    { year: "2024", title: "Regalis Tokyo", desc: "ラグジュアリーブランドのデジタル戦略・設計を担当。" },
    { year: "2024", title: "PM Lab", desc: "プロダクトマネジメント教育機関のリードとして参画。" },
    { year: "2025", title: "Global Expansion", desc: "世界を舞台にした新たなエコシステムの構築へ。" }
];

export function Biography() {
    return (
        <section id="biography" className="relative w-full bg-void-black py-32 px-6 md:px-12 border-t border-white/5">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-[1fr_2fr]">

                {/* Header Side */}
                <div className="md:sticky md:top-32 md:h-fit">
                    <h2 className="font-display text-5xl font-bold uppercase tracking-tighter text-ether-white md:text-7xl">History</h2>
                    <p className="mt-4 font-mono text-xs tracking-widest text-white/40">MILESTONES & ORIGIN</p>
                </div>

                {/* Content Side */}
                <div className="space-y-16">
                    {milestones.map((item, idx) => (
                        <div key={idx} className="group border-l border-white/10 pl-8 transition-colors hover:border-electric-cyan relative">
                            {/* Dot */}
                            <div className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-void-black border border-white/20 transition-colors group-hover:bg-electric-cyan group-hover:border-electric-cyan" />

                            <span className="block font-display text-lg font-bold text-electric-cyan opacity-80">{item.year}</span>
                            <h3 className="mt-2 text-3xl font-bold text-white group-hover:text-electric-cyan/90 transition-colors">{item.title}</h3>
                            <p className="mt-4 text-lg font-light text-white/70 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
