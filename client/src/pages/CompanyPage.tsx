import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Contact } from "@/components/sections/contact";
import { Roadmap } from "@/components/sections/roadmap";
import { Team } from "@/components/sections/team";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export default function CompanyPage() {
    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />
            <main className="pt-32">
                <Section className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 font-['Outfit']"
                    >
                        ABOUT <span className="text-[#f6bd2b]">LYEN</span>
                    </motion.h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        We are a team of designers, engineers, and researchers.
                        <br />
                        静寂をエンジニアリングする、東京発のスタートアップです。
                    </p>
                </Section>

                <Team />
                <Roadmap />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
