import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Science() {
    return (
        <Section id="science" className="bg-[#040B17] relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-6 uppercase">SCIENCE & DATA</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white font-['Outfit'] mb-8">
                            Backed by Data.
                        </h3>
                        <p className="text-white/60 text-lg leading-relaxed mb-12">
                            LYENのアプローチは、感覚的な「癒し」ではありません。<br />
                            脳波測定とバイタルデータに基づいた、科学的なソリューションです。
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { label: "Alpha Waves", value: "+40%", desc: "リラックス状態の向上" },
                                { label: "Cortisol", value: "-25%", desc: "ストレスホルモンの減少" }
                            ].map((item, i) => (
                                <div key={i} className="border-t border-white/20 pt-4">
                                    <div className="text-4xl font-bold text-white font-['Outfit'] mb-2">{item.value}</div>
                                    <div className="text-[#f6bd2b] text-xs font-bold tracking-wider mb-1">{item.label}</div>
                                    <div className="text-white/40 text-xs">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Abstract Graph Visual */}
                    <div className="bg-[#092a62]/20 border border-white/10 rounded-xl p-8 h-80 flex items-center justify-center relative">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#f6bd2b]/10 to-transparent" />
                        <div className="w-full h-32 flex items-end justify-between gap-2 px-4">
                            {[40, 60, 45, 70, 50, 80, 65, 90, 75, 100].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.5 }}
                                    className="w-full bg-[#f6bd2b] opacity-80 rounded-t-sm"
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
}
