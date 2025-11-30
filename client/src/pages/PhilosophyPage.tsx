import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Problem } from "@/components/sections/problem";
import { Science } from "@/components/sections/science";
import { Solution } from "@/components/sections/solution";

export default function PhilosophyPage() {
    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />
            <main className="pt-24">
                <About />
                <Problem />
                <Solution />
                <Science />
            </main>
            <Footer />
        </div>
    );
}
