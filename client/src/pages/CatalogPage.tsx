import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";

export default function CatalogPage() {
    const { t, language } = useTranslation();

    const models = [
        {
            id: "matsu",
            name: t("catalogPage.models.matsu.name"),
            tag: "Premium",
            price: "¥8,000,000 ~",
            image: "/assets/products/matsu/main.png",
            desc: t("catalogPage.models.matsu.desc"),
            features: t("catalogPage.models.matsu.features") as string[],
            target: "経営者・富裕層",
            useCases: ["/assets/products/matsu/usecase1.png", "/assets/products/matsu/usecase2.png"]
        },
        {
            id: "take",
            name: t("catalogPage.models.take.name"),
            tag: "Standard",
            price: "¥3,000,000 ~",
            image: "/assets/products/take/main.png",
            desc: t("catalogPage.models.take.desc"),
            features: t("catalogPage.models.take.features") as string[],
            target: "企業オフィス・中堅層",
            useCases: ["/assets/products/take/usecase1.png", "/assets/products/take/usecase2.png"]
        },
        {
            id: "ume",
            name: t("catalogPage.models.ume.name"),
            tag: "Entry",
            price: "¥1,500,000 ~",
            image: "/assets/products/ume/main.png",
            desc: t("catalogPage.models.ume.desc"),
            features: t("catalogPage.models.ume.features") as string[],
            target: "一般オフィス・公共施設",
            useCases: ["/assets/products/ume/usecase1.png", "/assets/products/ume/usecase2.png"]
        }
    ];

    const getLink = (path: string) => language === "en" ? `/en${path}` : path;

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />
            <main className="pt-24">
                {/* Hero */}
                <Section className="py-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-['Outfit'] mb-6"
                    >
                        Choose Your EGG
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/60 max-w-2xl mx-auto"
                    >
                        利用シーンや設置環境に合わせて選べる、3つのモデル。
                    </motion.p>
                </Section>

                {/* Models Grid */}
                <Section className="pb-32">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 gap-16">
                            {models.map((model, i) => (
                                <motion.div
                                    key={model.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-[#f6bd2b]/30 transition-all duration-500"
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-2">
                                        {/* Image Section */}
                                        <div className="relative h-[400px] lg:h-auto bg-gradient-to-br from-[#092a62]/20 to-black/40 p-8 flex items-center justify-center group">
                                            <img
                                                src={model.image}
                                                alt={model.name}
                                                className="max-h-full max-w-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute top-6 left-6 bg-[#f6bd2b] text-[#040B17] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                                {model.tag}
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                                            <h2 className="text-3xl md:text-4xl font-bold font-['Outfit'] mb-2">{model.name}</h2>
                                            <p className="text-2xl text-[#f6bd2b] font-bold font-['Outfit'] mb-6">{model.price}</p>

                                            <p className="text-white/70 mb-8 leading-relaxed">
                                                {model.desc}
                                            </p>

                                            <div className="mb-8">
                                                <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Key Features</h4>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {model.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-center gap-2 text-sm text-white/80">
                                                            <Check className="w-4 h-4 text-[#f6bd2b]" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="mt-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                                                <div className="flex -space-x-4 overflow-hidden">
                                                    {model.useCases.map((img, idx) => (
                                                        <img key={idx} src={img} alt="Use case" className="inline-block h-12 w-12 rounded-full ring-2 ring-[#040B17] object-cover" />
                                                    ))}
                                                </div>
                                                <Link href={getLink(`/preorder?model=${model.id}`)}>
                                                    <Button className="w-full sm:w-auto bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 font-bold rounded-full px-8 h-12 tracking-widest">
                                                        PRE-ORDER <ArrowRight className="ml-2 w-4 h-4" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
