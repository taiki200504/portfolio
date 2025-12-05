import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";

export default function LineupPage() {
    const { t, language } = useTranslation();

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />

            <main className="pt-24">
                {/* 1. Overview */}
                <Section className="min-h-[40vh] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,189,43,0.05)_0%,transparent_70%)]" />
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold mb-6 font-['Outfit'] tracking-tight"
                        >
                            {t("productPage.lineup.title")}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto whitespace-pre-line leading-relaxed"
                        >
                            {t("productPage.lineup.desc")}
                        </motion.p>
                    </div>
                </Section>

                {/* 2. Zen Egg Models */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Outfit']">
                                {t("productPage.lineup.zenEgg.title")}
                            </h2>
                            <p className="text-white/60">
                                {t("productPage.lineup.zenEgg.desc")}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {(t("productPage.lineup.zenEgg.models") as any[]).map((model, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] h-full flex flex-col hover:border-[#f6bd2b]/30 transition-colors">
                                        <div className="mb-6">
                                            <span className="inline-block px-3 py-1 rounded-full bg-[#f6bd2b]/10 text-[#f6bd2b] text-xs font-bold tracking-widest uppercase mb-4">
                                                {model.tag}
                                            </span>
                                            <h3 className="text-3xl font-bold font-['Outfit'] mb-2">{model.name}</h3>
                                            <p className="text-white/60 text-sm h-10">{model.desc}</p>
                                        </div>

                                        {/* Placeholder for Model Image */}
                                        <div className="w-full aspect-square bg-gradient-to-br from-white/5 to-transparent rounded-xl mb-8 flex items-center justify-center">
                                            <div className="w-32 h-40 bg-[#040B17] rounded-[40%] border border-white/10 opacity-50" />
                                        </div>

                                        <div className="mt-auto space-y-4">
                                            <div className="pt-6 border-t border-white/10">
                                                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Target</p>
                                                <p className="text-sm font-bold">{model.target}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Price</p>
                                                <p className="text-xl font-bold font-['Outfit']">{model.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 3. Coming Soon */}
                <Section className="bg-white/[0.02]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Outfit']">
                                Coming Soon
                            </h2>
                            <p className="text-white/60">
                                {t("productPage.lineup.comingSoon.desc")}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {(t("productPage.lineup.comingSoon.items") as any[]).map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 bg-[#f6bd2b] text-[#040B17] text-xs font-bold px-3 py-1 rounded-bl-lg">
                                        Coming Soon
                                    </div>
                                    <h3 className="text-2xl font-bold font-['Outfit'] mb-4 text-white group-hover:text-[#f6bd2b] transition-colors">{item.name}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 4. CTA */}
                <Section>
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#f6bd2b]/20 to-transparent border border-[#f6bd2b]/30 rounded-3xl p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f6bd2b] rounded-full blur-[100px] opacity-20 pointer-events-none" />

                            <h2 className="text-2xl md:text-3xl font-bold mb-8 font-['Outfit'] relative z-10">
                                {t("productPage.lineup.cta")}
                            </h2>
                            <Link href={language === "en" ? "/en/contact" : "/contact"}>
                                <button className="px-8 py-4 bg-[#f6bd2b] text-[#040B17] rounded-full font-bold hover:bg-[#f6bd2b]/90 transition-colors inline-flex items-center gap-2 relative z-10">
                                    Contact Us
                                    <ArrowRight className="w-5 h-5" />
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
