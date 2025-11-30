import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Problem() {
    return (
        <Section className="bg-[#092a62] py-32 relative overflow-hidden">
            {/* Background Noise Texture */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Outfit']"
                    >
                        THE VOID IS <span className="text-[#f6bd2b]">GONE</span>.
                    </motion.h2>
                    <p className="text-white/60 text-lg">
                        内側の空白は、もはや贅沢品になってしまった。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: "Screen Time", value: "12h+", desc: "平均スクリーンタイム" },
                        { label: "Notification", value: "∞", desc: "止まらない通知" },
                        { label: "Reflection", value: "0", desc: "自己対話の時間" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-[#040B17]/50 backdrop-blur-md border border-white/10 p-10 rounded-2xl text-center hover:border-[#f6bd2b]/30 transition-colors"
                        >
                            <div className="text-white/40 text-sm font-bold tracking-widest mb-4 uppercase">{item.label}</div>
                            <div className="text-5xl md:text-7xl font-bold text-white mb-4 font-['Outfit']">{item.value}</div>
                            <div className="text-white/60 text-xs">{item.desc}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
