import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export function Team() {
    const { t, locale } = useTranslation();

    return (
        <Section id="team" className="relative bg-[#040B17] overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#092a62] rounded-full blur-[150px] opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f6bd2b] rounded-full blur-[150px] opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-6 uppercase text-glow">{t("team.label")}</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white font-['Outfit'] mb-8 tracking-wide">
                        {t("team.title")}
                    </h3>
                    <p className="text-white/60 max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
                        {t("team.desc")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {locale.team.members.map((item: any, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl text-left hover:border-[#f6bd2b]/50 hover:bg-white/10 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(246,189,43,0.05)]"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full flex-shrink-0 border border-white/10 overflow-hidden relative">
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5" />
                                    )}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white font-['Outfit'] group-hover:text-glow-sm transition-all">{item.name}</h4>
                                    <div className="text-[#f6bd2b] text-[10px] font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100">{item.role}</div>
                                </div>
                            </div>

                            <p className="text-white/80 text-sm mb-4 font-bold">{item.bio}</p>

                            <ul className="space-y-2 mb-4">
                                {item.details.map((detail: string, j: number) => (
                                    <li key={j} className="text-white/50 text-xs leading-relaxed pl-3 relative group-hover:text-white/70 transition-colors">
                                        <span className="absolute left-0 top-1.5 w-1 h-1 bg-[#f6bd2b] rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                            {item.mission && (
                                <div className="pt-4 border-t border-white/5">
                                    <p className="text-[#f6bd2b] text-xs italic opacity-80 group-hover:opacity-100 transition-opacity">"{item.mission}"</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
