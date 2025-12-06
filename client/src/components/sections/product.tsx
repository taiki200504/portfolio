import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTranslation } from "@/lib/i18n";

export function Product() {
    const { t, language } = useTranslation();

    const getLink = (path: string) => language === "en" ? `/en${path}` : path;

    return (
        <Section id="product" className="bg-[#040B17] py-0 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-px bg-[#f6bd2b]" />
                            <span className="text-[#f6bd2b] text-xs font-bold tracking-[0.2em] uppercase">{t("product.label")}</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-['Outfit']">
                            {t("product.title")}
                        </h2>

                        <p className="text-xl text-white/80 mb-8 leading-relaxed font-light">
                            {t("product.desc")}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
                            <Link href={getLink("/waiting-list")}>
                                <Button className="w-full sm:w-auto px-8 py-6 rounded-full bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 font-['Outfit'] tracking-widest font-bold text-lg">
                                    {t("product.waitingList")}
                                </Button>
                            </Link>
                            <a href="/assets/egg-catalog.pdf" download target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full px-8 py-6 rounded-full border-white/20 text-white hover:bg-white hover:text-[#040B17] font-['Outfit'] tracking-widest text-lg">
                                    {t("product.downloadCatalog")}
                                </Button>
                            </a>
                        </div>

                        <div className="space-y-6 mb-12">
                            {[
                                { title: t("product.features.isolation.title"), desc: t("product.features.isolation.desc") },
                                { title: t("product.features.light.title"), desc: t("product.features.light.desc") },
                                { title: t("product.features.guide.title"), desc: t("product.features.guide.desc") }
                            ].map((item, i) => (
                                <div key={i} className="pl-6 border-l border-white/20">
                                    <h4 className="text-white font-bold font-['Outfit'] mb-1">{item.title}</h4>
                                    <p className="text-white/50 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <Link href={getLink("/product")}>
                            <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-black transition-all">
                                {t("product.viewSpecs")}
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 relative flex justify-center items-center"
                    >
                        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-[#f6bd2b]/10 blur-[100px] rounded-full" />

                            {/* Animated Image */}
                            <motion.img
                                src="/assets/model-matsu.png"
                                alt="The EGG Model Matsu"
                                className="relative z-10 w-full h-full object-contain opacity-80 mix-blend-screen"
                                animate={{
                                    y: [-10, 10, -10],
                                    rotate: [-2, 2, -2],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </Section>
    );
}
