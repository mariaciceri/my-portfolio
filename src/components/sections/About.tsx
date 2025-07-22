import { useLanguage } from "../../context/LanguageContext";
import { content } from '../../data/translations';

function About() {
    const { language } = useLanguage();
    const about = content[language].about || "Something went wront, sorry about that! Please contact me if you can't see this text.";;

    return (
        <div className="shadow-xl rounded-2xl p-8 lg:h-full">
            <h3 className="text-3xl font-cormorant font-semibold tracking-widest mb-4">
                {language === 'sv' ? 'Om mig' : 'About Me'}
            </h3>
            {about.split('\n').map((line, index) => (
                <p key={index} className="tracking-tight text-gray-600 p-1">
                    {line}
                </p>
            ))}
        </div>
    )
}

export default About;
