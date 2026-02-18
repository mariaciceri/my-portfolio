import { useLanguage } from "../../context/LanguageContext";
import { useColor } from "../../context/ColorContext";
import { content } from '../../data/translations';
import { colors } from '../../data/colors';

function Experience() {
    const { language } = useLanguage();
    const exp = content[language].exp;
    const header = content[language].header.navigator[1];
    const { colorScheme } = useColor();
    const { primary, secondary, darker, lightBackground } = colors[colorScheme];


    return (
        <div className="shadow-xl rounded-2xl p-8 lg:h-full max-sm:p-4"
        style={{ backgroundColor: lightBackground, color: secondary }}
        id={ header}
        >
            <h3 className="break-all whitespace-pre-wrap text-3xl 
            font-cormorant font-semibold tracking-widest mb-4"
            style={{ color: primary }}>
                {language === 'sv' ? 'Arbetslivserfarenhet' : 'Work Experience'}
            </h3>

            {exp.map((item, index) => {
                return (
                    <div key={index} className="flex justify-between items-stretch max-sm:block">
                        <div className="mb-4 mr-2 p-4 rounded-lg shadow-md bg-white max-sm:p-3">
                            <h5 className="max-sm:text-lg font-cormorant font-semibold text-2xl" style={{ color: secondary }}>{item.position}</h5>
                            <div className="flex items-center justify-around text-lg
                             max-sm:flex-col max-sm:items-start max-sm:gap-1">
                                <h4 className="font-cormorant max-sm:text-lg">{item.company}</h4>
                                <p className="font-cormorant max-sm:text-lg">{item.date}</p>
                                <p className="font-cormorant max-sm:text-lg">{item.city}</p>
                            </div>
                            <hr />
                            <p className="mt-2 max-sm:text-[18px]" style={{ color: darker }}>{item.description}</p>
                        </div>
                        
                        <div className="mb-4 p-4 rounded-lg shadow-md bg-white w-[180px] 
                            shrink-0 self-stretch flex items-center justify-center
                            max-sm:p-3 hidden sm:block">
                            <div className="flex flex-wrap gap-2">
                                {item.icons.map((icon, iconIndex) => (
                                    <img 
                                        key={iconIndex} 
                                        src={`assets/${icon}.png`}
                                        alt={`${icon} icon`}
                                        className="h-auto w-12 mx-auto"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Experience;