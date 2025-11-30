import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function UseCases() {
    return (
        <Section id="use-cases" className="bg-[#092a62] py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#040B17]/80" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-[#f6bd2b] font-bold tracking-[0.2em] text-sm mb-4 font-['Outfit']">USE CASES</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white font-['Outfit']">
                        For Visionaries
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Executive", subtitle: "決断のための静寂", desc: "重要な意思決定の前に、ノイズを排して本質に向き合う。" },
                        { title: "Creator", subtitle: "0→1を生む空白", desc: "情報のインプットを止め、内側からアイデアが湧くのを待つ。" },
                        { title: "Recovery", subtitle: "デジタルデトックス", desc: "強制的なオフライン環境で、脳の疲労をリセットする。" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
                        >
                            <h4 className="text-2xl font-bold text-white mb-2 font-['Outfit']">{item.title}</h4>
                            <div className="text-[#f6bd2b] text-xs font-bold tracking-wider mb-4">{item.subtitle}</div>
                            <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
