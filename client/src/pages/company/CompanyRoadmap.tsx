import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";
import { CheckCircle2, Flag, Globe2, Rocket } from "lucide-react";

export default function CompanyRoadmap() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />

            <main className="pt-24">
                {/* 1. Vision */}
                <Section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,189,43,0.05)_0%,transparent_70%)]" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 font-['Outfit'] tracking-tight leading-tight whitespace-pre-line"
                            >
                                {t("companyPage.roadmapPage.hero.title")}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-lg md:text-xl text-white/70 whitespace-pre-line leading-relaxed"
                            >
                                {t("companyPage.roadmapPage.hero.desc")}
                            </motion.p>
                        </div>
                    </div>
                </Section>

                {/* 2. Roadmap Steps */}
                <Section className="bg-white/[0.02]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-24 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#f6bd2b] via-white/20 to-transparent md:-translate-x-1/2" />

                            {/* Year 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative pl-24 md:pl-0"
                            >
                                <div className="absolute left-0 md:left-1/2 top-0 w-16 h-16 bg-[#040B17] border border-[#f6bd2b] rounded-full flex items-center justify-center md:-translate-x-1/2 z-10">
                                    <Rocket className="w-8 h-8 text-[#f6bd2b]" />
                                </div>
                                <div className="md:w-1/2 md:pl-16 md:ml-auto md:text-left">
                                    <h3 className="text-2xl font-bold mb-6 font-['Outfit'] text-[#f6bd2b]">
                                        {t("companyPage.roadmapPage.year1.title")}
                                    </h3>
                                    <ul className="space-y-4">
                                        {(t("companyPage.roadmapPage.year1.items") as any[]).map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-white/70">
                                                <CheckCircle2 className="w-5 h-5 text-[#f6bd2b]/50 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Year 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative pl-24 md:pl-0"
                            >
                                <div className="absolute left-0 md:left-1/2 top-0 w-16 h-16 bg-[#040B17] border border-white/20 rounded-full flex items-center justify-center md:-translate-x-1/2 z-10">
                                    <Flag className="w-8 h-8 text-white" />
                                </div>
                                <div className="md:w-1/2 md:pr-16 md:mr-auto md:text-right">
                                    <h3 className="text-2xl font-bold mb-6 font-['Outfit']">
                                        {t("companyPage.roadmapPage.year2.title")}
                                    </h3>
                                    <ul className="space-y-4 inline-block text-left">
                                        {(t("companyPage.roadmapPage.year2.items") as any[]).map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-white/70">
                                                <CheckCircle2 className="w-5 h-5 text-white/30 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Year 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative pl-24 md:pl-0"
                            >
                                <div className="absolute left-0 md:left-1/2 top-0 w-16 h-16 bg-[#040B17] border border-white/20 rounded-full flex items-center justify-center md:-translate-x-1/2 z-10">
                                    <Globe2 className="w-8 h-8 text-white" />
                                </div>
                                <div className="md:w-1/2 md:pl-16 md:ml-auto md:text-left">
                                    <h3 className="text-2xl font-bold mb-6 font-['Outfit']">
                                        {t("companyPage.roadmapPage.year3.title")}
                                    </h3>
                                    <ul className="space-y-4">
                                        {(t("companyPage.roadmapPage.year3.items") as any[]).map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-white/70">
                                                <CheckCircle2 className="w-5 h-5 text-white/30 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </Section>

                {/* 3. Current Status */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-12 uppercase">
                                CURRENT STATUS
                            </h2>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white/[0.03] border border-[#f6bd2b]/30 rounded-2xl p-8 md:p-12"
                            >
                                <h3 className="text-2xl md:text-3xl font-bold mb-8 font-['Outfit']">
                                    {t("companyPage.roadmapPage.currentStatus.title")}
                                </h3>
                                <ul className="space-y-6 text-left max-w-2xl mx-auto">
                                    {(t("companyPage.roadmapPage.currentStatus.items") as any[]).map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-[#f6bd2b]/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-[#f6bd2b]" />
                                            </div>
                                            <span className="text-lg text-white/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
