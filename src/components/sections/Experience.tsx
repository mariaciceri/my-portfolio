import { useLanguage } from "../../context/LanguageContext";
import { useColor } from "../../context/ColorContext";
import { content } from '../../data/translations';
import { colors } from '../../data/colors';

function Experience() {
    const { language } = useLanguage();
    const exp = content[language].exp;
    const header = content[language].header.navigator[1];
    const { colorScheme } = useColor();
    const { primary, secondary, lightBackground } = colors[colorScheme];


    return (
        <div className="shadow-xl rounded-2xl p-8 lg:h-full max-sm:p-4"
        style={{ backgroundColor: lightBackground, color: secondary }}
        id={ header}
        >
            <h3 className="break-all whitespace-pre-wrap text-3xl font-cormorant font-semibold tracking-widest mb-4 max-sm:text-4xl"
            style={{ color: primary }}>
                {language === 'sv' ? 'Arbetslivserfarenhet' : 'Work Experience'}
            </h3>

            {exp.map((item, index) => {
                return (
                    <div key={index} className="mb-4 p-4 rounded-lg shadow-md bg-white max-sm:p-3">
                        <h5 className="max-sm:text-lg" style={{ color: secondary }}>{item.position}</h5>
                        <p className="flex items-center justify-around max-sm:flex-col max-sm:items-start max-sm:gap-1">
                            <h4 className="font-cormorant max-sm:text-lg">{item.company}</h4>
                            <p className="font-cormorant max-sm:text-lg">{item.date}</p>
                        </p>
                        <hr />
                        <p className="mt-2 text-xs max-sm:text-[18px]">{item.description}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Experience;