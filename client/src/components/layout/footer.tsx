import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-b from-[#040B17] to-[#092a62] text-white pt-0">
            {/* Mini CTA Bar */}
            <div className="bg-[#092a62]/30 border-y border-white/10 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-8 md:py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-bold font-['Outfit'] tracking-wide mb-1">
                                The EGGの導入・試験設置を検討されている方へ
                            </h3>
                            <p className="text-sm text-white/60">
                                カタログのダウンロードとWaiting Listへの登録はこちらから
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="/assets/egg-catalog.pdf" download target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="rounded-full border-white/20 hover:bg-white hover:text-[#040B17] font-['Outfit'] tracking-widest">
                                    CATALOG
                                </Button>
                            </a>
                            <Link href="/waiting-list">
                                <Button className="rounded-full bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 font-['Outfit'] tracking-widest font-bold">
                                    WAITING LIST
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <img src="/assets/logos/logo-footer.png" alt="LYEN" className="h-8 object-contain" />
                        </Link>
                        <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-6 font-['Outfit']">
                            Internal OS Company.<br />
                            We engineer silence to upgrade your inner world.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-white/40 hover:text-[#f6bd2b] transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white/40 hover:text-[#f6bd2b] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white/40 hover:text-[#f6bd2b] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold font-['Outfit'] tracking-widest mb-6 text-[#f6bd2b]">COMPANY</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li>
                                <Link href="/philosophy">
                                    <a className="hover:text-[#f6bd2b] transition-colors">Philosophy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/company">
                                    <a className="hover:text-[#f6bd2b] transition-colors">Team</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/company#contact">
                                    <a className="hover:text-[#f6bd2b] transition-colors">Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold font-['Outfit'] tracking-widest mb-6 text-[#f6bd2b]">PRODUCT</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li>
                                <Link href="/product">
                                    <a className="hover:text-[#f6bd2b] transition-colors">The EGG</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/product#use-cases">
                                    <a className="hover:text-[#f6bd2b] transition-colors">Use Cases</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/philosophy#science">
                                    <a className="hover:text-[#f6bd2b] transition-colors">Science</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold font-['Outfit'] tracking-widest mb-6 text-[#f6bd2b]">RESOURCES</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li>
                                <Link href="/news">
                                    <a className="hover:text-[#f6bd2b] transition-colors">News</a>
                                </Link>
                            </li>
                            <li>
                                <a href="/assets/egg-catalog.pdf" download className="hover:text-[#f6bd2b] transition-colors">
                                    Catalog
                                </a>
                            </li>
                            <li>
                                <Link href="/privacy">
                                    <a className="hover:text-[#f6bd2b] transition-colors">Privacy Policy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms">
                                    <a className="hover:text-[#f6bd2b] transition-colors">Terms of Use</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-center md:text-left">
                    <p className="text-xs text-white/40 font-['Outfit']">
                        © {currentYear} LYEN Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
