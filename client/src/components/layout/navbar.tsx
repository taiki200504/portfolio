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

    // Helper to check if a path is active, handling both /en and / prefixes
    const isActivePath = (href: string) => {
        const cleanCurrent = location.replace(/^\/en/, "") || "/";
        const cleanHref = href.replace(/^\/en/, "") || "/";
        if (cleanHref === "/") return cleanCurrent === "/";
        return cleanCurrent.startsWith(cleanHref);
    };

    const handleNavClick = (href: string) => {
        setLocation(getLink(href));
        setIsOpen(false); // Updated state variable
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

    // NavItem component is removed as per the new structure
    // const NavItem = ({ item, index }: { item: typeof navItems[0], index: number }) => {
    //     const tKey = item.name as keyof typeof t.navbar;
    //     const dropdownKey = item.name as keyof typeof dropdownItems;
    //     const hasDropdown = item.dropdown && dropdownItems[dropdownKey];

    //     const active = isActivePath(item.href) || (hasDropdown && dropdownItems[dropdownKey]?.some(subItem => isActivePath(subItem.href)));

    //     return (
    //         <div
    //             className="relative group"
    //             onMouseEnter={() => setHoveredIndex(index)}
    //             onMouseLeave={() => setHoveredIndex(null)}
    //         >
    //             <button
    //                 onClick={() => !hasDropdown && handleNavClick(item.href)}
    //                 className={cn(
    //                     "flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-md font-['Outfit']",
    //                     active ? "text-[#f6bd2b]" : "text-white/70 hover:text-white",
    //                     hasDropdown && "group-hover:text-white"
    //                 )}
    //             >
    //                 {t.navbar[tKey] as string || item.name.toUpperCase()}
    //                 {hasDropdown && <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />}
    //             </button>

    //             {hasDropdown && (
    //                 <div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
    //                     <div className="bg-[#040B17]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl overflow-hidden">
    //                         {dropdownItems[dropdownKey]?.map((subItem) => (
    //                             <div
    //                                 key={subItem.name}
    //                                 onClick={() => handleNavClick(subItem.href)}
    //                                 className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 cursor-pointer transition-colors font-['Outfit']"
    //                             >
    //                                 {t.navbar.items[subItem.name as keyof typeof t.navbar.items]}
    //                             </div>
    //                         ))}
    //                     </div>
    //                 </div>
    //             )}
    //         </div>
    //     );
    // };

    const navItems = [
        { label: "Product", path: "/product/the-egg" },
        { label: "Company", path: "/company" },
        { label: "News", path: "/news" },
        { label: "Contact", path: "/contact" },
    ];

    // Dropdown items (if needed, but for now we are simplifying to top-level links as per request)
    // Keeping the structure simple for now.

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled ? "py-4" : "py-6"
            )}
        >
            <div className={cn(
                "container mx-auto px-4 md:px-8 transition-all duration-500",
                isScrolled && "max-w-6xl"
            )}>
                <div className={cn(
                    "flex items-center justify-between transition-all duration-500 rounded-full px-6",
                    isScrolled ? "bg-[#040B17]/60 backdrop-blur-xl border border-white/10 shadow-lg py-3" : "bg-transparent py-2"
                )}>
                    {/* Logo */}
                    <Link href={getLink("/")} className="relative z-50 group">
                        <div className="flex items-center gap-3">
                            <img src="/assets/logos/logo-footer.png" alt="LYEN" className="h-6 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link key={item.path} href={getLink(item.path)}>
                                <span className={`text-sm font-bold tracking-widest uppercase font-['Outfit'] hover:text-[#f6bd2b] transition-colors ${location === item.path ? "text-[#f6bd2b]" : "text-white/70"
                                    }`}>
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/50 hover:text-white transition-colors font-['Outfit']"
                        >
                            <Globe className="w-3 h-3" />
                            <span>{language === "ja" ? "EN" : "JP"}</span>
                        </button>

                        <div className="flex items-center gap-3">
                            <Link href={getLink("/catalog")}>
                                <Button variant="outline" size="sm" className="rounded-full h-9 px-5 text-xs font-bold tracking-widest border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 transition-all">
                                    CATALOG
                                </Button>
                            </Link>
                            <Link href={getLink("/waiting-list")}>
                                <Button size="sm" className="rounded-full h-9 px-5 text-xs font-bold tracking-widest bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 shadow-[0_0_15px_rgba(246,189,43,0.2)] hover:shadow-[0_0_25px_rgba(246,189,43,0.4)] transition-all">
                                    WAITING LIST
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-50 md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-white block transition-transform"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-0.5 bg-white block transition-opacity"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-white block transition-transform"
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
                        className="fixed inset-0 z-40 bg-[#040B17]/95 backdrop-blur-xl md:hidden pt-24 px-6 h-screen overflow-y-auto"
                    >
                        <div className="flex flex-col gap-6 pb-12">
                            {navItems.map((item) => (
                                <Link key={item.path} href={getLink(item.path)}>
                                    <span
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-bold text-white font-['Outfit'] block py-2 border-b border-white/5"
                                    >
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                            <div className="pt-6 flex flex-col gap-4">
                                <Link href={getLink("/catalog")}>
                                    <Button variant="outline" className="w-full rounded-full h-12 text-sm font-bold tracking-widest border-white/20 text-white">
                                        CATALOG
                                    </Button>
                                </Link>
                                <Link href={getLink("/waiting-list")}>
                                    <Button className="w-full rounded-full h-12 text-sm font-bold tracking-widest bg-[#f6bd2b] text-[#040B17]">
                                        WAITING LIST
                                    </Button>
                                </Link>
                                <button
                                    onClick={() => {
                                        toggleLanguage();
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center justify-center gap-2 text-sm font-bold text-white/50 py-4"
                                >
                                    <Globe className="w-4 h-4" />
                                    <span>Switch to {language === "ja" ? "English" : "日本語"}</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
