import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Box, Brain, Zap } from "lucide-react";

export function Solution() {
    return (
        <Section id="solution" className="bg-[#040B17] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#092a62]/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-6 uppercase">SOLUTION</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white font-['Outfit'] mb-8">
                        Internal OS Platform
                    </h3>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        個人のポテンシャルを拡張するOS。<br />
                        それは、人類を内側からアップデートするためのインフラです。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {[
                        {
                            icon: Box,
                            title: "Hardware",
                            desc: "物理的な遮断と、生体調和環境。",
                            sub: "The EGG / Pods"
                        },
                        {
                            icon: Zap,
                            title: "Sensory",
                            desc: "光、音、振動による感覚への介入。",
                            sub: "Biophilic Interface"
                        },
                        {
                            icon: Brain,
                            title: "OS",
                            desc: "脳波解析とAIによる思考ガイド。",
                            sub: "Neuro Feedback"
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative glass-panel p-8 rounded-2xl text-center group hover:border-[#f6bd2b]/50 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 mx-auto bg-[#040B17] rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-[0_0_20px_rgba(9,42,98,0.5)]">
                                <item.icon className="w-8 h-8 text-[#f6bd2b]" />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2 font-['Outfit']">{item.title}</h4>
                            <p className="text-[#f6bd2b] text-xs font-bold tracking-widest uppercase mb-4">{item.sub}</p>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
