import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export function Team() {
    const { t, locale } = useTranslation();

    return (
        <Section id="team" className="bg-[#092a62]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-6 uppercase">{t("team.label")}</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-['Outfit'] mb-8">
                        {t("team.title")}
                    </h3>
                    <p className="text-white/60 max-w-2xl mx-auto whitespace-pre-line">
                        {t("team.desc")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {locale.team.members.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#040B17] border border-white/5 p-8 rounded-xl text-left hover:border-[#f6bd2b]/50 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex-shrink-0" />
                                <div>
                                    <h4 className="text-lg font-bold text-white font-['Outfit']">{item.name}</h4>
                                    <div className="text-[#f6bd2b] text-[10px] font-bold tracking-widest uppercase">{item.role}</div>
                                </div>
                            </div>

                            <p className="text-white/80 text-sm mb-4 font-bold">{item.bio}</p>

                            <ul className="space-y-2 mb-4">
                                {item.details.map((detail, j) => (
                                    <li key={j} className="text-white/50 text-xs leading-relaxed pl-3 relative">
                                        <span className="absolute left-0 top-1.5 w-1 h-1 bg-[#f6bd2b] rounded-full opacity-50" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                            {item.mission && (
                                <div className="pt-4 border-t border-white/5">
                                    <p className="text-[#f6bd2b] text-xs italic opacity-80">"{item.mission}"</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
