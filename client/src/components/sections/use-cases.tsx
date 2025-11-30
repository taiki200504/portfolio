import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function UseCases() {
    return (
        <Section id="use-cases" className="relative bg-[#040B17] overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#092a62] rounded-full blur-[120px] opacity-40 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#f6bd2b] rounded-full blur-[120px] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-6 uppercase text-glow">USE CASES</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white font-['Outfit'] tracking-wide">
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
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#f6bd2b]/50 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(246,189,43,0.1)]"
                        >
                            <div className="text-[#f6bd2b] text-xs font-bold tracking-widest uppercase mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                {item.role}
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4 font-['Outfit'] group-hover:text-glow-sm transition-all">
                                {item.title}
                            </h4>
                            <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
