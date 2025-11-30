import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function UseCases() {
    return (
        <Section id="use-cases" className="bg-[#092a62]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-6 uppercase">USE CASES</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-['Outfit']">
                        For Visionaries
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            role: "Executive",
                            title: "Decision Making",
                            desc: "情報の洪水を遮断し、重要な意思決定のための「空白」を確保する。"
                        },
                        {
                            role: "Creator",
                            title: "Deep Work",
                            desc: "ゾーン状態へ瞬時に移行し、0から1を生み出す創造性を最大化する。"
                        },
                        {
                            role: "Recovery",
                            title: "Digital Detox",
                            desc: "強制的なオフライン環境で、脳疲労を回復しパフォーマンスを取り戻す。"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#040B17] p-8 rounded-xl border border-white/5 hover:border-[#f6bd2b] transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="text-[#f6bd2b] text-xs font-bold tracking-widest uppercase mb-4 opacity-70 group-hover:opacity-100">
                                {item.role}
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4 font-['Outfit']">
                                {item.title}
                            </h4>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
