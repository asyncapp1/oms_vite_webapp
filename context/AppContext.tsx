
import * as React from 'react';
import type { Language } from '../types';

interface AppContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  content: any;
  loading: boolean;
  error: string | null;
}

const AppContext = React.createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [language, setLanguage] = React.useState<Language>('en');
    const [fullContent, setFullContent] = React.useState<any | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch('/data/content.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setFullContent(data);
            } catch (e: any) {
                setError(e.message);
                console.error("Failed to fetch content:", e);
            } finally {
                setLoading(false);
            }
        };
        fetchContent();
    }, []);

    const contentForLanguage = fullContent ? fullContent[language] : {};

    const value = {
        language,
        setLanguage,
        content: contentForLanguage,
        loading,
        error,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    const context = React.useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};