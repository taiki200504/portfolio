import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Download } from "lucide-react";
import { useLocation } from "wouter";

export default function PreOrderPage() {
    const { t } = useTranslation();
    const [location] = useLocation();
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Get model from URL query params
    const getQueryParam = (name: string) => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        return params.get(name);
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        role: "",
        website: "",
        country: "",
        facilityType: "",
        usage: [] as string[],
        status: "",
        preorderIntention: "",
        quantity: "",
        priceRange: "",
        specificPrice: "",
        requests: "",
        timing: "",
        model: "", // Added model field
    });

    useEffect(() => {
        const modelParam = getQueryParam("model");
        if (modelParam) {
            // Map param to display value if needed, or just use the key
            const modelMap: Record<string, string> = {
                "matsu": `${t("catalogPage.models.matsu.name")} (Premium)`,
                "take": `${t("catalogPage.models.take.name")} (Standard)`,
                "ume": `${t("catalogPage.models.ume.name")} (Entry)`
            };
            setFormData(prev => ({ ...prev, model: modelMap[modelParam] || modelParam }));
        }
    }, [t]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (value: string, checked: boolean) => {
        setFormData(prev => {
            const currentUsage = prev.usage;
            if (checked) {
                return { ...prev, usage: [...currentUsage, value] };
            } else {
                return { ...prev, usage: currentUsage.filter(item => item !== value) };
            }
        });
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/notion/catalog", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Virtual Sales Calculation (Display Only)
    const calculateEstimatedTotal = () => {
        const qty = parseInt(formData.quantity, 10) || 0;
        let unitPrice = 0;

        if (formData.specificPrice) {
            unitPrice = parseInt(formData.specificPrice, 10) || 0;
        } else {
            // Use mid-points or rough estimates based on selected range
            // Note: These strings must match the keys/values in locales
            if (formData.priceRange.includes("300")) unitPrice = 3000000;
            if (formData.priceRange.includes("300〜500") || formData.priceRange.includes("3M - 5M")) unitPrice = 4000000;
            if (formData.priceRange.includes("500〜800") || formData.priceRange.includes("5M - 8M")) unitPrice = 6500000;
            if (formData.priceRange.includes("800") || formData.priceRange.includes("8M+")) unitPrice = 8000000;
        }

        return qty * unitPrice;
    };

    const estimatedTotal = calculateEstimatedTotal();

    return (
        <div className="min-h-screen bg-[#040B17] text-white font-sans selection:bg-[#f6bd2b] selection:text-[#040B17]">
            <Navbar />
            <main className="pt-24">
                <Section className="py-24 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#092a62]/30 rounded-full blur-[120px] pointer-events-none" />

                    <div className="container mx-auto px-4 max-w-3xl relative z-10">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Outfit'] tracking-widest text-glow">
                                {t("catalog.title")}
                            </h1>
                            <p className="text-lg text-white/60 whitespace-pre-line">
                                {t("catalog.subtitle")}
                            </p>
                            <p className="text-sm text-[#f6bd2b] mt-4 max-w-2xl mx-auto leading-relaxed">
                                {t("catalogPage.crowdfundingNote")}
                            </p>
                        </div>

                        {submitted ? (
                            <div className="glass-panel p-12 rounded-2xl text-center animate-in fade-in zoom-in duration-500 border border-[#f6bd2b]/30 shadow-[0_0_30px_rgba(246,189,43,0.1)]">
                                <h3 className="text-2xl font-bold text-[#f6bd2b] mb-4 font-['Outfit'] tracking-widest">{t("catalog.success.title")}</h3>
                                <p className="text-white/80 mb-8">
                                    {t("catalog.success.desc")}
                                </p>
                                <a href="/assets/egg-catalog.pdf" download>
                                    <Button className="bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 font-bold tracking-widest font-['Outfit'] h-14 px-8 rounded-full">
                                        <Download className="mr-2 h-5 w-5" />
                                        {t("catalog.success.downloadButton")}
                                    </Button>
                                </a>
                            </div>
                        ) : (
                            <div className="glass-panel p-8 md:p-12 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl">
                                {/* Progress Bar */}
                                <div className="flex justify-between mb-12 relative">
                                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10" />
                                    {[1, 2, 3].map((s) => (
                                        <div key={s} className={`flex flex-col items-center gap-2 ${step >= s ? "text-[#f6bd2b]" : "text-white/30"}`}>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${step >= s ? "bg-[#040B17] border-[#f6bd2b]" : "bg-[#040B17] border-white/10"}`}>
                                                {s}
                                            </div>
                                            <span className="text-xs font-bold tracking-widest uppercase hidden md:block">
                                                {s === 1 ? t("catalog.steps.basic") : s === 2 ? t("catalog.steps.usage") : t("catalog.steps.preorder")}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <AnimatePresence mode="wait">
                                    {step === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">{t("waitingList.form.name")}</label>
                                                    <Input name="name" value={formData.name} onChange={handleInputChange} placeholder={t("waitingList.form.namePlaceholder")} className="bg-white/5 border-white/10 text-white h-12 focus:border-[#f6bd2b]" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">{t("waitingList.form.email")}</label>
                                                    <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder={t("waitingList.form.emailPlaceholder")} className="bg-white/5 border-white/10 text-white h-12 focus:border-[#f6bd2b]" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">{t("waitingList.form.organization")}</label>
                                                    <Input name="organization" value={formData.organization} onChange={handleInputChange} placeholder={t("waitingList.form.organizationPlaceholder")} className="bg-white/5 border-white/10 text-white h-12 focus:border-[#f6bd2b]" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">{t("waitingList.form.role")}</label>
                                                    <Input name="role" value={formData.role} onChange={handleInputChange} placeholder={t("waitingList.form.rolePlaceholder")} className="bg-white/5 border-white/10 text-white h-12 focus:border-[#f6bd2b]" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">{t("catalog.form.country")}</label>
                                                    <Input name="country" value={formData.country} onChange={handleInputChange} placeholder="Japan" className="bg-white/5 border-white/10 text-white h-12 focus:border-[#f6bd2b]" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">{t("catalog.form.facilityType")}</label>
                                                    <Select onValueChange={(v) => handleSelectChange("facilityType", v)} value={formData.facilityType}>
                                                        <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 focus:border-[#f6bd2b]"><SelectValue placeholder="Select" /></SelectTrigger>
                                                        <SelectContent className="bg-[#092a62] border-white/10 text-white">
                                                            <SelectItem value="Office">{t("catalog.form.facilityOptions.office")}</SelectItem>
                                                            <SelectItem value="Hotel">{t("catalog.form.facilityOptions.hotel")}</SelectItem>
                                                            <SelectItem value="Airport Lounge">{t("catalog.form.facilityOptions.airport")}</SelectItem>
                                                            <SelectItem value="Sauna / Spa">{t("catalog.form.facilityOptions.sauna")}</SelectItem>
                                                            <SelectItem value="Members Lounge">{t("catalog.form.facilityOptions.lounge")}</SelectItem>
                                                            <SelectItem value="Other">{t("catalog.form.facilityOptions.other")}</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">{t("waitingList.form.website")}</label>
                                                <Input name="website" value={formData.website} onChange={handleInputChange} placeholder={t("waitingList.form.websitePlaceholder")} className="bg-white/5 border-white/10 text-white h-12 focus:border-[#f6bd2b]" />
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <div className="space-y-4">
                                                <label className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">{t("catalog.form.usage")}</label>
                                                <div className="grid grid-cols-1 gap-3">
                                                    {[
                                                        { id: "decision", label: t("catalog.form.usageOptions.decision") },
                                                        { id: "wellbeing", label: t("catalog.form.usageOptions.wellbeing") },
                                                        { id: "premium", label: t("catalog.form.usageOptions.premium") },
                                                        { id: "value", label: t("catalog.form.usageOptions.value") },
                                                        { id: "other", label: t("catalog.form.usageOptions.other") },
                                                    ].map((opt) => (
                                                        <div key={opt.id} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#f6bd2b]/50 transition-colors cursor-pointer" onClick={() => handleCheckboxChange(opt.label, !formData.usage.includes(opt.label))}>
                                                            <Checkbox
                                                                id={opt.id}
                                                                checked={formData.usage.includes(opt.label)}
                                                                onCheckedChange={(c) => handleCheckboxChange(opt.label, c as boolean)}
                                                                className="border-white/20 data-[state=checked]:bg-[#f6bd2b] data-[state=checked]:text-[#040B17]"
                                                            />
                                                            <label htmlFor={opt.id} className="text-sm cursor-pointer flex-1">{opt.label}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">{t("catalog.form.status")}</label>
                                                <Select onValueChange={(v) => handleSelectChange("status", v)} value={formData.status}>
                                                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 focus:border-[#f6bd2b]"><SelectValue placeholder="Select" /></SelectTrigger>
                                                    <SelectContent className="bg-[#092a62] border-white/10 text-white">
                                                        <SelectItem value="Just collecting info">{t("catalog.form.statusOptions.info")}</SelectItem>
                                                        <SelectItem value="Comparing with other options">{t("catalog.form.statusOptions.compare")}</SelectItem>
                                                        <SelectItem value="Considering specific implementation">{t("catalog.form.statusOptions.consider")}</SelectItem>
                                                        <SelectItem value="Want to install immediately">{t("catalog.form.statusOptions.want")}</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">{t("waitingList.form.timing")}</label>
                                                <Select onValueChange={(v) => handleSelectChange("timing", v)} value={formData.timing}>
                                                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 focus:border-[#f6bd2b]"><SelectValue placeholder="Select" /></SelectTrigger>
                                                    <SelectContent className="bg-[#092a62] border-white/10 text-white">
                                                        <SelectItem value="Within 6 months">{t("waitingList.form.timingOptions.within6m")}</SelectItem>
                                                        <SelectItem value="Within 1 year">{t("waitingList.form.timingOptions.within1y")}</SelectItem>
                                                        <SelectItem value="Within 2 years">{t("waitingList.form.timingOptions.within2y")}</SelectItem>
                                                        <SelectItem value="Undecided">{t("waitingList.form.timingOptions.undecided")}</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">Target Model</label>
                                                <Select onValueChange={(v) => handleSelectChange("model", v)} value={formData.model}>
                                                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 focus:border-[#f6bd2b]"><SelectValue placeholder="Select Model" /></SelectTrigger>
                                                    <SelectContent className="bg-[#092a62] border-white/10 text-white">
                                                        <SelectItem value={`${t("catalogPage.models.matsu.name")} (Premium)`}>{t("catalogPage.models.matsu.name")} (Premium)</SelectItem>
                                                        <SelectItem value={`${t("catalogPage.models.take.name")} (Standard)`}>{t("catalogPage.models.take.name")} (Standard)</SelectItem>
                                                        <SelectItem value={`${t("catalogPage.models.ume.name")} (Entry)`}>{t("catalogPage.models.ume.name")} (Entry)</SelectItem>
                                                        <SelectItem value="Undecided">{t("waitingList.form.timingOptions.undecided")}</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">{t("catalog.form.preorderIntention")}</label>
                                                <Select onValueChange={(v) => handleSelectChange("preorderIntention", v)} value={formData.preorderIntention}>
                                                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 focus:border-[#f6bd2b]"><SelectValue placeholder="Select" /></SelectTrigger>
                                                    <SelectContent className="bg-[#092a62] border-white/10 text-white">
                                                        <SelectItem value="Interested in pre-order">{t("catalog.form.preorderOptions.interested")}</SelectItem>
                                                        <SelectItem value="Want to pre-order depending on conditions">{t("catalog.form.preorderOptions.conditional")}</SelectItem>
                                                        <SelectItem value="Just info for now">{t("catalog.form.preorderOptions.infoOnly")}</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">{t("catalog.form.quantity")}</label>
                                                    <Input name="quantity" type="number" min="1" value={formData.quantity} onChange={handleInputChange} placeholder="1" className="bg-white/5 border-white/10 text-white h-12 focus:border-[#f6bd2b]" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">{t("catalog.form.priceRange")}</label>
                                                    <Select onValueChange={(v) => handleSelectChange("priceRange", v)} value={formData.priceRange}>
                                                        <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 focus:border-[#f6bd2b]"><SelectValue placeholder="Select" /></SelectTrigger>
                                                        <SelectContent className="bg-[#092a62] border-white/10 text-white">
                                                            <SelectItem value="~ 300万円">{t("catalog.form.priceOptions.range1")}</SelectItem>
                                                            <SelectItem value="300〜500万円">{t("catalog.form.priceOptions.range2")}</SelectItem>
                                                            <SelectItem value="500〜800万円">{t("catalog.form.priceOptions.range3")}</SelectItem>
                                                            <SelectItem value="800万円以上">{t("catalog.form.priceOptions.range4")}</SelectItem>
                                                            <SelectItem value="Undecided">{t("catalog.form.priceOptions.undecided")}</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">{t("catalog.form.specificPrice")}</label>
                                                <Input name="specificPrice" type="number" value={formData.specificPrice} onChange={handleInputChange} placeholder="JPY" className="bg-white/5 border-white/10 text-white h-12 focus:border-[#f6bd2b]" />
                                            </div>

                                            {/* Virtual Sales Display (Subtle) */}
                                            {estimatedTotal > 0 && (
                                                <div className="p-4 bg-[#f6bd2b]/10 border border-[#f6bd2b]/30 rounded-lg text-center">
                                                    <p className="text-xs text-[#f6bd2b] uppercase tracking-widest mb-1">Estimated Pre-order Value</p>
                                                    <p className="text-xl font-bold font-['Outfit']">¥ {estimatedTotal.toLocaleString()}</p>
                                                </div>
                                            )}

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold tracking-[0.2em] text-[#f6bd2b] font-['Outfit'] uppercase">{t("catalog.form.requests")}</label>
                                                <Textarea name="requests" value={formData.requests} onChange={handleInputChange} placeholder="..." className="bg-white/5 border-white/10 text-white h-24 focus:border-[#f6bd2b]" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="flex justify-between mt-12">
                                    {step > 1 ? (
                                        <Button onClick={prevStep} variant="outline" className="border-white/10 text-white hover:bg-white/10 rounded-full px-8">
                                            <ArrowLeft className="mr-2 h-4 w-4" /> {t("catalog.form.back")}
                                        </Button>
                                    ) : (
                                        <div />
                                    )}

                                    {step < 3 ? (
                                        <Button onClick={nextStep} className="bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 font-bold rounded-full px-8">
                                            {t("catalog.form.next")} <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    ) : (
                                        <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-[#f6bd2b] text-[#040B17] hover:bg-[#f6bd2b]/90 font-bold rounded-full px-8">
                                            {isSubmitting ? "SENDING..." : t("waitingList.form.submit")}
                                        </Button>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
