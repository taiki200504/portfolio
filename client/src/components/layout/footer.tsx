import { Section } from "@/components/ui/section";
import { Link } from "wouter";

export function Footer() {
    return (
        <footer className="bg-black text-white pt-32 pb-12 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-[12vw] leading-none font-bold tracking-tighter text-white/10 select-none font-['Outfit']">
                            LYEN
                        </h2>
                    </div>

                    <div className="flex flex-col justify-end">
                        <div className="grid grid-cols-2 gap-12">
                            <div>
                                <h4 className="font-bold mb-6 text-[#f6bd2b] tracking-widest text-xs">PRODUCT</h4>
                                <ul className="space-y-4 text-sm text-white/60">
                                    <li><Link href="/product"><a className="hover:text-white transition-colors">The EGG</a></Link></li>
                                    <li><Link href="/product"><a className="hover:text-white transition-colors">Experience</a></Link></li>
                                    <li><Link href="/philosophy"><a className="hover:text-white transition-colors">Science</a></Link></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-6 text-[#f6bd2b] tracking-widest text-xs">COMPANY</h4>
                                <ul className="space-y-4 text-sm text-white/60">
                                    <li><Link href="/philosophy"><a className="hover:text-white transition-colors">Philosophy</a></Link></li>
                                    <li><Link href="/company"><a className="hover:text-white transition-colors">Roadmap</a></Link></li>
                                    <li><Link href="/company"><a className="hover:text-white transition-colors">Team</a></Link></li>
                                    <li><Link href="/company"><a className="hover:text-white transition-colors">Contact</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-white/10">
                    <div className="text-xs text-white/40 mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} LYEN Inc.
                        <br />
                        Internal OS for Humanity.
                    </div>
                    <div className="flex gap-6 text-xs text-white/40">
                        <Link href="/privacy">
                            <a className="hover:text-white transition-colors">Privacy Policy</a>
                        </Link>
                        <Link href="/terms">
                            <a className="hover:text-white transition-colors">Terms of Service</a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
