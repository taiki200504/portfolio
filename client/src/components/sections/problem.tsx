import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Problem() {
    return (
        <Section id="problem" className="bg-[#f8fafc]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Left: Problem Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#092a62]">
                        外部脳は飽和した。
                        <br />
                        内側は、空白のまま。
                    </h2>
                    <p className="text-lg leading-relaxed mb-8 text-[#092a62]/80">
                        AIも、スマホも、SNSも、すべては“外側の脳”を拡張してきました。
                        その一方で、自分のために考える時間と、一人になれる空間は、目に見えないまま失われています。
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            { label: "24h Online", desc: "常時接続" },
                            { label: "Notification", desc: "通知の嵐" },
                            { label: "No Silence", desc: "思考停止" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-center">
                                <div className="text-[#f6bd2b] font-bold text-lg mb-1">{item.label}</div>
                                <div className="text-sm text-slate-500">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Visual Contrast */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative h-[400px] bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100"
                >
                    <div className="absolute inset-0 flex">
                        {/* Left half: Noise */}
                        <div className="w-1/2 bg-slate-50 p-6 flex flex-col justify-center items-center gap-4 opacity-50 relative overflow-hidden">
                            {/* Noise pattern simulation */}
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i} className="absolute text-[10px] text-slate-400 font-mono" style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    transform: `rotate(${Math.random() * 360}deg)`
                                }}>NOISE</div>
                            ))}
                            <div className="z-10 font-bold text-slate-400">EXTERNAL</div>
                        </div>

                        {/* Right half: Silence */}
                        <div className="w-1/2 bg-[#092a62] p-6 flex flex-col justify-center items-center relative">
                            <div className="w-24 h-32 bg-white/5 rounded-full blur-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            <div className="z-10 text-white font-light tracking-[0.2em]">INTERNAL</div>
                            <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#f6bd2b] to-transparent mt-4" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
