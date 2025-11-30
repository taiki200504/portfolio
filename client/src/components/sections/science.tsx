import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Science() {
    return (
        <Section className="bg-[#040B17] py-32 border-b border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-[#f6bd2b] font-bold tracking-[0.2em] text-sm mb-4 font-['Outfit']">SCIENCE</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 font-['Outfit']">
                            Backed by Data
                        </h3>
                        <p className="text-white/70 mb-8">
                            感覚だけでなく、数値で証明する。
                            <br />
                            LYENのメソッドは、神経科学と心理学の知見に基づいています。
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-8">
                        {[
                            { value: "+30%", label: "Alpha Waves", desc: "リラックス状態の向上" },
                            { value: "-20%", label: "Cortisol", desc: "ストレスホルモンの減少" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#092a62]/20 border border-white/10 p-8 rounded-2xl text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-['Outfit']">{item.value}</div>
                                <div className="text-[#f6bd2b] text-xs font-bold tracking-widest mb-2 uppercase">{item.label}</div>
                                <div className="text-white/50 text-xs">{item.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
