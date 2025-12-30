export function Footer() {
    return (
        <footer className="bg-white border-t border-black/10 py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold uppercase tracking-tight font-['Outfit'] text-black">Taiki Mishima</h3>
                    <p className="text-xs text-black/50 mt-1 font-medium">Portfolio 2025</p>
                </div>

                <div className="flex gap-6">
                    {/* Social Links Placeholder */}
                    <a href="#" className="text-xs font-bold text-black/40 hover:text-black uppercase tracking-widest transition-colors">Twitter (X)</a>
                    <a href="#" className="text-xs font-bold text-black/40 hover:text-black uppercase tracking-widest transition-colors">GitHub</a>
                    <a href="#" className="text-xs font-bold text-black/40 hover:text-black uppercase tracking-widest transition-colors">LinkedIn</a>
                </div>

                <div className="text-xs text-black/30 font-bold tracking-widest uppercase">
                    © 2025 Taiki Mishima
                </div>
            </div>
        </footer>
    )
}
