import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Brain, Layers, Database, Activity } from "lucide-react";
import { Link } from "wouter";

export default function PlatformPage() {
    const { t, language } = useTranslation();

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />

            <main className="pt-24">
                {/* 1. Hero */}
                <Section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,189,43,0.05)_0%,transparent_70%)]" />
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-['Outfit'] tracking-tight"
                        >
                            {t("productPage.platform.hero.title")}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto whitespace-pre-line leading-relaxed"
                        >
                            {t("productPage.platform.hero.desc")}
                        </motion.p>
                    </div>
                </Section>

                {/* 2. Concept: External vs Internal */}
                <Section>
                    <div className="container mx-auto px-4">
                        <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-16 uppercase text-center">
                            {t("productPage.platform.concept.title")}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* External */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-12 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center opacity-50 hover:opacity-100 transition-opacity duration-500"
                            >
                                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-8">
                                    <Smartphone className="w-10 h-10 text-white/40" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{t("productPage.platform.concept.external.title")}</h3>
                                <p className="text-white/60 whitespace-pre-line leading-relaxed">
                                    {t("productPage.platform.concept.external.desc")}
                                </p>
                            </motion.div>

                            {/* Internal */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-12 rounded-3xl bg-gradient-to-br from-[#f6bd2b]/10 to-transparent border border-[#f6bd2b]/30 flex flex-col items-center text-center relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-[#f6bd2b]/5 blur-3xl" />
                                <div className="w-20 h-20 rounded-full bg-[#f6bd2b]/10 flex items-center justify-center mb-8 relative z-10">
                                    <Brain className="w-10 h-10 text-[#f6bd2b]" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-[#f6bd2b] relative z-10">{t("productPage.platform.concept.internal.title")}</h3>
                                <p className="text-white/80 whitespace-pre-line leading-relaxed relative z-10">
                                    {t("productPage.platform.concept.internal.desc")}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </Section>

                {/* 3. 3 Layers */}
                <Section className="bg-white/[0.02]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-16 uppercase text-center">
                            {t("productPage.platform.layers.title")}
                        </h2>
                        <div className="max-w-4xl mx-auto space-y-6">
                            {(t("productPage.platform.layers.items") as any[]).map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-2xl bg-[#040B17] border border-white/10 flex flex-col md:flex-row items-center gap-8 hover:border-[#f6bd2b]/30 transition-colors"
                                >
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl font-bold font-['Outfit'] text-white/40">0{i + 1}</span>
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                                            <h3 className="text-2xl font-bold font-['Outfit']">{item.title}</h3>
                                            <span className="px-3 py-1 rounded-full bg-[#f6bd2b]/10 text-[#f6bd2b] text-xs font-bold uppercase tracking-widest inline-block w-fit mx-auto md:mx-0">
                                                {item.sub}
                                            </span>
                                        </div>
                                        <p className="text-white/60">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 4. Data Vision */}
                <Section>
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#f6bd2b] to-orange-500 flex items-center justify-center shadow-[0_0_50px_rgba(246,189,43,0.3)]"
                            >
                                <Database className="w-10 h-10 text-[#040B17]" />
                            </motion.div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Outfit']">
                                {t("productPage.platform.vision.title")}
                            </h2>
                            <p className="text-lg md:text-xl text-white/70 whitespace-pre-line leading-relaxed mb-12">
                                {t("productPage.platform.vision.desc")}
                            </p>
                        </div>
                    </div>
                </Section>

                {/* 5. CTA */}
                <Section className="bg-[#f6bd2b] text-[#040B17]">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 font-['Outfit']">
                            Interested in partnering?
                        </h2>
                        <Link href={language === "en" ? "/en/contact" : "/contact"}>
                            <button className="px-8 py-4 bg-[#040B17] text-white rounded-full font-bold hover:bg-[#040B17]/80 transition-colors inline-flex items-center gap-2">
                                {t("productPage.platform.cta")}
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
