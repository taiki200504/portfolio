import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Experience } from "@/components/sections/experience";
import { Product } from "@/components/sections/product";
import { UseCases } from "@/components/sections/use-cases";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />
            <main className="pt-32">
                <Section className="text-center mb-0 pb-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 font-['Outfit']"
                    >
                        THE <span className="text-[#f6bd2b]">EGG</span>
                    </motion.h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Series 01
                        <br />
                        The world's first immersive pod for inner clarity.
                    </p>
                </Section>

                <Product />
                <Experience />
                <UseCases />
            </main>
            <Footer />
        </div>
    );
}
