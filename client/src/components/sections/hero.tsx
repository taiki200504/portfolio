import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <Section className="relative h-screen flex items-center justify-center overflow-hidden p-0">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#040B17]">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(9,42,98,0.3),transparent_70%)]" />
                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 text-center" ref={ref}>
                <motion.div style={{ y, opacity }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative mb-8 inline-block"
                    >
                        {/* Main EGG Visual */}
                        <div className="relative w-[300px] h-[400px] md:w-[500px] md:h-[600px] mx-auto">
                            <img
                                src="/assets/egg/the egg1.png"
                                alt="The EGG"
                                className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(246,189,43,0.3)]"
                            />
                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/4 -right-10 md:-right-20 w-20 h-20 md:w-32 md:h-32 bg-[#f6bd2b]/10 backdrop-blur-md rounded-full border border-[#f6bd2b]/30 flex items-center justify-center"
                            >
                                <span className="text-[#f6bd2b] font-bold text-xs md:text-sm">SILENCE</span>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-1/4 -left-10 md:-left-20 w-16 h-16 md:w-24 md:h-24 bg-[#092a62]/20 backdrop-blur-md rounded-full border border-[#092a62]/50 flex items-center justify-center"
                            >
                                <span className="text-cyan-400 font-bold text-xs md:text-sm">FOCUS</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 font-['Outfit']"
                    >
                        INTERNAL OS
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f6bd2b] to-white bg-300% animate-gradient">
                            FOR HUMANITY
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide"
                    >
                        人の内側に、静かなOSを。
                        <br />
                        <span className="text-sm opacity-70">Build your inner sanctuary with The EGG.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <Button className="bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 text-lg px-8 py-6 rounded-full font-bold shadow-[0_0_20px_rgba(246,189,43,0.4)] hover:shadow-[0_0_30px_rgba(246,189,43,0.6)] transition-all duration-300">
                            EXPERIENCE SILENCE
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] tracking-[0.2em] text-white/40">SCROLL</span>
                <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
            </motion.div>
        </Section>
    );
}
