import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#040B17] text-white">
            <Navbar />
            <Section className="pt-32">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-bold mb-12 font-['Outfit']">Privacy Policy</h1>
                    <div className="space-y-8 text-white/60 leading-relaxed">
                        <p>
                            This is a placeholder for the Privacy Policy.
                            <br />
                            プライバシーポリシーの本文がここに入ります。
                        </p>
                        <p>
                            LYEN Inc. respects your privacy and is committed to protecting your personal data.
                            We use your data to provide and improve the Internal OS experience.
                        </p>
                    </div>
                </div>
            </Section>
            <Footer />
        </div>
    );
}
