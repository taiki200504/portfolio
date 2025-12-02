import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "@/lib/i18n";

export default function ContactPage() {
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            company: formData.get("company"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/notion/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to submit");
            }

            toast.success("Message sent successfully!");
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error("Contact form error:", error);
            toast.error("Failed to send message. Please try again.");
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
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#092a62]/30 rounded-full blur-[120px] pointer-events-none" />

                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-6 uppercase">
                                    {t("contactPage.title")}
                                </h2>
                                <h3 className="text-3xl md:text-5xl font-bold text-white font-['Outfit'] mb-8">
                                    {t("contactPage.subtitle")}
                                </h3>
                                <p className="text-white/60">
                                    {t("contactPage.desc")}
                                </p>
                            </div>

                            <motion.form
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                onSubmit={handleSubmit}
                                className="space-y-6 glass-panel p-8 md:p-12 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/50 tracking-wider font-['Outfit'] uppercase">
                                            {t("contactPage.form.name")}
                                        </label>
                                        <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors" placeholder={t("contactPage.form.namePlaceholder")} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/50 tracking-wider font-['Outfit'] uppercase">
                                            {t("contactPage.form.email")}
                                        </label>
                                        <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors" placeholder={t("contactPage.form.emailPlaceholder")} />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/50 tracking-wider font-['Outfit'] uppercase">
                                        {t("contactPage.form.company")}
                                    </label>
                                    <input type="text" name="company" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors" placeholder={t("contactPage.form.companyPlaceholder")} />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/50 tracking-wider font-['Outfit'] uppercase">
                                        {t("contactPage.form.subject")}
                                    </label>
                                    <select name="subject" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors appearance-none">
                                        <option className="bg-[#040B17]" value="Implementation">{t("contactPage.form.subjectOptions.implementation")}</option>
                                        <option className="bg-[#040B17]" value="Partnership">{t("contactPage.form.subjectOptions.partnership")}</option>
                                        <option className="bg-[#040B17]" value="Media">{t("contactPage.form.subjectOptions.media")}</option>
                                        <option className="bg-[#040B17]" value="Other">{t("contactPage.form.subjectOptions.other")}</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/50 tracking-wider font-['Outfit'] uppercase">
                                        {t("contactPage.form.message")}
                                    </label>
                                    <textarea name="message" required rows={5} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors" placeholder={t("contactPage.form.messagePlaceholder")} />
                                </div>

                                <div className="text-center pt-8">
                                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-full font-bold tracking-wider bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90">
                                        {isSubmitting ? t("contactPage.form.submitting") : t("contactPage.form.submit")}
                                    </Button>
                                </div>
                            </motion.form>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
