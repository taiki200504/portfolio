import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [location] = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "ABOUT", href: "#about" },
        { name: "PRODUCT", href: "#product" },
        { name: "EXPERIENCE", href: "#experience" },
        { name: "SCIENCE", href: "#science" },
        { name: "TEAM", href: "#team" },
    ];

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
                scrolled ? "bg-[#040B17]/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <a className="flex items-center gap-3 group">
                            <img src="/assets/logos/logo-footer.png" alt="LYEN" className="h-8 md:h-10 object-contain" />
                        </a>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
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
