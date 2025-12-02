import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function CompanyStory() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />

            <main className="pt-24">
                {/* 1. Beginning */}
                <Section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,189,43,0.05)_0%,transparent_70%)]" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 font-['Outfit'] tracking-tight leading-tight whitespace-pre-line"
                            >
                                {t("companyPage.storyPage.hero.title")}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-lg md:text-xl text-white/70 whitespace-pre-line leading-relaxed"
                            >
                                {t("companyPage.storyPage.hero.desc")}
                            </motion.p>
                        </div>
                    </div>
                </Section>

                {/* 2. Shell Idea */}
                <Section className="bg-white/[0.02]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <h2 className="text-2xl md:text-4xl font-bold mb-8 font-['Outfit'] whitespace-pre-line">
                                    {t("companyPage.storyPage.shellIdea.title")}
                                </h2>
                                <p className="text-lg text-white/70 whitespace-pre-line leading-relaxed">
                                    {t("companyPage.storyPage.shellIdea.desc")}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </Section>

                {/* 3. Egg Shape */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <h2 className="text-2xl md:text-4xl font-bold mb-8 font-['Outfit'] whitespace-pre-line">
                                    {t("companyPage.storyPage.eggShape.title")}
                                </h2>
                                <p className="text-lg text-white/70 whitespace-pre-line leading-relaxed">
                                    {t("companyPage.storyPage.eggShape.desc")}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </Section>

                {/* 4. Prototype */}
                <Section className="bg-white/[0.02]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <h2 className="text-2xl md:text-4xl font-bold mb-8 font-['Outfit'] whitespace-pre-line">
                                    {t("companyPage.storyPage.prototype.title")}
                                </h2>
                                <p className="text-lg text-white/70 whitespace-pre-line leading-relaxed">
                                    {t("companyPage.storyPage.prototype.desc")}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </Section>

                {/* 5. Future Story */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <h2 className="text-2xl md:text-4xl font-bold mb-8 font-['Outfit'] whitespace-pre-line">
                                    {t("companyPage.storyPage.future.title")}
                                </h2>
                                <p className="text-lg text-white/70 whitespace-pre-line leading-relaxed">
                                    {t("companyPage.storyPage.future.desc")}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
