import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function About() {
    return (
        <Section id="about" className="bg-[#092a62] py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03),transparent_50%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    {/* Left: Intro Text */}
                    <div className="w-full lg:w-5/12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-[#f6bd2b] font-bold tracking-[0.2em] text-sm mb-8 font-['Outfit']">ABOUT LYEN</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 font-['Outfit'] leading-tight">
                                We Engineer <br />
                                <span className="text-white/50">Silence.</span>
                            </h3>
                            <p className="text-white/80 text-lg leading-relaxed mb-8">
                                情報は飽和し、外部脳（AI）は進化し続ける。
                                <br />
                                けれど、私たちの「内側」はどうだろう？
                            </p>
                            <p className="text-white/60 text-sm leading-relaxed">
                                LYENは、取り残された人間の内面をアップデートするラボです。
                                静寂をエンジニアリングし、誰もが本来の自分に還れる場所を作ります。
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: MVV Block */}
                    <div className="w-full lg:w-7/12">
                        <div className="grid gap-12">
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
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="relative pl-8 border-l-2 border-white/10 hover:border-[#f6bd2b] transition-colors group"
                                >
                                    <h4 className="text-[#f6bd2b] font-bold tracking-[0.2em] text-sm mb-2 font-['Outfit'] group-hover:text-[#f6bd2b] transition-colors">
                                        {item.label}
                                    </h4>
                                    <p className="text-2xl md:text-3xl font-bold text-white mb-1 font-sans">
                                        {item.jp}
                                    </p>
                                    <p className="text-white/40 text-sm font-['Outfit'] tracking-wide">
                                        {item.en}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
