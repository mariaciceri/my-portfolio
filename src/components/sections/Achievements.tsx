import { useLanguage } from "../../context/LanguageContext";
import { useColor } from '../../context/ColorContext';
import { content } from '../../data/translations';
import { colors } from '../../data/colors';


function Recommendation() {
    const { language } = useLanguage();
    const achievements = content[language].achievement || "Something went wrong, sorry about that! Please contact me here <mariafacchin00@hotmail.com> if you can't see this text.";
    const { colorScheme } = useColor();
    const { primary, secondary, lightBackground } = colors[colorScheme];
    const header = content[language].header.navigator[0];


    return (
        <div className="shadow-xl rounded-2xl p-8 text-gray-600 col-span-2 mt-5 lg:h-full"
            style={{ backgroundColor: lightBackground }}
            id={ header }>
            <h3 className="break-all whitespace-pre-wrap text-3xl 
            font-cormorant font-semibold tracking-widest mb-4 max-sm:text-4xl"
                style={{ color: primary }}>
                {language === 'sv' ? 'Resultat' : 'Key Achievements'}
            </h3>
            <div className="py-4" style={{ color: secondary }}>
                <ul>
                {achievements.map((text, index) => (
                    <li key={index} className="mb-2 text-s max-sm:text-[18px]">
                        <i className={text.icon}></i>
                        {text.text}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default Recommendation;

