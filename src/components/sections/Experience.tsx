import { useLanguage } from "../../context/LanguageContext";
import { content } from '../../data/translations';

function Experience() {
    const { language } = useLanguage();
    const exp = content[language].exp;

    return (
        <div className="shadow-xl rounded-2xl p-8 lg:h-full">
            <h3 className="text-3xl font-cormorant font-semibold tracking-widest mb-4">
                {language === 'sv' ? 'Arbetslivesrfarenhet' : 'Work Experience'}
            </h3>

            {exp.map((item, index) => {
                return (
                    <div key={index} className="mb-4 p-4 rounded-lg shadow-md bg-white">
                        <h4 className="font-cormorant text-gray-600">{item.company}</h4>
                        <h5 className="text-gray-600">{item.position}</h5>
                        <p className="text-gray-500 text-xs">{item.date}</p>
                        <p className="mt-2 text-gray-700 text-xs">{item.description}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Experience;