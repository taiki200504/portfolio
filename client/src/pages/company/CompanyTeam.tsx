import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Team } from "@/components/sections/team";
import { Section } from "@/components/ui/section";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "wouter";

export default function CompanyTeam() {
    const { t, language } = useTranslation();

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />

            <main className="pt-24">
                {/* 1. Hero / Intro */}
                <Section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,189,43,0.05)_0%,transparent_70%)]" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 font-['Outfit'] tracking-tight leading-tight whitespace-pre-line"
                            >
                                {t("companyPage.teamPage.hero.title")}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-lg md:text-xl text-white/70 whitespace-pre-line leading-relaxed"
                            >
                                {t("companyPage.teamPage.hero.desc")}
                            </motion.p>
                        </div>
                    </div>
                </Section>

                {/* 2. Core Team (Reusing existing Team component) */}
                <Team />

                {/* 3. Advisors / Partners */}
                <Section className="bg-white/[0.02]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-12 uppercase">
                                {t("companyPage.teamPage.advisors.title")}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {(t("companyPage.teamPage.advisors.items") as any[]).map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white/[0.03] border border-white/10 rounded-xl p-8 hover:bg-white/[0.05] transition-colors"
                                    >
                                        <p className="text-white/80 font-bold">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 4. Careers CTA */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-[#f6bd2b]/20 to-transparent border border-[#f6bd2b]/30 rounded-3xl p-12 md:p-16 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#f6bd2b] rounded-full blur-[100px] opacity-20 pointer-events-none" />

                                <h2 className="text-2xl md:text-4xl font-bold mb-6 font-['Outfit'] relative z-10">
                                    {t("companyPage.teamPage.careers.title")}
                                </h2>
                                <p className="text-white/70 text-lg mb-10 whitespace-pre-line relative z-10">
                                    {t("companyPage.teamPage.careers.desc")}
                                </p>
                                <Link href={language === "en" ? "/en/company#contact" : "/company#contact"}>
                                    <button className="px-8 py-4 bg-[#f6bd2b] text-[#040B17] rounded-full font-bold hover:bg-[#f6bd2b]/90 transition-colors inline-flex items-center gap-2 relative z-10">
                                        <Mail className="w-5 h-5" />
                                        {t("companyPage.teamPage.careers.cta")}
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
