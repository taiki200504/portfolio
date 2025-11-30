import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Brain, Layers, Mic, Moon, Zap } from "lucide-react";

export function BentoGrid() {
    return (
        <Section id="concept" className="bg-[#040B17] py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Outfit']"
                    >
                        RECLAIM YOUR <span className="text-[#f6bd2b]">INNER SPACE</span>
                    </motion.h2>
                    <p className="text-white/60 text-lg">
                        外部脳（AI・スマホ）は飽和した。次は、内側のOSをアップデートする番だ。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
                    {/* Card 1: Large - The Problem */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 md:row-span-1 bg-[#092a62]/10 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#f6bd2b]/50 transition-colors duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/80 z-0" />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 text-[#f6bd2b] mb-4">
                                    <Zap className="w-5 h-5" />
                                    <span className="font-bold tracking-widest text-xs">THE PROBLEM</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Digital Noise Overload</h3>
                                <p className="text-white/70 max-w-md">
                                    通知、SNS、常時接続。私たちの脳は休む暇もなく、
                                    「自分と向き合う時間」は絶滅危惧種になった。
                                </p>
                            </div>
                            <div className="flex gap-4 mt-8">
                                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                    <div className="text-2xl font-bold text-white">12h+</div>
                                    <div className="text-xs text-white/50">Screen Time</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                    <div className="text-2xl font-bold text-white">0min</div>
                                    <div className="text-xs text-white/50">True Silence</div>
                                </div>
                            </div>
                        </div>
                        {/* Abstract Noise Visual */}
                        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 group-hover:opacity-30 transition-opacity">
                            {Array.from({ length: 50 }).map((_, i) => (
                                <div key={i} className="absolute w-1 h-1 bg-white rounded-full" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 2: Tall - The Solution (EGG) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-1 md:row-span-2 bg-black border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[url('/assets/egg/the egg2.png')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <div className="mb-auto pt-4">
                                <div className="flex items-center gap-2 text-cyan-400 mb-4">
                                    <Moon className="w-5 h-5" />
                                    <span className="font-bold tracking-widest text-xs">THE SOLUTION</span>
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">The EGG</h3>
                            <p className="text-white/70 text-sm mb-6">
                                物理的な遮断と、感覚的な誘導。
                                強制的に「内側」へダイブする没入ポッド。
                            </p>
                            <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white">
                                VIEW PRODUCT
                            </Button>
                        </div>
                    </motion.div>

                    {/* Card 3: Small - Interface */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1 md:row-span-1 bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-cyan-500/50 transition-colors"
                    >
                        <div className="absolute top-4 right-4 text-white/10 group-hover:text-cyan-500/20 transition-colors">
                            <Layers className="w-24 h-24" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2">Interface Layer</h3>
                            <p className="text-white/60 text-sm">
                                光、音、振動。五感すべてをハックする。
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 4: Small - Intelligence */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-1 md:row-span-1 bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#f6bd2b]/50 transition-colors"
                    >
                        <div className="absolute top-4 right-4 text-white/10 group-hover:text-[#f6bd2b]/20 transition-colors">
                            <Brain className="w-24 h-24" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2">OS Layer</h3>
                            <p className="text-white/60 text-sm">
                                思考ログを解析し、あなただけの「判断基準」を育てる。
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
