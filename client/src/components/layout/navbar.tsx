import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
    { name: "product", href: "/product", dropdown: true },
    { name: "resources", href: "/resources", dropdown: true },
    { name: "company", href: "/company", dropdown: true },
    { name: "news", href: "/news" },
];

const dropdownItems = {
    product: [
        { name: "theEgg", href: "/product/the-egg" },
        { name: "lineup", href: "/product/lineup" },
        { name: "useCases", href: "/use-cases" },
        { name: "platform", href: "/platform" },
    ],
    resources: [
        { name: "catalog", href: "/catalog" },
        { name: "waitingList", href: "/waiting-list" },
    ],
    company: [
        { name: "about", href: "/company/about" },
        { name: "story", href: "/company/story" },
        { name: "roadmap", href: "/company/roadmap" },
        { name: "team", href: "/company/team" },
    ],
};

export function Navbar() {
    const { locale: t, language, setLanguage } = useTranslation();
    const [location, setLocation] = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getLink = (path: string) => language === "en" ? `/en${path}` : path;

    // Helper to check if a path is active, handling both /en and / prefixes
    const isActivePath = (href: string) => {
        const cleanCurrent = location.replace(/^\/en/, "") || "/";
        const cleanHref = href.replace(/^\/en/, "") || "/";
        if (cleanHref === "/") return cleanCurrent === "/";
        return cleanCurrent.startsWith(cleanHref);
    };

    const handleNavClick = (href: string) => {
        setLocation(getLink(href));
        setIsMenuOpen(false);
    };

    const toggleLanguage = () => {
        const newLang = language === "en" ? "ja" : "en";
        setLanguage(newLang);

        // Redirect to corresponding page in new language
        const currentPath = location;
        let newPath;
        if (language === "en") {
            // Switch to JA: remove /en prefix
            newPath = currentPath.replace(/^\/en/, "") || "/";
        } else {
            // Switch to EN: add /en prefix
            newPath = `/en${currentPath === "/" ? "" : currentPath}`;
        }
        setLocation(newPath);
    };

    const NavItem = ({ item, index }: { item: typeof navItems[0], index: number }) => {
        const tKey = item.name as keyof typeof t.navbar;
        const dropdownKey = item.name as keyof typeof dropdownItems;
        const hasDropdown = item.dropdown && dropdownItems[dropdownKey];

        const active = isActivePath(item.href) || (hasDropdown && dropdownItems[dropdownKey]?.some(subItem => isActivePath(subItem.href)));

        return (
            <div
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <button
                    onClick={() => !hasDropdown && handleNavClick(item.href)}
                    className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-md font-['Outfit']",
                        active ? "text-[#f6bd2b]" : "text-white/70 hover:text-white",
                        hasDropdown && "group-hover:text-white"
                    )}
                >
                    {t.navbar[tKey] as string || item.name.toUpperCase()}
                    {hasDropdown && <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />}
                </button>

                {hasDropdown && (
                    <div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                        <div className="bg-[#040B17]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl overflow-hidden">
                            {dropdownItems[dropdownKey]?.map((subItem) => (
                                <div
                                    key={subItem.name}
                                    onClick={() => handleNavClick(subItem.href)}
                                    className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 cursor-pointer transition-colors font-['Outfit']"
                                >
                                    {t.navbar.items[subItem.name as keyof typeof t.navbar.items]}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
                <div
                    className={cn(
                        "pointer-events-auto transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)",
                        scrolled
                            ? "w-[90%] md:w-[800px] bg-[#040B17]/80 backdrop-blur-md rounded-full shadow-2xl py-3 px-6"
                            : "w-full bg-transparent py-6 px-8 md:px-12"
                    )}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        {/* Logo */}
                        <Link href={getLink("/")} className="flex items-center gap-3 group shrink-0">
                            <img src="/assets/logos/logo-footer.png" alt="LYEN" className="h-8 w-auto object-contain" />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item, index) => (
                                <NavItem key={item.name} item={item} index={index} />
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-2 ml-4">
                            <div className="relative group">
                                <button className="flex items-center gap-1 text-white/60 hover:text-white transition-colors p-2 text-xs font-['Outfit'] tracking-wider">
                                    <Globe className="w-3 h-3" />
                                    {language.toUpperCase()}
                                    <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </button>
                                <div className="absolute right-0 top-full pt-2 w-24 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="bg-[#040B17]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl overflow-hidden py-1">
                                        <button
                                            onClick={() => setLanguage("ja")}
                                            className={cn(
                                                "w-full text-left px-4 py-2 text-xs hover:bg-white/5 transition-colors font-['Outfit']",
                                                language === "ja" ? "text-[#f6bd2b]" : "text-white/70 hover:text-white"
                                            )}
                                        >
                                            Japanese
                                        </button>
                                        <button
                                            onClick={() => setLanguage("en")}
                                            className={cn(
                                                "w-full text-left px-4 py-2 text-xs hover:bg-white/5 transition-colors font-['Outfit']",
                                                language === "en" ? "text-[#f6bd2b]" : "text-white/70 hover:text-white"
                                            )}
                                        >
                                            English
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Link href={getLink("/waiting-list")}>
                                <Button size="sm" className="bg-[#f6bd2b] text-black hover:bg-[#f6bd2b]/90 rounded-full font-bold text-xs px-6">
                                    {t.navbar.waitingList}
                                </Button>
                            </Link>
                            <Link href={getLink("/contact")}>
                                <Button size="sm" className="ml-2 bg-white text-black hover:bg-white/90 rounded-full font-bold text-xs px-6">
                                    {t.navbar.contact}
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-white hover:bg-white/10 rounded-full"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-[#040B17] flex flex-col items-center justify-center transition-all duration-500 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#092a62]/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#f6bd2b]/10 rounded-full blur-3xl animate-pulse" />
                </div>

                <nav className="flex flex-col items-center gap-6 relative z-10 w-full px-8 max-h-[80vh] overflow-y-auto">
                    {navItems.map((item, i) => (
                        <div key={item.name} className="w-full flex flex-col items-center">
                            <button
                                onClick={() => !item.dropdown && handleNavClick(item.href)}
                                className={cn(
                                    "text-2xl font-bold hover:text-[#f6bd2b] transition-all duration-300 transform font-['Outfit'] uppercase",
                                    isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                                    isActivePath(item.href) ? "text-[#f6bd2b]" : "text-white/80"
                                )}
                                style={{ transitionDelay: `${i * 50}ms` }}
                            >
                                {t.navbar[item.name as keyof typeof t.navbar] as string || item.name}
                            </button>

                            {/* Mobile Dropdown Items */}
                            {item.dropdown && (
                                <div className={cn(
                                    "flex flex-col items-center gap-3 mt-3 mb-4 transition-all duration-500",
                                    isMenuOpen ? "opacity-100" : "opacity-0"
                                )}
                                    style={{ transitionDelay: `${i * 50 + 100}ms` }}
                                >
                                    {dropdownItems[item.name as keyof typeof dropdownItems]?.map((subItem) => (
                                        <button
                                            key={subItem.name}
                                            onClick={() => handleNavClick(subItem.href)}
                                            className="text-sm text-white/50 hover:text-white transition-colors uppercase tracking-widest"
                                        >
                                            {t.navbar.items[subItem.name as keyof typeof t.navbar.items]}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="flex flex-col items-center gap-4 mt-8 w-full">
                        <button onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} className="flex items-center gap-2 text-white/70 hover:text-white mb-4">
                            <Globe className="w-5 h-5" />
                            <span>{language === "en" ? "Switch to Japanese" : "Switch to English"}</span>
                        </button>
                        <Link href={getLink("/waiting-list")}>
                            <Button className="bg-[#f6bd2b] text-black hover:bg-[#f6bd2b]/90 rounded-full px-8 py-6 text-lg font-bold w-full max-w-xs">
                                {t.navbar.waitingList}
                            </Button>
                        </Link>
                        <Link href={getLink("/contact")}>
                            <Button className="bg-[#f6bd2b] text-black hover:bg-[#f6bd2b]/90 rounded-full px-8 py-6 text-lg font-bold w-full max-w-xs">
                                {t.navbar.contact}
                            </Button>
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}
