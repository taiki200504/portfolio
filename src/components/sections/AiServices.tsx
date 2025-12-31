"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Cpu, Zap, GitBranch, MessageSquare, BarChart, Settings, CheckCircle2 } from "lucide-react";

export function AiServices() {
    return (
        <Section id="ai-services" className="py-20 bg-gray-50 border-t border-black/10">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-black text-xs font-bold tracking-[0.3em] uppercase mb-16 text-center font-['Outfit']">
                    AI / AUTOMATION SERVICES
                </h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <ServiceCard
                        icon={<Zap className="w-6 h-6" />}
                        title="AI業務自動化"
                        sub="Notion / Google Workspace / Slack連携"
                        desc="定型作業の自動化、情報整理、通知・集計の仕組み化を実現し、本来の業務に集中できる環境を作ります。"
                    />
                    <ServiceCard
                        icon={<Cpu className="w-6 h-6" />}
                        title="AIプロトタイプ開発"
                        sub="PoC (Proof of Concept)"
                        desc="小さく動くものを最短で作り、実際に触って検証することで、投資判断と効果測定を加速させます。"
                    />
                    <ServiceCard
                        icon={<GitBranch className="w-6 h-6" />}
                        title="AI活用設計"
                        sub="要件整理・運用設計"
                        desc="「何をAIに任せるか」を整理し、現場で回る評価指標と運用フローを設計します。"
                    />
                </div>

                {/* Process Steps */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-sm font-bold text-center mb-10 tracking-widest uppercase">PROCESS</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[1px] bg-black/10 -z-10" />

                        <Step number="01" title="ヒアリング" desc="現状 / ボトルネック" />
                        <Step number="02" title="PoC" desc="小さく検証・効果測定" />
                        <Step number="03" title="実装" desc="連携 / ログ / 改善" />
                        <Step number="04" title="運用" desc="手順化・改善サイクル" />
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-20 text-center">
                    <p className="text-xs text-black/60 font-medium">
                        ※ データ取り扱い・秘密保持・運用体制について、必要に応じて事前にすり合わせ可能です。
                    </p>
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
            className="bg-white p-8 border border-black/10 hover:border-black transition-all duration-300"
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

function Step({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="bg-white p-6 border border-black/10 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold font-['Outfit'] mb-4">
                {number}
            </div>
            <h4 className="font-bold mb-1">{title}</h4>
            <p className="text-xs text-black/60">{desc}</p>
        </div>
    );
}
