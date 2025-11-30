import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Problem() {
    return (
        <Section className="bg-[#040B17] relative overflow-hidden">
            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white font-['Outfit'] tracking-tight mb-6"
                    >
                        THE VOID IS <span className="text-white/20">GONE.</span>
                    </motion.h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        私たちは常に接続され、反応し続けている。<br />
                        内側の「空白」は失われ、思考は浅くなり、創造性は枯渇していく。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: "SCREEN TIME", value: "11h+", desc: "Average daily digital exposure" },
                        { label: "NOTIFICATIONS", value: "200+", desc: "Interruptions per day" },
                        { label: "REFLECTION", value: "0m", desc: "Time spent in silence" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="border-t border-white/10 pt-8"
                        >
                            <div className="text-[#f6bd2b] text-xs font-bold tracking-[0.2em] mb-4">{item.label}</div>
                            <div className="text-5xl md:text-6xl font-bold text-white mb-4 font-['Outfit']">{item.value}</div>
                            <div className="text-white/40 text-sm">{item.desc}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
