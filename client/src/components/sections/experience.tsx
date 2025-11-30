import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Experience() {
    return (
        <Section id="experience" className="bg-[#040B17] border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-6 uppercase">EXPERIENCE</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-['Outfit']">
                        30min Dive
                    </h3>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line (Mobile) / Horizontal Line (Desktop) */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 md:left-0 md:right-0 md:top-8 md:h-px md:w-full md:bg-gradient-to-r md:from-transparent md:via-white/20 md:to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {[
                            { time: "00-05", unit: "min", title: "Shut Down", desc: "外界との遮断。呼吸を整え、ノイズを手放す。" },
                            { time: "05-25", unit: "min", title: "Tune In", desc: "深い没入。思考の整理と、内なる声への傾聴。" },
                            { time: "25-30", unit: "min", title: "Awaken", desc: "覚醒。クリアな思考と共に、現実世界へ戻る。" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative pl-24 md:pl-0 md:pt-24 text-left md:text-center group"
                            >
                                {/* Dot */}
                                <div className="absolute left-6 top-0 w-4 h-4 bg-[#040B17] border-2 border-white/20 rounded-full md:left-1/2 md:-translate-x-1/2 md:top-6 group-hover:border-[#f6bd2b] group-hover:bg-[#f6bd2b] transition-colors duration-300" />

                                <div className="font-['Outfit'] mb-2">
                                    <span className="text-4xl font-bold text-white">{item.time}</span>
                                    <span className="text-white/40 text-sm ml-1">{item.unit}</span>
                                </div>
                                <h4 className="text-xl font-bold text-[#f6bd2b] mb-4 font-['Outfit']">{item.title}</h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
