import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const steps = [
    {
        id: "01",
        title: "Login / 入る",
        desc: "まず、外側をここに置いていく。",
        detail: "スマホは外へ。通知のこない思考時間が始まります。",
    },
    {
        id: "02",
        title: "Reset / 整える",
        desc: "光と音と呼吸で、リセット。",
        detail: "体の緊張がほどけ、内側モードへ切り替わります。",
    },
    {
        id: "03",
        title: "Think / 向き合う",
        desc: "声に出してAIと対話する。",
        detail: "ぐちゃぐちゃだった思考が、構造化されていきます。",
    },
    {
        id: "04",
        title: "Log / 持ち帰る",
        desc: "今日の気づきと決断が残る。",
        detail: "“自分だけの判断OS”が育っていきます。",
    },
];

export function Experience() {
    return (
        <Section id="experience" className="bg-[#fafcfd]">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#092a62]">
                    30分で、“内側”を再起動する。
                </h2>
                <p className="text-[#092a62]/70">
                    The EGGの1セッションは、シンプルな4ステップで構成されています。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all"
                    >
                        {/* Image Placeholder */}
                        <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#092a62]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute top-4 left-4 text-4xl font-bold text-white drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                {step.id}
                            </div>
                            {/* Mock Visual */}
                            <div className="w-full h-full flex items-center justify-center text-slate-300 font-mono text-xs">
                                VISUAL {step.id}
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="text-[#f6bd2b] font-bold text-xl mb-2">{step.id}</div>
                            <h3 className="font-bold text-[#092a62] mb-2">{step.title}</h3>
                            <p className="text-sm font-bold text-[#092a62]/80 mb-2">{step.desc}</p>
                            <p className="text-xs text-slate-500 leading-relaxed">{step.detail}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
