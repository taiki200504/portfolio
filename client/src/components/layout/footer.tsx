import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function Footer() {
    const { t, language } = useTranslation();
    const [, setLocation] = useLocation();

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
                            <Button
                                onClick={() => setLocation(getLink("/waiting-list"))}
                                className="rounded-full bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 hover:shadow-[0_0_20px_rgba(246,189,43,0.4)] font-['Outfit'] tracking-widest font-bold transition-all duration-300"
                            >
                                {t("footer.waitingList")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href={getLink("/")} className="inline-block mb-6">
                            <img src="/assets/logos/logo-footer.png" alt="LYEN" className="h-8 object-contain opacity-90 hover:opacity-100 transition-opacity" />
                        </Link>
                        <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-6 font-['Outfit'] whitespace-pre-line">
                            {t("footer.tagline")}
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://x.com/The_egg_pj" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#f6bd2b] transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white/40 hover:text-[#f6bd2b] transition-colors duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/the.egg_pj/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#f6bd2b] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-bold font-['Outfit'] tracking-widest mb-6 text-[#f6bd2b] text-xs uppercase">{t("footer.company")}</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link href={getLink("/company/about")} className="hover:text-white transition-colors">{t("navbar.items.about")}</Link></li>
                            <li><Link href={getLink("/company/story")} className="hover:text-white transition-colors">{t("navbar.items.story")}</Link></li>
                            <li><Link href={getLink("/company/roadmap")} className="hover:text-white transition-colors">{t("navbar.items.roadmap")}</Link></li>
                            <li><Link href={getLink("/company/team")} className="hover:text-white transition-colors">{t("navbar.items.team")}</Link></li>
                            <li><Link href={getLink("/news")} className="hover:text-white transition-colors">{t("navbar.news")}</Link></li>
                        </ul>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h4 className="font-bold font-['Outfit'] tracking-widest mb-6 text-[#f6bd2b] text-xs uppercase">{t("footer.product")}</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link href={getLink("/product/the-egg")} className="hover:text-white transition-colors">{t("navbar.items.theEgg")}</Link></li>
                            <li><Link href={getLink("/product/lineup")} className="hover:text-white transition-colors">{t("navbar.items.lineup")}</Link></li>
                            <li><Link href={getLink("/use-cases")} className="hover:text-white transition-colors">{t("navbar.items.useCases")}</Link></li>
                            <li><Link href={getLink("/platform")} className="hover:text-white transition-colors">{t("navbar.items.platform")}</Link></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h4 className="font-bold font-['Outfit'] tracking-widest mb-6 text-[#f6bd2b] text-xs uppercase">{t("footer.resources")}</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link href={getLink("/catalog")} className="hover:text-white transition-colors">{t("navbar.items.catalog")}</Link></li>
                            <li><Link href={getLink("/waiting-list")} className="hover:text-white transition-colors">{t("navbar.items.waitingList")}</Link></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="font-bold font-['Outfit'] tracking-widest mb-6 text-[#f6bd2b] text-xs uppercase">{t("footer.legal")}</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link href={getLink("/privacy")} className="hover:text-white transition-colors">{t("footer.links.privacy")}</Link></li>
                            <li><Link href={getLink("/terms")} className="hover:text-white transition-colors">{t("footer.links.terms")}</Link></li>
                            <li><Link href={getLink("/contact")} className="hover:text-white transition-colors">{t("footer.links.contact")}</Link></li>
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
