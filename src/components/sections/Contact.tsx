import { useLanguage } from "../../context/LanguageContext";
import { useColor } from '../../context/ColorContext';
import { content } from '../../data/translations';
import { colors } from '../../data/colors';

function Contact() {
    const { language } = useLanguage();
    const contactInfo = content[language].contact || "Something went wrong, sorry about that! Please contact me here <mariafacchin00@hotmail.com> if you can't see this text.";
    const header = content[language].header.navigator[4];
    const { colorScheme } = useColor();
    const { primary, secondary, lightBackground } = colors[colorScheme];

    return (
        <div className="shadow-xl rounded-2xl p-6 text-gray-600 col-span-2 mt-5"
        style={{ backgroundColor: lightBackground }}
        id={ header }>
            <div className="font-cormorant text-2xl pb-4"
            style={{ color: primary }}>
                { contactInfo.message }
            </div>
            <div className="py-4" style={{ color: secondary }}>
                <a href="mailto:mariafacchin00@hotmail.com" 
                className="inline-block hover:text-gray-700 hover:scale-105 transition-all duration-300">
                    { contactInfo.email }
                </a>
            </div>
            <div className="flex space-x-[100px] justify-self-center py-4 max-sm:flex-col max-sm:space-x-0"
            style={{ color: secondary }}>
                <a href="https://www.linkedin.com/in/mariaeugeniaciceri/" target="_blank" rel="noopener noreferrer"
                    className="hover:text-gray-700 hover:scale-105 transition-all duration-300 max-sm:py-2"
                >
                    <i className="fa-brands fa-linkedin-in"></i> Linkedin
                </a>
                <a href="https://github.com/mariaciceri" target="_blank" rel="noopener noreferrer"
                    className="hover:text-gray-700 hover:scale-105 transition-all duration-300 max-sm:py-2"
                >
                    <i className="fa-brands fa-github"></i> Github
                </a>
                { language === 'en' ?
                    <a href="../../assets/englishcv.pdf" download 
                        className="hover:text-gray-700 hover:scale-105 transition-all duration-300 max-sm:py-2">
                    <i className="fa-solid fa-download"></i> Download my CV
                </a>
                :
                    <a href="../../assets/swedishcv.pdf" download 
                        className="hover:text-gray-700 hover:scale-105 transition-all duration-300 max-sm:py-2">
                    <i className="fa-solid fa-download"></i> Download min CV
                </a>
                }
            </div>
            <a href="../../assets/recommendationLetter.pdf" target="_blank" rel="noopener noreferrer"
                className="hover:text-gray-900 hover:scale-105 transition-all duration-300 max-sm:py-2">
                <i className="fa-brands fa-readme"></i>
                {language === 'en' ? ' Read recommendation' : ' Läs rekommendationen'}
            </a>
        </div>
    )
}

export default Contact;