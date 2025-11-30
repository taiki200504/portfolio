import { ArrowRight, Brain, Building2, FileText, Newspaper, User } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";

export function GlassMenuGrid() {
    const { t, language } = useTranslation();

    const menuItems = [
        {
            title: t("menu.egg.title"),
            description: t("menu.egg.desc"),
            icon: Brain,
            href: language === "en" ? "/en/product" : "/product",
            color: "text-white",
        },
        {
            title: t("menu.philosophy.title"),
            description: t("menu.philosophy.desc"),
            icon: User,
            href: language === "en" ? "/en/philosophy" : "/philosophy",
            color: "text-white",
        },
        {
            title: t("menu.useCases.title"),
            description: t("menu.useCases.desc"),
            icon: FileText,
            href: language === "en" ? "/en/product#use-cases" : "/product#use-cases",
            color: "text-white",
        },
        {
            title: t("menu.company.title"),
            description: t("menu.company.desc"),
            icon: Building2,
            href: language === "en" ? "/en/company" : "/company",
            color: "text-white",
        },
        {
            title: t("menu.news.title"),
            description: t("menu.news.desc"),
            icon: Newspaper,
            href: language === "en" ? "/en/news" : "/news",
            color: "text-white",
        },
        {
            title: t("menu.contact.title"),
            description: t("menu.contact.desc"),
            icon: ArrowRight,
            href: language === "en" ? "/en/company#contact" : "/company#contact",
            color: "text-[#f6bd2b]",
        },
    ];

    return (
        <section className="relative z-10 -mt-20 pb-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {menuItems.map((item) => (
                        <Link key={item.title} href={item.href} className="block group">
                            <div
                                className={cn(
                                    "relative overflow-hidden rounded-[24px] p-8 h-[180px] transition-all duration-500",
                                    "border border-white/35 group-hover:border-[#f6bd2b]/60",
                                    "bg-white/[0.08] group-hover:bg-white/[0.14]",
                                    "backdrop-blur-[18px]",
                                    "shadow-[0_18px_40px_rgba(0,0,0,0.35)] group-hover:shadow-[0_24px_50px_rgba(0,0,0,0.5)]",
                                    "group-hover:scale-[1.02]"
                                )}
                            >
                                {/* Liquid Highlight Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                                <div className="relative z-10 flex flex-col justify-between h-full">
                                    <div className="flex justify-between items-start">
                                        <item.icon className={cn("w-6 h-6", item.color)} />
                                        {item.title === t("menu.contact.title") && (
                                            <div className="w-2 h-2 rounded-full bg-[#f6bd2b] animate-pulse" />
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-[#fafcfd] mb-1 font-['Outfit'] tracking-wide">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-[#fafcfd]/75 font-['Noto Sans JP']">
                                                {item.description}
                                            </p>
                                            <ArrowRight className="w-4 h-4 text-[#f6bd2b] transform transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
