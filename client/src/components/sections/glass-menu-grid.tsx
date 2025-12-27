import { Section } from "@/components/ui/section";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function GlassMenuGrid() {
    const { t, language } = useTranslation();

    const getLink = (path: string) => language === "en" ? `/en${path}` : path;

    const menuItems = [
        {
            id: "egg",
            path: "/product",
            label: t("menu.egg.label"),
            title: t("menu.egg.title"),
            desc: t("menu.egg.desc"),
        },

        {
            id: "company",
            path: "/company",
            label: t("menu.company.label"),
            title: t("menu.company.title"),
            desc: t("menu.company.desc"),
        },
        {
            id: "catalog",
            path: "/catalog",
            label: t("menu.catalog.label"),
            title: t("menu.catalog.title"),
            desc: t("menu.catalog.desc"),
        },
        {
            id: "news",
            path: "/news",
            label: t("menu.news.label"),
            title: t("menu.news.title"),
            desc: t("menu.news.desc"),
        },
    ];

    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuItems.map((item, index) => (
                        <Link key={item.id} href={getLink(item.path)}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-8 h-full min-h-[240px] flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300"
                                style={{
                                    background: "rgba(4, 11, 23, 0.55)",
                                    backdropFilter: "blur(18px)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    borderRadius: "24px",
                                    boxShadow: "0 18px 40px rgba(0, 0, 0, 0.5)",
                                }}
                                whileHover={{
                                    y: -4,
                                    scale: 1.02,
                                    borderColor: "rgba(246, 189, 43, 0.3)",
                                }}
                            >
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div>
                                    <span className="text-[#f6bd2b] text-[10px] font-bold tracking-[0.2em] uppercase font-['Outfit'] block mb-4">
                                        {item.label}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white font-['Outfit'] mb-4 group-hover:text-[#f6bd2b] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#f6bd2b] transition-colors duration-300">
                                        <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-[#040B17] transition-colors duration-300 group-hover:translate-x-0.5" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    );
}
