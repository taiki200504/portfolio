"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function BasicInfo() {
    return (
        <Section id="basic-info" className="py-20 bg-white border-t border-black/10">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-black text-xs font-bold tracking-[0.3em] uppercase mb-12 text-center font-['Outfit']">
                    ABOUT / 基本情報
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-2xl font-bold mb-2">三島大毅 <span className="text-lg font-normal text-black/60 ml-2">Taiki Mishima</span></h3>
                        <p className="text-sm font-bold text-black/80 mb-6">学生起業家｜プロダクト設計・コミュニティ設計・実装</p>

                        <p className="text-base text-black/80 leading-relaxed mb-4">
                            立教大学 経済学部 在学（休学予定あり）。<br />
                            “熱狂を生む場を現実化する”をテーマに、企画・設計・実装の一気通貫で価値を生む活動をしています。
                        </p>
                    </motion.div>

                    {/* Right Column: Info List */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <InfoItem icon="📍" label="Location" value="Tokyo, Japan" />
                        <InfoItem icon="🎓" label="Education" value="Rikkyo University (経済学部)" />
                        <InfoItem icon="🧠" label="Interests" value="起業 / プロダクト設計 / コミュニティ / AI×エンタメ / Web3 / 実装主義" />
                        <InfoItem icon="💡" label="Approach" value="Vision → 言語化 → 構造設計 → 実装 → 運用への一気通貫" />
                        <InfoItem icon="✈️" label="Experience" value="米国（コロラド）留学 / DAO実務 / 事業統合 / CMO経験" />
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}

function InfoItem({ icon, label, value }: { icon: string, label: string, value: string }) {
    return (
        <div className="flex items-start gap-3">
            <span className="text-xl">{icon}</span>
            <div>
                <span className="text-xs font-bold uppercase tracking-wider text-black/40 block mb-0.5">{label}</span>
                <p className="text-sm font-medium text-black">{value}</p>
            </div>
        </div>
    );
}
