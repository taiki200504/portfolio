import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <Section id="contact" className="bg-[#092a62] py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#040B17]/90" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f6bd2b]/50 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[#f6bd2b] font-bold tracking-[0.2em] text-sm mb-4 font-['Outfit']">CONTACT</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 font-['Outfit']">
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
                        action="https://formspree.io/f/YOUR_FORM_ID"
                        method="POST"
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/70 tracking-wider">NAME</label>
                                <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors" placeholder="お名前" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/70 tracking-wider">EMAIL</label>
                                <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors" placeholder="メールアドレス" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/70 tracking-wider">SUBJECT</label>
                            <select name="subject" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors appearance-none">
                                <option className="bg-[#040B17]">導入について</option>
                                <option className="bg-[#040B17]">協業・パートナーシップについて</option>
                                <option className="bg-[#040B17]">メディア・取材について</option>
                                <option className="bg-[#040B17]">その他</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/70 tracking-wider">MESSAGE</label>
                            <textarea name="message" required rows={5} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#f6bd2b] transition-colors" placeholder="お問い合わせ内容" />
                        </div>

                        <div className="text-center pt-8">
                            <Button type="submit" className="bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 px-12 py-6 text-lg rounded-full font-bold tracking-wider shadow-[0_0_20px_rgba(246,189,43,0.3)] hover:shadow-[0_0_30px_rgba(246,189,43,0.5)] transition-all">
                                SEND MESSAGE
                            </Button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </Section>
    );
}
