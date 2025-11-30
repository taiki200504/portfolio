import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function WaitingList() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send data to your backend or Formspree
        // For now, we simulate a successful submission
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />
            <main className="pt-24">
                <Section className="py-24">
                    <div className="container mx-auto px-4 max-w-2xl">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Outfit'] tracking-widest">
                                JOIN THE WAITING LIST
                            </h1>
                            <p className="text-lg text-white/60">
                                Be the first to experience the internal OS for humanity.
                                <br />
                                We are currently accepting early access requests for The EGG.
                            </p>
                        </div>

                        {submitted ? (
                            <div className="bg-white/5 border border-[#f6bd2b] p-8 rounded-2xl text-center animate-in fade-in zoom-in duration-500">
                                <h3 className="text-2xl font-bold text-[#f6bd2b] mb-4 font-['Outfit']">THANK YOU</h3>
                                <p className="text-white/80">
                                    Your request has been received. We will contact you shortly with more information.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold tracking-widest text-[#f6bd2b] font-['Outfit']">
                                        NAME
                                    </label>
                                    <Input
                                        id="name"
                                        required
                                        placeholder="Your Name"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#f6bd2b] h-12"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold tracking-widest text-[#f6bd2b] font-['Outfit']">
                                        EMAIL
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="your@email.com"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#f6bd2b] h-12"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="organization" className="text-sm font-bold tracking-widest text-[#f6bd2b] font-['Outfit']">
                                        ORGANIZATION (OPTIONAL)
                                    </label>
                                    <Input
                                        id="organization"
                                        placeholder="Company / Organization"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#f6bd2b] h-12"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold tracking-widest text-[#f6bd2b] font-['Outfit']">
                                        MESSAGE (OPTIONAL)
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your interest in The EGG..."
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#f6bd2b] min-h-[120px]"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 font-bold tracking-widest font-['Outfit'] h-14 text-lg rounded-full mt-4"
                                >
                                    SUBMIT REQUEST
                                </Button>
                            </form>
                        )}
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
