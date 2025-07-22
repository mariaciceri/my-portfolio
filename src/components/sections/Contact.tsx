import { useLanguage } from "../../context/LanguageContext";
import { content } from '../../data/translations';

function Contact() {
    const { language } = useLanguage();
    const contactInfo = content[language].contact || "Something went wrong, sorry about that! Please contact me here <mariafacchin00@hotmail.com> if you can't see this text.";
    
    return (
        <div className="shadow-xl rounded-2xl p-8 text-gray-600 col-span-2 mt-5">
            <div className="font-cormorant text-2xl pb-4">
                { contactInfo.message }
            </div>
            <div className="py-4">
                <a href="mailto:mariafacchin00@hotmail.com" 
                className="inline-block hover:text-sky-600 hover:scale-105 transition-all duration-300">{ contactInfo.email }</a>
            </div>
            <div className="flex space-x-[100px] justify-self-center py-4">
                <a href="https://www.linkedin.com/in/mariaeugeniaciceri/" target="_blank" rel="noopener noreferrer"
                className="hover:text-sky-600 hover:scale-105 transition-all duration-300"
                >
                    <i className="fa-brands fa-linkedin-in"></i> Linkedin
                </a>
                <a href="https://github.com/mariaciceri" target="_blank" rel="noopener noreferrer"
                className="hover:text-sky-600 hover:scale-105 transition-all duration-300"
                >
                    <i className="fa-brands fa-github"></i> Github
                </a>
                { language === 'en' ?
                    <a href="../../assets/englishcv.pdf" download 
                    className="hover:text-sky-600 hover:scale-105 transition-all duration-300">
                    <i className="fa-solid fa-download"></i> Download my CV
                </a>
                :
                    <a href="../../assets/swedishcv.pdf" download 
                    className="hover:text-sky-600 hover:scale-105 transition-all duration-300">
                    <i className="fa-solid fa-download"></i> Download min CV
                </a>
                }
            </div>
        </div>
    )
}

export default Contact;