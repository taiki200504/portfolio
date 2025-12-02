import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, Wind, Lightbulb, Speaker, Layers, Brain, Heart, Zap } from "lucide-react";
import { Link } from "wouter";

export default function TheEggPage() {
    const { t, language } = useTranslation();

    const specs = [
        { icon: Speaker, key: 0 },
        { icon: Lightbulb, key: 1 },
        { icon: Wind, key: 2 },
        { icon: Layers, key: 3 },
    ];

    const benefits = [
        { icon: Zap, key: 0 },
        { icon: Heart, key: 1 },
        { icon: Brain, key: 2 },
    ];

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />

            <main className="pt-24">
                {/* 1. Hero */}
                <Section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,189,43,0.1)_0%,transparent_70%)]" />
                    {/* Placeholder for EGG Image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] bg-[#f6bd2b]/5 rounded-[50%] blur-[100px] pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-['Outfit'] tracking-tight"
                        >
                            {t("productPage.theEgg.hero.title")}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto whitespace-pre-line leading-relaxed"
                        >
                            {t("productPage.theEgg.hero.subtitle")}
                        </motion.p>
                    </div>
                </Section>

                {/* 2. What is The EGG */}
                <Section className="bg-white/[0.02]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-8 uppercase">
                                {t("productPage.theEgg.whatIs.title")}
                            </h2>
                            <p className="text-2xl md:text-3xl font-bold leading-relaxed whitespace-pre-line">
                                {t("productPage.theEgg.whatIs.desc")}
                            </p>
                        </div>
                    </div>
                </Section>

                {/* 3. Experience Flow */}
                <Section>
                    <div className="container mx-auto px-4">
                        <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-16 uppercase text-center">
                            {t("productPage.theEgg.flow.title")}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {(t("productPage.theEgg.flow.steps") as any[]).map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative"
                                >
                                    <div className="text-4xl font-bold text-white/10 font-['Outfit'] mb-4">0{i + 1}</div>
                                    <h3 className="text-xl font-bold text-white mb-2 font-['Outfit']">{step.title}</h3>
                                    <p className="text-white/60 text-sm">{step.desc}</p>
                                    {i < 3 && (
                                        <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-white/10 to-transparent translate-x-1/2" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 4. Hardware Specs */}
                <Section className="bg-white/[0.02]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-16 uppercase text-center">
                            {t("productPage.theEgg.specs.title")}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {(t("productPage.theEgg.specs.features") as any[]).map((feature, i) => {
                                const Icon = specs[i].icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#f6bd2b]/30 transition-colors"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-[#f6bd2b]/10 flex items-center justify-center text-[#f6bd2b] flex-shrink-0">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">{feature.title}</h3>
                                            <p className="text-white/60 text-sm">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </Section>

                {/* 5. Benefits */}
                <Section>
                    <div className="container mx-auto px-4">
                        <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-16 uppercase text-center">
                            {t("productPage.theEgg.benefits.title")}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {(t("productPage.theEgg.benefits.points") as string[]).map((point, i) => {
                                const Icon = benefits[i].icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="text-center p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10"
                                    >
                                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#f6bd2b]/10 flex items-center justify-center text-[#f6bd2b]">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{point}</h3>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </Section>

                {/* 6. CTA */}
                <Section className="bg-[#f6bd2b] text-[#040B17]">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Outfit']">
                            Ready to dive inside?
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href={language === "en" ? "/en/contact" : "/contact"}>
                                <button className="px-8 py-4 bg-[#040B17] text-white rounded-full font-bold hover:bg-[#040B17]/80 transition-colors w-full sm:w-auto">
                                    {t("companyPage.cta.primary")}
                                </button>
                            </Link>
                            <Link href={language === "en" ? "/en/catalog" : "/catalog"}>
                                <button className="px-8 py-4 bg-transparent border-2 border-[#040B17] text-[#040B17] rounded-full font-bold hover:bg-[#040B17]/10 transition-colors w-full sm:w-auto">
                                    {t("companyPage.cta.secondary")}
                                </button>
                            </Link>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
