import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
    const { language, setLanguage } = useTranslation();
    const [location, setLocation] = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getLink = (path: string) => language === "en" ? `/en${path}` : path;

    const navItems = [
        { label: "About", path: "#identity" },
        { label: "History", path: "#history" },
        { label: "Works", path: "#case-studies" },
        { label: "Skills", path: "#skills" },
        { label: "Contact", path: "#contact" },
    ];

    const toggleLanguage = () => {
        const newLang = language === "en" ? "ja" : "en";
        setLanguage(newLang);
    };

    const handleNavClick = (path: string) => {
        setIsOpen(false);
        const element = document.getElementById(path.replace("#", ""));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (

        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white border-b border-black/10",
                isScrolled ? "py-4" : "py-6"
            )}
        >
            <div className={cn(
                "container mx-auto px-4 md:px-8 transition-all duration-500",
                isScrolled && "max-w-6xl"
            )}>
                <div className={cn(
                    "flex items-center justify-between transition-all duration-500 px-6",
                    isScrolled ? "py-3" : "py-2"
                )}>
                    {/* Logo (Name) */}
                    <Link href="/" className="relative z-50 group">
                        <div className="flex items-center gap-3">
                            <span className="text-xl font-bold font-['Outfit'] tracking-wider text-black">Taiki Mishima</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.path}
                                onClick={() => handleNavClick(item.path)}
                                className={cn(
                                    "text-sm font-bold tracking-widest uppercase font-['Outfit'] transition-all py-1 border-b-2 border-transparent hover:border-black",
                                    "text-black/60 hover:text-black"
                                )}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 text-xs font-bold tracking-widest text-black/50 hover:text-black transition-colors font-['Outfit'] py-2"
                        >
                            <Globe className="w-3 h-3" />
                            <span>{language === "ja" ? "JP" : "EN"}</span>
                        </button>

                        <Button
                            onClick={() => handleNavClick("#contact")}
                            size="sm"
                            className="rounded-none h-9 px-6 text-xs font-bold tracking-widest bg-black text-white hover:bg-black/80 transition-all"
                        >
                            CONSULT
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-50 md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-black block transition-transform"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-0.5 bg-black block transition-opacity"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-black block transition-transform"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6 h-screen overflow-y-auto"
                    >
                        <div className="flex flex-col gap-6 pb-12">
                            {navItems.map((item) => (
                                <button
                                    key={item.path}
                                    onClick={() => handleNavClick(item.path)}
                                    className="text-2xl font-bold text-black font-['Outfit'] block py-2 border-b border-black/5 text-left"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="pt-6 flex flex-col gap-4">
                                <Button
                                    onClick={() => handleNavClick("#contact")}
                                    className="w-full rounded-none h-12 text-sm font-bold tracking-widest bg-black text-white hover:bg-black/80"
                                >
                                    CONSULT
                                </Button>

                                <div className="flex gap-2 pt-4 border-t border-black/10">
                                    <button
                                        onClick={() => {
                                            if (language !== "ja") toggleLanguage();
                                            setIsOpen(false);
                                        }}
                                        className={cn(
                                            "flex-1 py-3 text-sm font-bold transition-colors font-['Outfit']",
                                            language === "ja" ? "bg-black/5 text-black" : "text-black/50"
                                        )}
                                    >
                                        日本語
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (language !== "en") toggleLanguage();
                                            setIsOpen(false);
                                        }}
                                        className={cn(
                                            "flex-1 py-3 text-sm font-bold transition-colors font-['Outfit']",
                                            language === "en" ? "bg-black/5 text-black" : "text-black/50"
                                        )}
                                    >
                                        English
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
