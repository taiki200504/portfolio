"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Monitor, Code2, Bot, ArrowRight } from "lucide-react";

export function Services() {
    return (
        <Section id="services" className="py-20 bg-gray-50 border-t border-black/10">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-black text-xs font-bold tracking-[0.3em] uppercase mb-16 text-center font-['Outfit']">
                    WHAT I DO
                </h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <ServiceCard
                        icon={<Monitor className="w-6 h-6" />}
                        title="AI支援の HP/LP制作"
                        sub="高速プロトタイプ / デザイン"
                        desc="AIを活用してWebページ/LPを高速に構築。CTA設計からSEO対策、改善フローまで一気通貫で支援します。"
                    />
                    <ServiceCard
                        icon={<Code2 className="w-6 h-6" />}
                        title="Web実装"
                        sub="Next.js × AI連携"
                        desc="拡張性の高いWebアプリケーション実装。管理画面開発や自動化ツールの組み込みも対応可能です。"
                    />
                    <ServiceCard
                        icon={<Bot className="w-6 h-6" />}
                        title="AI業務自動化・RAG実装"
                        sub="社内検索 / エージェントPoC"
                        desc="定型作業の削減や、社内データを活用した検索システム（RAG）、AIエージェントのPoC開発を行います。"
                    />
                </div>
            </div>
        </Section>
    );
}

function ServiceCard({ icon, title, sub, desc }: { icon: React.ReactNode, title: string, sub: string, desc: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 border border-black/10 hover:border-black transition-all duration-300 h-full"
        >
            <div className="w-12 h-12 bg-gray-50 flex items-center justify-center border border-black/5 mb-6 text-black">
                {icon}
            </div>
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <p className="text-xs font-bold text-black/40 mb-4">{sub}</p>
            <p className="text-sm text-black/70 leading-relaxed">
                {desc}
            </p>
        </motion.div>
    );
}
