import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "PHILOSOPHY", href: "/philosophy" },
        { name: "PRODUCT", href: "/product" },
        { name: "COMPANY", href: "/company" },
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
                            <Link key={link.name} href={link.href}>
                                <a className={cn(
                                    "text-xs font-bold tracking-widest hover:text-[#f6bd2b] transition-colors font-['Outfit']",
                                    location === link.href ? "text-white" : "text-white/60"
                                )}>
                                    {link.name}
                                </a>
                            </Link>
                        ))}
                        <Link href="/company#contact">
                            <Button variant="outline" size="sm" className="rounded-full border-white/20 text-white hover:bg-white hover:text-black transition-all font-['Outfit'] tracking-widest text-xs">
                                CONTACT
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl p-4 md:hidden flex flex-col gap-4 border-t border-white/10">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href}>
                            <a
                                className="text-sm font-bold tracking-widest text-white/80 hover:text-[#f6bd2b] py-2 font-['Outfit']"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        </Link>
                    ))}
                    <Link href="/company#contact">
                        <Button className="w-full rounded-full bg-white text-black hover:bg-white/90 font-['Outfit'] tracking-widest text-xs">
                            CONTACT
                        </Button>
                    </Link>
                </div>
            )}
        </nav>
    );
}
