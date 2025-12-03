import { Section } from "@/components/ui/section";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";

export function LyenIn60s() {
    const { t } = useTranslation();

    const points = [
        {
            title: t("lyenIn60s.points.0.title"),
            desc: t("lyenIn60s.points.0.desc"),
        },
        {
            title: t("lyenIn60s.points.1.title"),
            desc: t("lyenIn60s.points.1.desc"),
        },
        {
            title: t("lyenIn60s.points.2.title"),
            desc: t("lyenIn60s.points.2.desc"),
        },
    ];

    return (
        <Section className="py-24 bg-white/[0.02]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] uppercase mb-12 text-center font-['Outfit']">
                        {t("lyenIn60s.title")}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {points.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center md:text-left"
                            >
                                <div className="w-12 h-1 bg-white/10 mb-6 mx-auto md:mx-0" />
                                <h3 className="text-xl font-bold font-['Outfit'] mb-4 text-white">
                                    {point.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {point.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
