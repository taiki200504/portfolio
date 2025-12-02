import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Brain, Layers, Mic, Zap } from "lucide-react";

export default function CompanyAbout() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />

            <main className="pt-24">
                {/* 1. HERO: Current World */}
                <Section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,189,43,0.05)_0%,transparent_70%)]" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 font-['Outfit'] tracking-tight leading-tight whitespace-pre-line"
                            >
                                {t("companyPage.aboutPage.hero.title")}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-lg md:text-xl text-white/70 whitespace-pre-line leading-relaxed"
                            >
                                {t("companyPage.aboutPage.hero.desc")}
                            </motion.p>
                        </div>
                    </div>
                </Section>

                {/* 2. Internal OS (3 Layers) */}
                <Section className="bg-white/[0.02]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl md:text-4xl font-bold mb-6 font-['Outfit'] whitespace-pre-line">
                                    {t("companyPage.aboutPage.internalOS.title")}
                                </h2>
                                <p className="text-white/70 text-lg whitespace-pre-line">
                                    {t("companyPage.aboutPage.internalOS.desc")}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {(t("companyPage.aboutPage.internalOS.layers") as any[]).map((layer, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:bg-white/[0.05] transition-colors"
                                    >
                                        <div className="w-12 h-12 mx-auto bg-[#f6bd2b]/10 rounded-full flex items-center justify-center mb-6">
                                            {i === 0 && <Layers className="w-6 h-6 text-[#f6bd2b]" />}
                                            {i === 1 && <Zap className="w-6 h-6 text-[#f6bd2b]" />}
                                            {i === 2 && <Brain className="w-6 h-6 text-[#f6bd2b]" />}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 font-['Outfit']">{layer.title}</h3>
                                        <p className="text-[#f6bd2b] text-sm font-bold tracking-widest uppercase mb-4">
                                            {layer.subtitle}
                                        </p>
                                        <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                                            {layer.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 3. Why Now */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-12 uppercase text-center">
                                WHY NOW
                            </h2>
                            <h3 className="text-2xl md:text-4xl font-bold mb-16 text-center font-['Outfit']">
                                {t("companyPage.aboutPage.whyNow.title")}
                            </h3>
                            <div className="space-y-12">
                                {(t("companyPage.aboutPage.whyNow.points") as any[]).map((point, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
                                    >
                                        <div className="w-full md:w-1/3">
                                            <h4 className="text-xl font-bold text-[#f6bd2b] border-l-2 border-[#f6bd2b] pl-4">
                                                {point.title}
                                            </h4>
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <p className="text-white/70 leading-relaxed whitespace-pre-line">
                                                {point.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 4. MVV */}
                <Section className="bg-white/[0.02]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-16 uppercase text-center">
                                {t("companyPage.aboutPage.mvv.title")}
                            </h2>

                            <div className="space-y-24">
                                {/* Mission */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <span className="text-white/40 text-sm tracking-[0.5em] uppercase block mb-6">
                                        {t("companyPage.aboutPage.mvv.mission.label")}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-8 font-['Outfit']">
                                        {t("companyPage.aboutPage.mvv.mission.title")}
                                    </h3>
                                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
                                        {t("companyPage.aboutPage.mvv.mission.desc")}
                                    </p>
                                </motion.div>

                                {/* Vision */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <span className="text-white/40 text-sm tracking-[0.5em] uppercase block mb-6">
                                        {t("companyPage.aboutPage.mvv.vision.label")}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-8 font-['Outfit']">
                                        {t("companyPage.aboutPage.mvv.vision.title")}
                                    </h3>
                                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
                                        {t("companyPage.aboutPage.mvv.vision.desc")}
                                    </p>
                                </motion.div>

                                {/* Value */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <span className="text-white/40 text-sm tracking-[0.5em] uppercase block mb-6">
                                        {t("companyPage.aboutPage.mvv.value.label")}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-8 font-['Outfit']">
                                        {t("companyPage.aboutPage.mvv.value.title")}
                                    </h3>
                                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
                                        {t("companyPage.aboutPage.mvv.value.desc")}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 5. 3 Promises */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-16 uppercase text-center">
                                {t("companyPage.aboutPage.promises.title")}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {(t("companyPage.aboutPage.promises.items") as any[]).map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className="w-16 h-16 mx-auto border border-[#f6bd2b]/30 rounded-full flex items-center justify-center mb-6 text-[#f6bd2b] font-bold font-['Outfit'] text-xl">
                                            {i + 1}
                                        </div>
                                        <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
