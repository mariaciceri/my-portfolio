import { createContext, useContext, useState } from 'react';

type Language = 'en' | 'sv';

//Creates a context for managing language state in a React application
//Null is used as the default value to indicate that the context is not yet provided
const LanguageContext = createContext<{ //Type of the context value
    language: Language; 
    setLanguage: (lang: Language) => void;
} | null>(null);

// LanguageProvider component that provides the language context to its children
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use the LanguageContext
// This ensures that components can access the language state and setter function
export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used inside a LanguageProvider");
    return ctx;
};
