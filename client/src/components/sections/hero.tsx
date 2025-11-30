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
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 text-center" ref={ref}>
                <motion.div style={{ y, opacity }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative mb-12 inline-block"
                    >
                        {/* Main EGG Silhouette */}
                        <div className="relative w-[300px] h-[400px] md:w-[500px] md:h-[600px] mx-auto opacity-80">
                            <img
                                src="/assets/egg/the egg1.png"
                                alt="The EGG"
                                className="w-full h-full object-contain drop-shadow-[0_0_80px_rgba(9,42,98,0.6)] brightness-75 contrast-125"
                            />
                            {/* Breathing Glow */}
                            <motion.div
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 bg-gradient-to-t from-[#092a62]/50 to-transparent mix-blend-overlay rounded-full blur-3xl"
                            />
                        </div>
                    </motion.div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6 font-['Outfit']"
                        >
                            外部脳の時代に、
                            <br className="md:hidden" />
                            <span className="text-[#f6bd2b]">内部OS</span>を。
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="text-white/60 text-sm md:text-lg tracking-[0.2em] uppercase font-light"
                        >
                            Upgrade humanity from the inside out.
                            <br />
                            The Internal OS Company, LYEN.
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] tracking-[0.2em] text-white/30">SCROLL</span>
                <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/30 to-white/0" />
            </motion.div>
        </Section>
    );
}
