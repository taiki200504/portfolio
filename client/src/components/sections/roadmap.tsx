import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Roadmap() {
    return (
        <Section className="bg-[#040B17] py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-[#f6bd2b] font-bold tracking-[0.2em] text-sm mb-4 font-['Outfit']">ROADMAP</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white font-['Outfit']">
                        The Future
                    </h3>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

                    {[
                        { year: "2025", title: "The EGG Launch", desc: "フラッグシップモデルの展開開始。" },
                        { year: "2026", title: "Internal OS App", desc: "思考ログを可視化するアプリのリリース。" },
                        { year: "2028", title: "BMI Integration", desc: "脳波インターフェースとの統合。" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 pl-8 md:pl-0"
                        >
                            <div className="absolute left-[-4px] md:left-1/2 top-2 w-2 h-2 bg-[#f6bd2b] rounded-full md:-translate-x-1/2" />

                            <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
                                <div className="text-4xl font-bold text-white/10 font-['Outfit'] mb-2">{item.year}</div>
                                <h4 className="text-xl font-bold text-white mb-2 font-['Outfit']">{item.title}</h4>
                                <p className="text-white/60 text-sm">{item.desc}</p>
                            </div>
                            <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? "order-2" : "order-1"}`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
