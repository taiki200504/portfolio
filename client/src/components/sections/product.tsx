import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Link } from "wouter";

export function Product() {
    return (
        <Section id="product" className="bg-[#040B17] py-0 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-px bg-[#f6bd2b]" />
                            <span className="text-[#f6bd2b] text-xs font-bold tracking-[0.2em] uppercase">Flagship Model</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-['Outfit']">
                            The EGG
                        </h2>

                        <p className="text-xl text-white/80 mb-8 leading-relaxed font-light">
                            The EGGは、「最高の自己没入体験」を形にしたフラッグシップデバイスです。
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
                            <Link href="/waiting-list">
                                <Button className="w-full sm:w-auto px-8 py-6 rounded-full bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 font-['Outfit'] tracking-widest font-bold text-lg">
                                    WAITING LIST
                                </Button>
                            </Link>
                            <a href="/assets/egg-catalog.pdf" download target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full px-8 py-6 rounded-full border-white/20 text-white hover:bg-white hover:text-[#040B17] font-['Outfit'] tracking-widest text-lg">
                                    DOWNLOAD CATALOG
                                </Button>
                            </a>
                        </div>

                        <div className="space-y-6 mb-12">
                            {[
                                { title: "Total Isolation", desc: "外界のノイズを物理的に遮断するシェル構造" },
                                { title: "Biophilic Light", desc: "脳波と同期する、生体リズムに合わせた光" },
                                { title: "AI Guide", desc: "内省を深めるための音声ガイドとフィードバック" }
                            ].map((item, i) => (
                                <div key={i} className="pl-6 border-l border-white/20">
                                    <h4 className="text-white font-bold font-['Outfit'] mb-1">{item.title}</h4>
                                    <p className="text-white/50 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <Link href="/product">
                            <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-black transition-all">
                                VIEW FULL SPECS
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Right: Visual (Placeholder for 3D Render) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="aspect-square rounded-full bg-gradient-to-br from-[#092a62] to-black border border-white/10 shadow-[0_0_100px_rgba(9,42,98,0.5)] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
                            <span className="text-white/20 font-['Outfit'] text-sm tracking-[0.5em]">EGG VISUAL</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </Section>
    );
}
