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
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                className="text-xs font-bold tracking-[0.2em] text-white/60 hover:text-[#f6bd2b] transition-colors font-['Outfit']"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}>
                            <Button size="sm" className="rounded-full font-bold tracking-wider bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90">
                                CONTACT
                            </Button>
                        </a>
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
                <div className="absolute top-full left-0 right-0 bg-[#040B17] border-b border-white/10 p-4 md:hidden flex flex-col gap-4 shadow-2xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(link.href);
                            }}
                            className="text-sm font-bold tracking-widest text-white/80 hover:text-[#f6bd2b] py-2 font-['Outfit']"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}>
                        <Button className="w-full rounded-full font-bold tracking-wider bg-[#f6bd2b] text-[#040B17]">
                            CONTACT
                        </Button>
                    </a>
                </div>
            )}
        </nav>
    );
}
