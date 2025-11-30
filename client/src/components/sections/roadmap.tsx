import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Roadmap() {
    return (
        <Section id="roadmap" className="bg-[#040B17]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-6 uppercase">ROADMAP</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-['Outfit']">
                        The Future
                    </h3>
                </div>

                <div className="max-w-3xl mx-auto space-y-12 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 top-4 bottom-4 w-px bg-white/10 md:left-1/2" />

                    {[
                        { year: "2025", title: "The EGG Launch", desc: "フラッグシップモデル「The EGG」のリリースと、都内拠点での展開。" },
                        { year: "2026", title: "Internal OS App", desc: "バイタルデータと連動し、日常のメンタルコンディションを管理するアプリ。" },
                        { year: "2028", title: "BMI Integration", desc: "脳波インターフェース(BMI)の実装による、思考と空間の直接的な同期。" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="flex-1 md:text-right">
                                {/* Spacer for layout balance */}
                            </div>

                            {/* Dot */}
                            <div className="absolute left-4 w-3 h-3 bg-[#f6bd2b] rounded-full -translate-x-1.5 mt-2 md:left-1/2" />

                            <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                                <div className="text-[#f6bd2b] font-bold font-['Outfit'] text-xl mb-2">{item.year}</div>
                                <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                                <p className="text-white/60 text-sm">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
