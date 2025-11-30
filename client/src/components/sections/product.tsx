import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Product() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <Section id="product" className="bg-black text-white py-32 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4" ref={ref}>
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-[#f6bd2b] font-bold tracking-[0.3em] text-sm mb-6 font-['Outfit']">FLAGSHIP MODEL</div>
                            <h2 className="text-5xl md:text-8xl font-bold mb-8 font-['Outfit'] leading-none">
                                The EGG
                            </h2>
                            <p className="text-xl text-white/70 mb-12 leading-relaxed font-light">
                                The EGGは、「最高の自己没入体験」を形にしたフラッグシップデバイスです。
                                <br />
                                <span className="text-base opacity-70">
                                    完全な遮音、バイオフィリックな照明制御、そしてAIによる思考のガイド。
                                    あなたの脳を「ゾーン」へと強制転送します。
                                </span>
                            </p>
                            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 font-bold text-lg">
                                VIEW SPECS
                            </Button>
                        </motion.div>
                    </div>

                    {/* Visual */}
                    <div className="w-full md:w-1/2 relative">
                        <motion.div style={{ y }} className="relative z-10">
                            <img
                                src="/assets/egg/vr egg.png"
                                alt="The EGG VR"
                                className="w-full h-auto drop-shadow-[0_0_100px_rgba(9,42,98,0.5)] grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-[#092a62]/30 to-[#f6bd2b]/5 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </Section>
    );
}
