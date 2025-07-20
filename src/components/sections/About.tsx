import { useLanguage } from "../../context/LanguageContext";
import { content } from '../../data/translations';

function About() {
    const { language } = useLanguage();
    const about = content[language].about || "Something went wront, sorry about that! Please contact me if you can't see this text.";;

    return (
        <div className="bg-red-500">
            <h3 className="text-2xl font-semibold text-gray-900 tracking-widest mb-4">
                {language === 'sv' ? 'Om mig' : 'About Me'}
            </h3>
            {about.split('\n').map((line, index) => (
                <p key={index} className="text-gray-900 tracking-tight">
                    {line}
                </p>
            ))}
        </div>
    )
}

export default About;
