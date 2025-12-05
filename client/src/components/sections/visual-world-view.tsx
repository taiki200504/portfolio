import { Section } from "@/components/ui/section";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";

export function VisualWorldView() {
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
        <Section className="py-0 relative overflow-hidden">
            {/* Background Visual - Abstract/Immersive */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#040B17]/60 z-10" />
                {/* Using a placeholder gradient/shape if no specific image is available, or reusing a hero asset */}
                <img
                    src="/assets/products/matsu/main.png" // Fallback or use a specific world view image
                    alt="World View"
                    className="w-full h-full object-cover opacity-40 blur-sm scale-110"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040B17] via-[#040B17]/50 to-transparent z-10" />
            </div>

            <div className="container mx-auto px-4 relative z-20 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] uppercase mb-16 text-center font-['Outfit']">
                        {t("lyenIn60s.title")}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {points.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm h-full flex flex-col hover:border-[#f6bd2b]/30 transition-colors">
                                    <div className="text-4xl font-bold text-white/10 font-['Outfit'] mb-6 absolute top-4 right-6">
                                        0{index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold font-['Outfit'] mb-4 text-white group-hover:text-[#f6bd2b] transition-colors">
                                        {point.title}
                                    </h3>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        {point.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
