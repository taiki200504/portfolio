import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";
import { Link } from "wouter";

export default function ModelMatsuPage() {
    const { t, language } = useTranslation();
    const getLink = (path: string) => language === "en" ? `/en${path}` : path;

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />
            <main className="pt-24">
                {/* Hero */}
                <Section className="min-h-[80vh] flex items-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,189,43,0.1)_0%,transparent_60%)]" />
                    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="inline-block px-4 py-1 rounded-full bg-[#f6bd2b]/10 text-[#f6bd2b] font-bold tracking-widest uppercase mb-6 border border-[#f6bd2b]/20">
                                Premium Model
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold font-['Outfit'] mb-4">
                                {t("catalogPage.models.matsu.name")}
                            </h1>
                            <p className="text-3xl text-[#f6bd2b] font-bold font-['Outfit'] mb-8">
                                ¥8,000,000 ~
                            </p>
                            <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-xl">
                                {t("catalogPage.models.matsu.desc")}
                            </p>
                            <div className="flex flex-wrap gap-4 mb-12">
                                {(t("catalogPage.models.matsu.features") as string[]).map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                        <Star className="w-4 h-4 text-[#f6bd2b]" />
                                        <span className="text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href={getLink("/preorder?model=matsu")}>
                                <Button className="bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 font-bold rounded-full px-8 h-14 text-lg tracking-widest w-full sm:w-auto">
                                    PRE-ORDER <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="order-1 lg:order-2 relative"
                        >
                            <div className="absolute inset-0 bg-[#f6bd2b] blur-[100px] opacity-20 rounded-full" />
                            <img
                                src="/assets/products/matsu/main.png"
                                alt="Model Matsu"
                                className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </Section>

                {/* Use Cases */}
                <Section className="bg-white/[0.02]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-16 uppercase text-center">
                            Use Cases
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {[1, 2, 3, 4].map((num, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative rounded-3xl overflow-hidden aspect-video border border-white/10"
                                >
                                    <img
                                        src={`/assets/products/matsu/usecase${num}.png`}
                                        alt={`Use Case ${num}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                                        <h3 className="text-xl font-bold font-['Outfit'] mb-2">
                                            {t(`catalogPage.models.matsu.useCases.${i}.title`)}
                                        </h3>
                                        <p className="text-white/70 text-sm">
                                            {t(`catalogPage.models.matsu.useCases.${i}.desc`)}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Specs / Details */}
                <Section>
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-16 uppercase text-center">
                            Specifications
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <div className="flex justify-between border-b border-white/10 pb-4">
                                <span className="text-white/60">Target</span>
                                <span className="font-bold">経営者・富裕層</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-4">
                                <span className="text-white/60">Sound System</span>
                                <span className="font-bold">7.1ch Surround + Vibration</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-4">
                                <span className="text-white/60">Lighting</span>
                                <span className="font-bold">Full Spectrum Circadian LED</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-4">
                                <span className="text-white/60">Material</span>
                                <span className="font-bold">Premium Leather & Wood</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-4">
                                <span className="text-white/60">AI Guide</span>
                                <span className="font-bold">Dedicated Zen Master AI</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-4">
                                <span className="text-white/60">Aroma</span>
                                <span className="font-bold">Integrated Diffuser</span>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
