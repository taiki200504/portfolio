import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useTranslation } from "@/lib/i18n";

export default function WaitingList() {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            organization: formData.get("organization"),
            role: formData.get("role"),
            website: formData.get("website"),
            interest: [formData.get("interest")], // Multi-select in Notion, but single select in UI for now
            timing: formData.get("timing"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/notion/waiting-list", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const errorData = await response.json();
                console.error("Failed to submit:", errorData);
                alert(`Submission failed: ${errorData.error}\n${JSON.stringify(errorData.details, null, 2)}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />
            <main className="pt-24">
                <Section className="py-24 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#f6bd2b]/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="container mx-auto px-4 max-w-2xl relative z-10">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Outfit'] tracking-widest text-glow">
                                {t("waitingList.title")}
                            </h1>
                            <p className="text-lg text-white/60 whitespace-pre-line">
                                {t("waitingList.subtitle")}
                            </p>
                        </div>

                        {submitted ? (
                            <div className="glass-panel p-12 rounded-2xl text-center animate-in fade-in zoom-in duration-500 border border-[#f6bd2b]/30 shadow-[0_0_30px_rgba(246,189,43,0.1)]">
                                <h3 className="text-2xl font-bold text-[#f6bd2b] mb-4 font-['Outfit'] tracking-widest">{t("waitingList.success.title")}</h3>
                                <p className="text-white/80">
                                    {t("waitingList.success.desc")}
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 glass-panel p-8 md:p-12 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">
                                        {t("waitingList.form.name")}
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        required
                                        placeholder={t("waitingList.form.namePlaceholder")}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#f6bd2b] focus:ring-1 focus:ring-[#f6bd2b] h-12 transition-all duration-300"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">
                                        {t("waitingList.form.email")}
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder={t("waitingList.form.emailPlaceholder")}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#f6bd2b] focus:ring-1 focus:ring-[#f6bd2b] h-12 transition-all duration-300"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="organization" className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">
                                            {t("waitingList.form.organization")}
                                        </label>
                                        <Input
                                            id="organization"
                                            name="organization"
                                            placeholder={t("waitingList.form.organizationPlaceholder")}
                                            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#f6bd2b] focus:ring-1 focus:ring-[#f6bd2b] h-12 transition-all duration-300"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="role" className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">
                                            {t("waitingList.form.role")}
                                        </label>
                                        <Input
                                            id="role"
                                            name="role"
                                            placeholder={t("waitingList.form.rolePlaceholder")}
                                            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#f6bd2b] focus:ring-1 focus:ring-[#f6bd2b] h-12 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="website" className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">
                                        {t("waitingList.form.website")}
                                    </label>
                                    <Input
                                        id="website"
                                        name="website"
                                        placeholder={t("waitingList.form.websitePlaceholder")}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#f6bd2b] focus:ring-1 focus:ring-[#f6bd2b] h-12 transition-all duration-300"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="interest" className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">
                                        {t("waitingList.form.interest")}
                                    </label>
                                    <Select name="interest" required>
                                        <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 focus:border-[#f6bd2b] focus:ring-1 focus:ring-[#f6bd2b]">
                                            <SelectValue placeholder="Select an option" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#092a62] border-white/10 text-white">
                                            <SelectItem value="Personal use">{t("waitingList.form.interestOptions.personal")}</SelectItem>
                                            <SelectItem value="Office use">{t("waitingList.form.interestOptions.office")}</SelectItem>
                                            <SelectItem value="Facility installation">{t("waitingList.form.interestOptions.facility")}</SelectItem>
                                            <SelectItem value="PoC / trial">{t("waitingList.form.interestOptions.poc")}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="timing" className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">
                                        {t("waitingList.form.timing")}
                                    </label>
                                    <Select name="timing" required>
                                        <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 focus:border-[#f6bd2b] focus:ring-1 focus:ring-[#f6bd2b]">
                                            <SelectValue placeholder="Select an option" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#092a62] border-white/10 text-white">
                                            <SelectItem value="Within 6 months">{t("waitingList.form.timingOptions.within6m")}</SelectItem>
                                            <SelectItem value="Within 1 year">{t("waitingList.form.timingOptions.within1y")}</SelectItem>
                                            <SelectItem value="Within 2 years">{t("waitingList.form.timingOptions.within2y")}</SelectItem>
                                            <SelectItem value="Undecided">{t("waitingList.form.timingOptions.undecided")}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">
                                        {t("waitingList.form.message")}
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder={t("waitingList.form.messagePlaceholder")}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#f6bd2b] focus:ring-1 focus:ring-[#f6bd2b] min-h-[120px] transition-all duration-300"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 hover:shadow-[0_0_20px_rgba(246,189,43,0.4)] font-bold tracking-widest font-['Outfit'] h-14 text-lg rounded-full mt-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? t("waitingList.form.submitting") : t("waitingList.form.submit")}
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
