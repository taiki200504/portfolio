import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Building2, History, Map, Users } from "lucide-react";
import { Link } from "wouter";

export default function CompanyHub() {
    const { t, language } = useTranslation();

    const menuItems = [
        {
            label: t("companyPage.menu.about.label"),
            title: t("companyPage.menu.about.title"),
            description: t("companyPage.menu.about.desc"),
            icon: Building2,
            href: language === "en" ? "/en/company/about" : "/company/about",
        },
        {
            label: t("companyPage.menu.story.label"),
            title: t("companyPage.menu.story.title"),
            description: t("companyPage.menu.story.desc"),
            icon: History,
            href: language === "en" ? "/en/company/story" : "/company/story",
        },
        {
            label: t("companyPage.menu.roadmap.label"),
            title: t("companyPage.menu.roadmap.title"),
            description: t("companyPage.menu.roadmap.desc"),
            icon: Map,
            href: language === "en" ? "/en/company/roadmap" : "/company/roadmap",
        },
        {
            label: t("companyPage.menu.team.label"),
            title: t("companyPage.menu.team.title"),
            description: t("companyPage.menu.team.desc"),
            icon: Users,
            href: language === "en" ? "/en/company/team" : "/company/team",
        },
    ];

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />

            <main className="pt-24">
                {/* 1. HERO */}
                <Section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,189,43,0.1)_0%,transparent_70%)]" />
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-['Outfit'] tracking-tight"
                        >
                            {t("companyPage.hero.title")}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto whitespace-pre-line leading-relaxed mb-8"
                        >
                            {t("companyPage.hero.subtitle")}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-sm text-[#f6bd2b] tracking-widest uppercase font-['Outfit']"
                        >
                            {t("companyPage.hero.tagline")}
                        </motion.p>
                    </div>
                </Section>

                {/* 2. LYEN in 60 seconds */}
                <Section className="bg-white/[0.02]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-12 uppercase text-center">
                                {t("companyPage.summary.title")}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                                {(t("companyPage.summary.points") as any[]).map((point, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="space-y-4"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-[#f6bd2b]/10 flex items-center justify-center text-[#f6bd2b] font-bold font-['Outfit']">
                                            {i + 1}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">
                                            {point.title}
                                        </h3>
                                        <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                                            {point.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 3. Company Menu */}
                <Section>
                    <div className="container mx-auto px-4">
                        <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-12 uppercase text-center">
                            {t("companyPage.menu.title")}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {menuItems.map((item, i) => (
                                <Link key={i} href={item.href} className="block group h-full">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className={cn(
                                            "relative overflow-hidden rounded-[24px] p-8 h-full min-h-[240px] transition-all duration-500",
                                            "border border-white/10 group-hover:border-[#f6bd2b]/60",
                                            "bg-gradient-to-br from-white/[0.08] to-white/[0.02] group-hover:from-white/[0.12] group-hover:to-white/[0.04]",
                                            "backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] group-hover:shadow-[0_8px_32px_rgba(246,189,43,0.1)]",
                                            "flex flex-col justify-between"
                                        )}
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <span className="text-[#f6bd2b] text-xs font-bold tracking-[0.2em] uppercase">
                                                {item.label}
                                            </span>
                                            <item.icon className="w-6 h-6 text-white/40 group-hover:text-[#f6bd2b] transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#f6bd2b] transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="mt-6 flex justify-end">
                                            <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#f6bd2b] group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 4. CTA */}
                <Section className="bg-[#f6bd2b] text-[#040B17]">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Outfit']">
                            {t("companyPage.cta.title")}
                        </h2>
                        <p className="text-[#040B17]/70 text-lg mb-10 max-w-2xl mx-auto whitespace-pre-line">
                            {t("companyPage.cta.desc")}
                        </p>
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
                        <div className="mt-8">
                            <Link href={language === "en" ? "/en/waiting-list" : "/waiting-list"}>
                                <span className="text-[#040B17] font-bold border-b border-[#040B17] hover:opacity-70 cursor-pointer transition-opacity">
                                    {t("companyPage.cta.link")}
                                </span>
                            </Link>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
