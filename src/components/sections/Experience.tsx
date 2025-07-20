import { useLanguage } from "../../context/LanguageContext";
import { content } from '../../data/translations';

function Experience() {
    const { language } = useLanguage();
    const exp = content[language].exp;

    return (
        <div className="bg-red-100">
            <h3 className="text-2xl font-semibold text-gray-900 tracking-widest mb-4">
                {language === 'sv' ? 'Arbetslivesrfarenhet' : 'Work Experience'}
            </h3>

            {exp.map((item, index) => {
                return (
                    // MAKE IT EXPANDABLE
                    <div key={index} className="mb-2 p-4 rounded-lg shadow-md bg-white">
                        <h4 className="font-semibold text-gray-800">{item.company}</h4>
                        <h5 className="text-gray-600">{item.position}</h5>
                        <p className="mt-2 text-gray-700 text-xs">{item.description}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Experience;