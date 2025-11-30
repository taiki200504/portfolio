import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [locationPath] = useLocation();
    const { t, language, setLanguage } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t("navbar.philosophy"), href: language === "en" ? "/en/philosophy" : "/philosophy" },
        { name: t("navbar.product"), href: language === "en" ? "/en/product" : "/product" },
        { name: t("navbar.news"), href: language === "en" ? "/en/news" : "/news" },
        { name: t("navbar.company"), href: language === "en" ? "/en/company" : "/company" },
    ];

    const toggleLanguage = () => {
        setLanguage(language === "ja" ? "en" : "ja");
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    scrolled ? "py-4" : "py-6"
                )}
            >
                <div className="container mx-auto px-4">
                    <div
                        className={cn(
                            "relative flex items-center justify-between px-6 py-4 rounded-full transition-all duration-500",
                            "bg-[#040B17]/80 backdrop-blur-xl border border-white/10",
                            "shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
                            scrolled && "bg-[#040B17]/95 border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.24)]"
                        )}
                    >
                        {/* Liquid Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        {/* Logo */}
                        <Link href={language === "en" ? "/en" : "/"} className="relative z-10 flex items-center gap-3 group">
                            <img src="/assets/logos/logo-footer.png" alt="LYEN" className="h-6 md:h-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "relative px-5 py-2 text-xs font-bold tracking-widest transition-all duration-300 font-['Outfit'] rounded-full group overflow-hidden",
                                        locationPath === link.href ? "text-white" : "text-white/60 hover:text-white"
                                    )}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {locationPath === link.href && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-white/10 rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                                </Link>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="hidden md:flex items-center gap-4 relative z-10">
                            {/* Language Switcher */}
                            <button
                                onClick={toggleLanguage}
                                className="text-[10px] font-bold tracking-widest font-['Outfit'] flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                            >
                                <span className={cn("transition-colors", language === "ja" ? "text-[#f6bd2b]" : "text-white/40")}>JA</span>
                                <span className="text-white/20">|</span>
                                <span className={cn("transition-colors", language === "en" ? "text-[#f6bd2b]" : "text-white/40")}>EN</span>
                            </button>

                            <div className="w-px h-8 bg-white/10 mx-2" />

                            <a href="/assets/egg-catalog.pdf" download target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10 font-['Outfit'] tracking-widest text-[10px] h-9 rounded-full px-4">
                                    {t("navbar.catalog")}
                                </Button>
                            </a>
                            <Link href={language === "en" ? "/en/waiting-list" : "/waiting-list"}>
                                <Button size="sm" className="h-9 px-5 rounded-full bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 font-['Outfit'] tracking-widest text-[10px] font-bold shadow-[0_0_20px_rgba(246,189,43,0.3)] hover:shadow-[0_0_30px_rgba(246,189,43,0.5)] transition-all">
                                    {t("navbar.waitingList")}
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center gap-4 md:hidden relative z-10">
                            <button
                                onClick={toggleLanguage}
                                className="text-[10px] font-bold tracking-widest font-['Outfit'] flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/5"
                            >
                                <span className={cn(language === "ja" ? "text-[#f6bd2b]" : "text-white/40")}>JA</span>
                                <span className="text-white/20">|</span>
                                <span className={cn(language === "en" ? "text-[#f6bd2b]" : "text-white/40")}>EN</span>
                            </button>
                            <button
                                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-[#040B17]/95 backdrop-blur-xl pt-32 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-bold tracking-widest text-white/80 hover:text-[#f6bd2b] font-['Outfit'] border-b border-white/10 pb-4"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-4 mt-8">
                                <a href="/assets/egg-catalog.pdf" download target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="w-full h-12 rounded-full border-white/20 text-white hover:bg-white hover:text-black font-['Outfit'] tracking-widest text-xs">
                                        {t("navbar.downloadCatalog")}
                                    </Button>
                                </a>
                                <Link href={language === "en" ? "/en/waiting-list" : "/waiting-list"}>
                                    <Button className="w-full h-12 rounded-full bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 font-['Outfit'] tracking-widest text-xs font-bold">
                                        {t("navbar.joinWaitingList")}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
