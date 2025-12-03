import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function Footer() {
    const { t, language } = useTranslation();
    const [, setLocation] = useLocation();

    const getLink = (path: string) => language === "en" ? `/en${path}` : path;

    const footerLinks = {
        company: [
            { label: t("footer.links.company"), path: "/company" },
            { label: t("footer.links.story"), path: "/company/story" },
            { label: t("footer.links.roadmap"), path: "/company/roadmap" },
            { label: t("footer.links.team"), path: "/company/team" },
        ],
        product: [
            { label: t("footer.links.egg"), path: "/product/the-egg" },
            { label: t("footer.links.lineup"), path: "/product/lineup" },
        ],
        resources: [
            { label: t("footer.links.catalog"), path: "/catalog" },
            { label: t("footer.links.waitingList"), path: "/waiting-list" },
            { label: t("footer.links.news"), path: "/news" },
        ],
        legal: [
            { label: t("footer.links.privacy"), path: "/privacy" },
            { label: t("footer.links.terms"), path: "/terms" },
        ],
    };

    return (
        <footer className="bg-[#040B17] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#092a62]/20 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link href={getLink("/")} className="block w-fit">
                            <img src="/assets/logos/logo-footer.png" alt="LYEN" className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-md font-['Outfit']">
                            Internal OS for Humanity
                        </p>

                        {/* Mini CTAs */}
                        <div className="flex flex-wrap gap-3 pt-4">
                            <Link href={getLink("/catalog")}>
                                <Button variant="outline" size="sm" className="rounded-full h-8 px-4 text-xs border-white/10 text-white/70 hover:bg-white/5 hover:text-white hover:border-white/30 transition-all">
                                    Catalog
                                </Button>
                            </Link>
                            <Link href={getLink("/waiting-list")}>
                                <Button variant="outline" size="sm" className="rounded-full h-8 px-4 text-xs border-white/10 text-white/70 hover:bg-white/5 hover:text-white hover:border-white/30 transition-all">
                                    Waiting List
                                </Button>
                            </Link>
                            <Link href={getLink("/contact")}>
                                <Button variant="outline" size="sm" className="rounded-full h-8 px-4 text-xs border-white/10 text-white/70 hover:bg-white/5 hover:text-white hover:border-white/30 transition-all">
                                    Contact
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Company */}
                        <div className="space-y-6">
                            <h4 className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] uppercase font-['Outfit']">
                                {t("footer.company")}
                            </h4>
                            <ul className="space-y-4">
                                {footerLinks.company.map((link) => (
                                    <li key={link.path}>
                                        <Link href={getLink(link.path)} className="text-sm text-white/50 hover:text-white transition-colors block w-fit">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Product */}
                        <div className="space-y-6">
                            <h4 className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] uppercase font-['Outfit']">
                                {t("footer.product")}
                            </h4>
                            <ul className="space-y-4">
                                {footerLinks.product.map((link) => (
                                    <li key={link.path}>
                                        <Link href={getLink(link.path)} className="text-sm text-white/50 hover:text-white transition-colors block w-fit">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="space-y-6">
                            <h4 className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] uppercase font-['Outfit']">
                                {t("footer.resources")}
                            </h4>
                            <ul className="space-y-4">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.path}>
                                        <Link href={getLink(link.path)} className="text-sm text-white/50 hover:text-white transition-colors block w-fit">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className="space-y-6">
                            <h4 className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] uppercase font-['Outfit']">
                                {t("footer.legal")}
                            </h4>
                            <ul className="space-y-4">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.path}>
                                        <Link href={getLink(link.path)} className="text-sm text-white/50 hover:text-white transition-colors block w-fit">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/30 font-['Outfit']">
                        {t("footer.copyright")}
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-white/30 hover:text-white transition-colors">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-white/30 hover:text-white transition-colors">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-white/30 hover:text-white transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
