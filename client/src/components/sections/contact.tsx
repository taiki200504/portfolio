import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
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
        <Section id="contact" className="bg-[#040B17] relative">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[#f6bd2b] text-xs font-bold tracking-[0.3em] mb-6 uppercase">CONTACT</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white font-['Outfit'] mb-8">
                            Join the Silence
                        </h3>
                        <p className="text-white/60">
                            導入、協業、取材、その他のお問い合わせはこちらから。
                        </p>
                    </div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/50 tracking-wider">NAME</label>
                                <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors" placeholder="お名前" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/50 tracking-wider">EMAIL</label>
                                <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors" placeholder="メールアドレス" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/50 tracking-wider">COMPANY</label>
                            <input type="text" name="company" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors" placeholder="会社名 / 組織名" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/50 tracking-wider">SUBJECT</label>
                            <select name="subject" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors appearance-none">
                                <option className="bg-[#040B17]">導入について</option>
                                <option className="bg-[#040B17]">協業・パートナーシップについて</option>
                                <option className="bg-[#040B17]">メディア・取材について</option>
                                <option className="bg-[#040B17]">その他</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/50 tracking-wider">MESSAGE</label>
                            <textarea name="message" required rows={5} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors" placeholder="お問い合わせ内容" />
                        </div>

                        <div className="text-center pt-8">
                            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto rounded-full font-bold tracking-wider">
                                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                            </Button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </Section>
    );
}
