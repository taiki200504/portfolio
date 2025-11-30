import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-[#040B17] text-white">
            <Navbar />
            <Section className="pt-32">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-bold mb-12 font-['Outfit']">Terms of Service</h1>
                    <div className="space-y-8 text-white/60 leading-relaxed">
                        <p>
                            This is a placeholder for the Terms of Service.
                            <br />
                            利用規約の本文がここに入ります。
                        </p>
                        <p>
                            By accessing or using the LYEN website and The EGG, you agree to be bound by these terms.
                        </p>
                    </div>
                </div>
            </Section>
            <Footer />
        </div>
    );
}
