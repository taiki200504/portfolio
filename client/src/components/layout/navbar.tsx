import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const navItems = [
    { label: "Philosophy", href: "/philosophy" },
    { label: "Product", href: "/product" },
    { label: "Company", href: "/company" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [location] = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <>
            <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
                <div
                    className={cn(
                        "pointer-events-auto transition-all duration-500 ease-out",
                        scrolled
                            ? "w-[90%] md:w-[600px] bg-[#040B17]/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl py-3 px-6"
                            : "w-full bg-transparent py-6 px-8 md:px-12"
                    )}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/">
                            <a className="flex items-center gap-3 group">
                                <img src="/assets/logos/logo-footer.png" alt="LYEN" className="h-8 object-contain" />
                            </a>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <Link key={item.label} href={item.href}>
                                    <a
                                        className={cn(
                                            "px-4 py-2 text-xs font-bold uppercase tracking-wider hover:text-[#f6bd2b] hover:bg-white/5 rounded-full transition-all",
                                            location === item.href ? "text-[#f6bd2b]" : "text-white/70"
                                        )}
                                    >
                                        {item.label}
                                    </a>
                                </Link>
                            ))}
                            <Link href="/company#contact">
                                <Button size="sm" className="ml-2 bg-white text-black hover:bg-white/90 rounded-full font-bold text-xs px-6">
                                    CONTACT
                                </Button>
                            </Link>
                        </nav>

                        {/* Mobile Menu Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-white hover:bg-white/10 rounded-full"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-[#040B17] flex flex-col items-center justify-center transition-all duration-500 md:hidden",
                    mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#092a62]/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#f6bd2b]/10 rounded-full blur-3xl animate-pulse" />
                </div>

                <nav className="flex flex-col items-center gap-8 relative z-10">
                    {navItems.map((item, i) => (
                        <Link key={item.label} href={item.href}>
                            <a
                                className={cn(
                                    "text-4xl font-bold hover:text-[#f6bd2b] transition-all duration-300 transform font-['Outfit']",
                                    mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                                    location === item.href ? "text-[#f6bd2b]" : "text-white/80"
                                )}
                                style={{ transitionDelay: `${i * 50}ms` }}
                            >
                                {item.label}
                            </a>
                        </Link>
                    ))}
                    <Link href="/company#contact">
                        <Button className="mt-8 bg-[#f6bd2b] text-black hover:bg-[#f6bd2b]/90 rounded-full px-8 py-6 text-lg font-bold">
                            CONTACT US
                        </Button>
                    </Link>
                </nav>
            </div>
        </>
    );
}
