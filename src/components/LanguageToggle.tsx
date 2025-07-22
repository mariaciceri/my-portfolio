import { useLanguage } from '../context/LanguageContext';
import { useColor } from '../context/ColorContext';

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();
    const { setColorScheme } = useColor();

    function toggleLanguage() {
        if (language === 'en') {
            setLanguage('sv');
            setColorScheme('blue');
        } else {
            setLanguage('en');
            setColorScheme('red');
        }
    }
    
    return (
        <div className="flex justify-end p-4">
            <button 
            onClick={toggleLanguage}
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                {language === 'en' ? 'SE 🇸🇪' : 'EN 🇬🇧'}
            </button>
        </div>
    )
}