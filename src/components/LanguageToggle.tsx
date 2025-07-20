import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();
    
    return (
        <div className="flex justify-end p-4">
            <button 
            onClick={() => setLanguage(language === 'en' ? 'sv' : 'en')}
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                {language === 'en' ? 'Switch to Swedish' : 'Switch to English'}
            </button>
        </div>
    )
}