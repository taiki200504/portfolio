import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Layers, Zap, Brain } from "lucide-react";

export function Solution() {
    return (
        <Section id="solution" className="bg-[#040B17] py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-[#f6bd2b] font-bold tracking-[0.2em] text-sm mb-4 font-['Outfit']">SOLUTION</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white font-['Outfit'] mb-6">
                        Internal OS Platform
                    </h3>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        個人のポテンシャルを拡張するOS。
                        <br />
                        それは、人類を内側からアップデートするためのインフラです。
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Connecting Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#f6bd2b]/50 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {[
                            {
                                icon: Layers,
                                title: "Hardware Layer",
                                subtitle: "物理的な遮断",
                                desc: "視覚・聴覚を完全にシャットアウトする没入ポッド。"
                            },
                            {
                                icon: Zap,
                                title: "Sensory Layer",
                                subtitle: "感覚のハック",
                                desc: "バイオフィリックな光と音で、脳波を誘導する。"
                            },
                            {
                                icon: Brain,
                                title: "OS Layer",
                                subtitle: "思考のログ",
                                desc: "対話を通じて思考を整理し、自分だけの判断基準を育てる。"
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Icon Marker */}
                                <div className="absolute left-8 md:left-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#040B17] border-2 border-[#f6bd2b] rounded-full z-10 md:-translate-x-1/2" />

                                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:pr-16 md:text-right">
                                    {i % 2 === 0 && (
                                        <div className="md:text-right">
                                            <div className="text-[#f6bd2b] text-xs font-bold tracking-widest mb-2">{item.subtitle}</div>
                                            <h4 className="text-2xl font-bold text-white mb-2 font-['Outfit']">{item.title}</h4>
                                            <p className="text-white/60 text-sm">{item.desc}</p>
                                        </div>
                                    )}
                                    {i % 2 !== 0 && <div className="hidden md:block" />} {/* Spacer for layout */}
                                </div>

                                <div className="w-full md:w-1/2 pl-20 md:pl-16">
                                    {i % 2 !== 0 && (
                                        <div>
                                            <div className="text-[#f6bd2b] text-xs font-bold tracking-widest mb-2">{item.subtitle}</div>
                                            <h4 className="text-2xl font-bold text-white mb-2 font-['Outfit']">{item.title}</h4>
                                            <p className="text-white/60 text-sm">{item.desc}</p>
                                        </div>
                                    )}
                                    {i % 2 === 0 && <div className="hidden md:block" />} {/* Spacer for layout */}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
