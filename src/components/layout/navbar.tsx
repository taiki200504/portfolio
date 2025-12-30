"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button" // Keeping it simple for now

const navItems = [
    { name: "Works", href: "#case-studies" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleScrollTo = (id: string, e: React.MouseEvent) => {
        if (pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(id.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent bg-white/80 backdrop-blur-md",
                isScrolled ? "py-4 border-black/10" : "py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter uppercase font-['Outfit'] text-black">
                    Taiki Mishima
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleScrollTo(item.href, e)}
                            className="text-sm font-bold text-black/60 hover:text-black transition-colors uppercase tracking-widest font-['Outfit']"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button - Placeholder/Simple implementation if needed, skipping for minimalist initial pass or adding basic */}
                <div className="md:hidden">
                    {/* Simple Mobile Menu could be added here */}
                </div>
            </div>
        </header>
    )
}
