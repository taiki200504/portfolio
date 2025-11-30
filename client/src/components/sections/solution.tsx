import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Brain, Layers, Radio } from "lucide-react";

export function Solution() {
    return (
        <Section id="platform" className="bg-[#040B17] text-white">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    人の“内側”に走る、
                    <br className="md:hidden" />
                    もうひとつのOS。
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-white/70 max-w-2xl mx-auto"
                >
                    LYENは、The EGGのような物理インターフェースと、
                    <br className="hidden md:block" />
                    AI・ログ・プロトコルを組み合わせて、人の内側に“静かなOS”を走らせます。
                </motion.p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Platform Diagram */}
                <div className="relative aspect-square md:aspect-[16/9] flex items-center justify-center">
                    {/* Concentric Circles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
                        <div className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] border border-white/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                        <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] border border-[#f6bd2b]/30 rounded-full animate-pulse" />
                    </div>

                    {/* Core */}
                    <div className="relative z-10 w-24 h-24 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        <span className="font-bold tracking-widest text-xs">HUMAN</span>
                    </div>

                    {/* Nodes */}
                    <div className="absolute inset-0">
                        {/* Node 1: Interface */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="absolute top-10 left-10 md:top-1/4 md:left-0 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-[#092a62] rounded-lg flex items-center justify-center border border-white/20">
                                <Layers className="w-6 h-6 text-[#f6bd2b]" />
                            </div>
                            <div className="text-left">
                                <div className="text-[#f6bd2b] text-sm font-bold">Interface Layer</div>
                                <div className="text-xs text-white/60">The EGG / Pod</div>
                            </div>
                        </motion.div>

                        {/* Node 2: Session */}
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                        >
                            <div className="w-12 h-12 bg-[#092a62] rounded-lg flex items-center justify-center border border-white/20">
                                <Radio className="w-6 h-6 text-[#f6bd2b]" />
                            </div>
                            <div className="text-center">
                                <div className="text-[#f6bd2b] text-sm font-bold">Session Layer</div>
                                <div className="text-xs text-white/60">AI / Sound / Light</div>
                            </div>
                        </motion.div>

                        {/* Node 3: OS */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute bottom-10 right-10 md:bottom-1/4 md:right-0 flex items-center gap-4 flex-row-reverse text-right"
                        >
                            <div className="w-12 h-12 bg-[#092a62] rounded-lg flex items-center justify-center border border-white/20">
                                <Brain className="w-6 h-6 text-[#f6bd2b]" />
                            </div>
                            <div>
                                <div className="text-[#f6bd2b] text-sm font-bold">OS Layer</div>
                                <div className="text-xs text-white/60">Log / Protocol</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
