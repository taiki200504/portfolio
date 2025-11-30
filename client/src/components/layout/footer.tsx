import { Link } from "wouter";

export function Footer() {
    return (
        <footer className="bg-[#040B17] text-white pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <img src="/assets/logos/logo-footer.png" alt="LYEN" className="w-32 md:w-40 opacity-80 hover:opacity-100 transition-opacity mb-8" />
                        <p className="text-white/40 text-sm max-w-xs">
                            Internal OS for Humanity.
                            <br />
                            We engineer silence to upgrade your inner world.
                        </p>
                    </div>

                    <div className="flex flex-col justify-end">
                        <div className="grid grid-cols-2 gap-12">
                            <div>
                                <h4 className="font-bold mb-6 text-[#f6bd2b] tracking-widest text-xs font-['Outfit']">PRODUCT</h4>
                                <ul className="space-y-4 text-sm text-white/60 font-['Outfit']">
                                    <li><a href="#product" className="hover:text-white transition-colors">The EGG</a></li>
                                    <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
                                    <li><a href="#science" className="hover:text-white transition-colors">Science</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-6 text-[#f6bd2b] tracking-widest text-xs font-['Outfit']">COMPANY</h4>
                                <ul className="space-y-4 text-sm text-white/60 font-['Outfit']">
                                    <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                                    <li><a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a></li>
                                    <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
                                    <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-white/5">
                    <div className="text-xs text-white/30 mb-4 md:mb-0 font-['Outfit']">
                        &copy; {new Date().getFullYear()} LYEN Inc. All rights reserved.
                    </div>
                    <div className="flex gap-6 text-xs text-white/30 font-['Outfit']">
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
