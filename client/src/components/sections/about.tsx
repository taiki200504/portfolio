import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function About() {
    return (
        <Section id="about" className="bg-[#040B17] relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* Left: Big Statement */}
                    <div className="lg:col-span-5 sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-8 uppercase">About LYEN</h2>
                            <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight font-['Outfit'] mb-8">
                                We Engineer <br />
                                Silence.
                            </h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                情報は飽和し、外部脳（AI）は進化し続ける。<br />
                                けれど、私たちの「内側」はどうだろう？
                                <br /><br />
                                LYENは、取り残された人間の内面をアップデートするラボです。
                                静寂をエンジニアリングし、誰もが本来の自分に還れる場所を作ります。
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: MVV List */}
                    <div className="lg:col-span-7 space-y-16 lg:mt-32">
                        {[
                            {
                                label: "MISSION",
                                jp: "個人のポテンシャルを拡張する",
                                en: "Expand individual Potential"
                            },
                            {
                                label: "VISION",
                                jp: "人類を内側からアップデート",
                                en: "Upgrade humanity from the inside out"
                            },
                            {
                                label: "VALUE",
                                jp: "最高の自己没入体験をつくる",
                                en: "Create the ultimate self-immersion experience"
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative pl-8 border-l border-white/10 hover:border-[#f6bd2b] transition-colors duration-500 group"
                            >
                                <span className="text-[#f6bd2b] font-['Outfit'] font-bold tracking-[0.2em] text-xs block mb-4">
                                    {item.label}
                                </span>
                                <h4 className="text-2xl md:text-4xl font-bold text-white mb-2 group-hover:text-[#f6bd2b] transition-colors duration-300">
                                    {item.jp}
                                </h4>
                                <p className="text-white/40 font-['Outfit'] text-sm md:text-base tracking-wide">
                                    {item.en}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </Section>
    );
}
