import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
    return (
        <Section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-0 pb-0">
            {/* Background: Deep Void with subtle pulse */}
            <div className="absolute inset-0 bg-[#040B17]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,42,98,0.3),transparent_70%)] opacity-50 animate-pulse" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="mb-12"
                >
                    {/* EGG Silhouette (Abstract Representation) */}
                    <div className="w-64 h-80 md:w-80 md:h-96 mx-auto bg-gradient-to-b from-white/5 to-transparent rounded-[50%] blur-3xl relative">
                        <div className="absolute inset-0 bg-white/10 rounded-[50%] blur-xl animate-pulse" />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight font-['Outfit']"
                >
                    Build your <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                        inner sanctuary.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-white/60 text-sm md:text-lg tracking-[0.2em] uppercase font-light mb-12"
                >
                    外部脳の時代に、内部OSを。
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <Link href="/product">
                        <Button size="lg" className="rounded-full font-bold tracking-wider text-base">
                            DISCOVER THE EGG
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.div>
        </Section>
    );
}
