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
        {
            label: "Product", path: "/product", children: [
                { label: "The EGG", path: "/product/the-egg" },
                { label: "Lineup", path: "/product/lineup" },
            ]
        },
        {
            label: "Company", path: "/company", children: [
                { label: "About", path: "/company/about" },
                { label: "Story", path: "/company/story" },
                { label: "Roadmap", path: "/company/roadmap" },
                { label: "Team", path: "/company/team" },
            ]
        },
        {
            label: "Resources", path: "/resources", children: [
                { label: "Catalog", path: "/catalog" },
                { label: "Waiting List", path: "/waiting-list" },
            ]
        },
        { label: "News", path: "/news" },
        { label: "Contact", path: "/contact" },
    ];

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
                    isScrolled ? "bg-[#040B17]/80 backdrop-blur-xl border border-white/10 shadow-lg py-3" : "bg-transparent py-2"
                )}>
                    {/* Logo */}
                    <Link href={getLink("/")} className="relative z-50 group">
                        <div className="flex items-center gap-3">
                            <img src="/assets/logos/logo-footer.png" alt="LYEN" className="h-6 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <div
                                key={item.path}
                                className="relative group"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <Link href={getLink(item.path)}>
                                    <span className={cn(
                                        "text-sm font-bold tracking-widest uppercase font-['Outfit'] transition-colors flex items-center gap-1 py-4",
                                        location.startsWith(item.path) ? "text-[#f6bd2b]" : "text-white/70 hover:text-white"
                                    )}>
                                        {item.label}
                                        {item.children && <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />}
                                    </span>
                                </Link>

                                {/* Dropdown Menu */}
                                {item.children && (
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-[#040B17]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden p-2">
                                            {item.children.map((child) => (
                                                <Link key={child.path} href={getLink(child.path)}>
                                                    <div className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-['Outfit'] whitespace-nowrap">
                                                        {child.label}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Language Switcher Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/50 hover:text-white transition-colors font-['Outfit'] py-2">
                                <Globe className="w-3 h-3" />
                                <span>{language === "ja" ? "JP" : "EN"}</span>
                                <ChevronDown className="w-3 h-3 opacity-50" />
                            </button>
                            <div className="absolute right-0 top-full pt-2 w-24 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="bg-[#040B17]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl overflow-hidden p-1">
                                    <button
                                        onClick={() => language !== "ja" && toggleLanguage()}
                                        className={cn(
                                            "w-full text-left px-4 py-2 text-xs font-bold tracking-widest rounded-lg transition-colors font-['Outfit']",
                                            language === "ja" ? "bg-white/10 text-[#f6bd2b]" : "text-white/70 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        JP
                                    </button>
                                    <button
                                        onClick={() => language !== "en" && toggleLanguage()}
                                        className={cn(
                                            "w-full text-left px-4 py-2 text-xs font-bold tracking-widest rounded-lg transition-colors font-['Outfit']",
                                            language === "en" ? "bg-white/10 text-[#f6bd2b]" : "text-white/70 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        EN
                                    </button>
                                </div>
                            </div>
                        </div>

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
                                <div key={item.path} className="space-y-2">
                                    <Link href={getLink(item.path)}>
                                        <span
                                            onClick={() => !item.children && setIsOpen(false)}
                                            className="text-2xl font-bold text-white font-['Outfit'] block py-2 border-b border-white/5"
                                        >
                                            {item.label}
                                        </span>
                                    </Link>
                                    {item.children && (
                                        <div className="pl-4 flex flex-col gap-2 border-l border-white/10 ml-2">
                                            {item.children.map(child => (
                                                <Link key={child.path} href={getLink(child.path)}>
                                                    <span
                                                        onClick={() => setIsOpen(false)}
                                                        className="text-white/60 hover:text-white py-1 block text-sm font-['Outfit']"
                                                    >
                                                        {child.label}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
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
                                <div className="flex gap-2 pt-4 border-t border-white/10">
                                    <button
                                        onClick={() => {
                                            if (language !== "ja") toggleLanguage();
                                            setIsOpen(false);
                                        }}
                                        className={cn(
                                            "flex-1 py-3 text-sm font-bold rounded-lg transition-colors font-['Outfit']",
                                            language === "ja" ? "bg-white/10 text-[#f6bd2b]" : "text-white/50"
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
                                            "flex-1 py-3 text-sm font-bold rounded-lg transition-colors font-['Outfit']",
                                            language === "en" ? "bg-white/10 text-[#f6bd2b]" : "text-white/50"
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
