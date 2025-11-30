import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Contact } from "@/components/sections/contact";
import { Roadmap } from "@/components/sections/roadmap";
import { Team } from "@/components/sections/team";

export default function CompanyPage() {
    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />
            <main className="pt-24">
                <Roadmap />
                <Team />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
