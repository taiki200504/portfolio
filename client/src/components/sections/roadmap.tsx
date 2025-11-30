import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export function Roadmap() {
    const { t } = useTranslation();
    const items = t("roadmap.items");

    return (
        <Section id="roadmap" className="bg-[#040B17]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-6 uppercase">{t("roadmap.label")}</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-['Outfit']">
                        {t("roadmap.title")}
                    </h3>
                </div>

                <div className="max-w-4xl mx-auto space-y-16 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 top-4 bottom-4 w-px bg-white/10 md:left-1/2" />

                    {items.map((item: any, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="flex-1 md:text-right">
                                {item.image && (
                                    <div className={`mb-4 ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-[200px]`}>
                                        <img src={item.image} alt={item.title} className="rounded-2xl border border-white/10 opacity-80 hover:opacity-100 transition-opacity" />
                                    </div>
                                )}
                            </div>

                            {/* Dot */}
                            <div className="absolute left-4 w-3 h-3 bg-[#f6bd2b] rounded-full -translate-x-1.5 mt-2 md:left-1/2" />

                            <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                                <div className="text-[#f6bd2b] font-bold font-['Outfit'] text-xl mb-2">{item.year}</div>
                                <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
