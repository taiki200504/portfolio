import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Twitter, Linkedin, Instagram } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { t, language } = useTranslation();

    const getLink = (path: string) => language === "en" ? `/en${path}` : path;

    return (
        <footer className="relative bg-[#040B17] text-white pt-0 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(9,42,98,0.5),transparent_50%)] pointer-events-none" />

            {/* Mini CTA Bar */}
            <div className="relative z-10 bg-white/5 border-y border-white/10 backdrop-blur-xl">
                <div className="container mx-auto px-4 py-8 md:py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-bold font-['Outfit'] tracking-wide mb-1">
                                {t("footer.miniCta.title")}
                            </h3>
                            <p className="text-sm text-white/60">
                                {t("footer.miniCta.desc")}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="/assets/egg-catalog.pdf" download target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="rounded-full border-white/20 bg-transparent hover:bg-white hover:text-[#040B17] font-['Outfit'] tracking-widest transition-all duration-300">
                                    {t("footer.catalog")}
                                </Button>
                            </a>
                            <Link href={getLink("/waiting-list")}>
                                <Button className="rounded-full bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 hover:shadow-[0_0_20px_rgba(246,189,43,0.4)] font-['Outfit'] tracking-widest font-bold transition-all duration-300">
                                    {t("footer.waitingList")}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href={getLink("/")} className="inline-block mb-6">
                            <img src="/assets/logos/logo-footer.png" alt="LYEN" className="h-8 object-contain opacity-90 hover:opacity-100 transition-opacity" />
                        </Link>
                        <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-6 font-['Outfit'] whitespace-pre-line">
                            {t("footer.tagline")}
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-white/40 hover:text-[#f6bd2b] transition-colors duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white/40 hover:text-[#f6bd2b] transition-colors duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white/40 hover:text-[#f6bd2b] transition-colors duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold font-['Outfit'] tracking-widest mb-6 text-[#f6bd2b] text-xs uppercase">{t("footer.company")}</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li>
                                <Link href={getLink("/philosophy")}>
                                    <a className="hover:text-white transition-colors duration-300">{t("footer.links.philosophy")}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={getLink("/company")}>
                                    <a className="hover:text-white transition-colors duration-300">{t("footer.links.team")}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={getLink("/company#contact")}>
                                    <a className="hover:text-white transition-colors duration-300">{t("footer.links.contact")}</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold font-['Outfit'] tracking-widest mb-6 text-[#f6bd2b] text-xs uppercase">{t("footer.product")}</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li>
                                <Link href={getLink("/product")}>
                                    <a className="hover:text-white transition-colors duration-300">{t("footer.links.egg")}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={getLink("/product#use-cases")}>
                                    <a className="hover:text-white transition-colors duration-300">{t("footer.links.useCases")}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={getLink("/philosophy#science")}>
                                    <a className="hover:text-white transition-colors duration-300">{t("footer.links.science")}</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold font-['Outfit'] tracking-widest mb-6 text-[#f6bd2b] text-xs uppercase">{t("footer.resources")}</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li>
                                <Link href={getLink("/news")}>
                                    <a className="hover:text-white transition-colors duration-300">{t("footer.links.news")}</a>
                                </Link>
                            </li>
                            <li>
                                <a href="/assets/egg-catalog.pdf" download className="hover:text-white transition-colors duration-300">
                                    {t("footer.links.catalog")}
                                </a>
                            </li>
                            <li>
                                <Link href={getLink("/privacy")}>
                                    <a className="hover:text-white transition-colors duration-300">{t("footer.links.privacy")}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={getLink("/terms")}>
                                    <a className="hover:text-white transition-colors duration-300">{t("footer.links.terms")}</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-center md:text-left">
                    <p className="text-xs text-white/40 font-['Outfit']">
                        {t("footer.copyright")}
                    </p>
                </div>
            </div>
        </footer>
    );
}
