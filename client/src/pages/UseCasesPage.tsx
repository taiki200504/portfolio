import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Link } from "wouter";

export default function UseCasesPage() {
    const { t, language } = useTranslation();

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />

            <main className="pt-24">
                {/* 1. Hero */}
                <Section className="min-h-[40vh] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,189,43,0.05)_0%,transparent_70%)]" />
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold mb-6 font-['Outfit'] tracking-tight"
                        >
                            {t("productPage.useCases.hero.title")}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto whitespace-pre-line leading-relaxed"
                        >
                            {t("productPage.useCases.hero.desc")}
                        </motion.p>
                    </div>
                </Section>

                {/* 2. Scenes */}
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
                            {(t("productPage.useCases.scenes") as any[]).map((scene, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-[#f6bd2b]/30 transition-colors"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        {/* Placeholder for Scene Image */}
                                        <div className="h-64 md:h-auto bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[#040B17]/20" />
                                            {/* You could add specific icons or abstract shapes here based on the scene */}
                                        </div>

                                        <div className="p-8 md:p-12 flex flex-col justify-center">
                                            <h3 className="text-2xl font-bold font-['Outfit'] mb-8">{scene.title}</h3>

                                            <div className="space-y-6 mb-8">
                                                <div className="flex gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 flex-shrink-0">
                                                        <XCircle className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Before</p>
                                                        <p className="text-white/80">{scene.before}</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-[#f6bd2b]/10 flex items-center justify-center text-[#f6bd2b] flex-shrink-0">
                                                        <CheckCircle2 className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-white/40 uppercase tracking-widest mb-1">After</p>
                                                        <p className="text-white/80 font-bold">{scene.after}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                                                <div>
                                                    <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Recommended Model</p>
                                                    <p className="text-lg font-bold font-['Outfit'] text-[#f6bd2b]">{scene.model}</p>
                                                </div>
                                                <Link href={language === "en" ? "/en/product/lineup" : "/product/lineup"}>
                                                    <button className="text-xs font-bold tracking-widest uppercase border-b border-white/20 hover:border-[#f6bd2b] hover:text-[#f6bd2b] transition-colors pb-1">
                                                        View Model
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 3. PoC Flow */}
                <Section className="bg-white/[0.02]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-16 uppercase text-center">
                            {t("productPage.useCases.poc.title")}
                        </h2>
                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                                {/* Connector Line */}
                                <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                {(t("productPage.useCases.poc.steps") as string[]).map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative text-center"
                                    >
                                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#040B17] border border-white/10 flex items-center justify-center relative z-10">
                                            <span className="text-3xl font-bold font-['Outfit'] text-[#f6bd2b]">0{i + 1}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white">{step}</h3>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 4. CTA */}
                <Section>
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#f6bd2b]/20 to-transparent border border-[#f6bd2b]/30 rounded-3xl p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f6bd2b] rounded-full blur-[100px] opacity-20 pointer-events-none" />

                            <h2 className="text-2xl md:text-3xl font-bold mb-8 font-['Outfit'] relative z-10">
                                Ready to start PoC?
                            </h2>
                            <Link href={language === "en" ? "/en/contact" : "/contact"}>
                                <button className="px-8 py-4 bg-[#f6bd2b] text-[#040B17] rounded-full font-bold hover:bg-[#f6bd2b]/90 transition-colors inline-flex items-center gap-2 relative z-10">
                                    {t("productPage.useCases.cta")}
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
