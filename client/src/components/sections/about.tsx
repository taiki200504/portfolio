import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export function About() {
    const { t } = useTranslation();

    return (
        <Section id="about" className="bg-[#040B17] relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* Left: Big Statement */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-8 uppercase">{t("about.label")}</h2>
                            <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight font-['Outfit'] mb-8 whitespace-pre-line">
                                {t("about.title")}
                            </h3>
                            <p className="text-white/60 text-lg leading-relaxed whitespace-pre-line">
                                {t("about.desc")}
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: MVV List */}
                    <div className="lg:col-span-7 space-y-16 lg:mt-32">
                        {[
                            t("about.mission"),
                            t("about.vision"),
                            t("about.value"),
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative pl-8 border-l border-white/10 hover:border-[#f6bd2b] transition-colors duration-500 group"
                            >
                                <span className="text-[#f6bd2b] font-['Outfit'] font-bold tracking-[0.2em] text-xs block mb-4">
                                    {item.label}
                                </span>
                                <h4 className="text-2xl md:text-4xl font-bold text-white mb-2 group-hover:text-[#f6bd2b] transition-colors duration-300">
                                    {item.jp}
                                </h4>
                                <p className="text-white/40 font-['Outfit'] text-sm md:text-base tracking-wide">
                                    {item.en}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </Section>
    );
}
