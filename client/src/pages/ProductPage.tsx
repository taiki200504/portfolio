import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Experience } from "@/components/sections/experience";
import { Product } from "@/components/sections/product";
import { UseCases } from "@/components/sections/use-cases";

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />
            <main className="pt-24">
                <Product />
                <Experience />
                <UseCases />
            </main>
            <Footer />
        </div>
    );
}
