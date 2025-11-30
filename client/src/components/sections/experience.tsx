import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Experience() {
    return (
        <Section className="bg-[#040B17] py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-[#f6bd2b] font-bold tracking-[0.2em] text-sm mb-4 font-['Outfit']">EXPERIENCE</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white font-['Outfit']">
                        30min Dive
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { step: "01", title: "Shut Down", desc: "物理的遮断。外界のノイズを完全に断つ。" },
                        { step: "02", title: "Tune In", desc: "光と音による誘導。脳波をα波〜θ波へ。" },
                        { step: "03", title: "Awaken", desc: "覚醒。思考ログを受け取り、現実へ戻る。" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative p-8 border-l border-white/10 hover:border-[#f6bd2b] transition-colors"
                        >
                            <div className="text-6xl font-bold text-white/5 mb-4 font-['Outfit'] group-hover:text-[#f6bd2b]/10 transition-colors">
                                {item.step}
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4 font-['Outfit']">{item.title}</h4>
                            <p className="text-white/60 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
