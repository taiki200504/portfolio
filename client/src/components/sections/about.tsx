import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function About() {
    return (
        <Section id="about" className="bg-white text-[#092a62]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                        人の“内側”に、OSを。
                    </h2>
                    <p className="text-lg leading-relaxed mb-6 text-[#092a62]/80">
                        AIとスマホが“外側の脳”を拡張したように、
                        <br />
                        LYENは『The EGG』を起点に、人の内面に働きかけるインターフェースとOSをつくります。
                    </p>
                    <ul className="space-y-4">
                        {[
                            "情報は増えたのに、自分と向き合う時間は減っていること",
                            "重要な意思決定ほど、落ち着いて考える場所がないこと",
                            "テクノロジーは便利になったのに、心は置いていかれていること",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#f6bd2b] mt-2.5 shrink-0" />
                                <span className="text-base">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Abstract Graphic */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative h-[400px] w-full flex items-center justify-center"
                >
                    {/* Placeholder for Abstract Graphic */}
                    <div className="relative w-64 h-64">
                        <div className="absolute inset-0 bg-[#092a62]/5 rounded-full animate-pulse" />
                        <div className="absolute inset-4 bg-[#092a62]/10 rounded-full" />
                        <div className="absolute inset-12 bg-[#092a62]/20 rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-[#f6bd2b] rounded-full shadow-[0_0_20px_rgba(246,189,43,0.8)]" />
                        </div>
                        {/* Orbiting elements */}
                        <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#092a62] rounded-full" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
