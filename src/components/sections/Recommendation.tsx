import { useLanguage } from "../../context/LanguageContext";
import { useColor } from '../../context/ColorContext';
import { content } from '../../data/translations';
import { colors } from '../../data/colors';


function Recommendation() {
    const { language } = useLanguage();
    const reference = content[language].reference || "Something went wrong, sorry about that! Please contact me here <mariafacchin00@hotmail.com> if you can't see this text.";
    const { colorScheme } = useColor();
    const { primary, secondary, lightBackground } = colors[colorScheme];

    return (
        <div className="shadow-xl rounded-2xl p-8 text-gray-600 col-span-2 mt-5 lg:h-full"
            style={{ backgroundColor: lightBackground }}
            id="Contact">
            <div className="font-cormorant text-2xl pb-4"
                style={{ color: primary }}>
                {reference}
            </div>
            <div className="py-4" style={{ color: secondary }}>
                "She is disciplined, hardworking, and highly motivated.
                On her GitHub profile, she has made 976 contributions over
                the past year—a remarkable achievement that clearly demonstrates her passion for coding."
                <small>- Lukas Zetterberg, Qling.ai</small>
            </div>
            <div className="py-4 max-sm:flex-col max-sm:space-x-0"
                style={{ color: secondary }}>
                <a href="../../assets/recommendationLetter.pdf" target="_blank" rel="noopener noreferrer"
                        className="hover:text-gray-700 hover:scale-105 transition-all duration-300 max-sm:py-2">
                    <i className="fa-brands fa-readme"></i>
                    {language === 'en' ? ' Read recommendation' : ' Läs rekommendationen' }
                    </a>
            </div>
        </div>
    )
}

export default Recommendation;