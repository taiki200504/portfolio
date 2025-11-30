import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "wouter";
import { ja } from "@/locales/ja";
import { en } from "@/locales/en";

type Language = "ja" | "en";
type Translations = typeof ja;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
    locale: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [location, setLocation] = useLocation();
    const [language, setLanguageState] = useState<Language>("ja");

    // Initialize language based on URL
    useEffect(() => {
        if (location.startsWith("/en")) {
            setLanguageState("en");
        } else {
            setLanguageState("ja");
        }
    }, [location]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);

        // Update URL
        const currentPath = location.replace(/^\/en/, ""); // Remove existing /en if any
        if (lang === "en") {
            setLocation(`/en${currentPath === "/" ? "" : currentPath}`);
        } else {
            setLocation(currentPath || "/");
        }
    };

    const t = (key: string) => {
        const keys = key.split(".");
        let value: any = language === "ja" ? ja : en;

        for (const k of keys) {
            if (value && typeof value === "object" && k in value) {
                value = value[k as keyof typeof value];
            } else {
                return key; // Fallback to key if not found
            }
        }

        return value;
    };

    const locale = language === "ja" ? ja : en;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, locale }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useTranslation must be used within a LanguageProvider");
    }
    return context;
}
