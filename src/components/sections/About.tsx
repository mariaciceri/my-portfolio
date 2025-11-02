import { useLanguage } from "../../context/LanguageContext";
import { useColor } from '../../context/ColorContext';
import { content } from '../../data/translations';
import { colors } from '../../data/colors';

function About() {
    const { language } = useLanguage();
    const about = content[language].about || "Something went wront, sorry about that! Please contact me if you can't see this text.";;
    const header = content[language].header.navigator[0];
    const { colorScheme } = useColor();
    const { primary, secondary, lightBackground } = colors[colorScheme];

    return (
        <div className="shadow-xl rounded-2xl p-8 lg:h-full max-sm:p-4 max-sm:text-xl items-center"
        style={{ backgroundColor: lightBackground, color: primary }}
        id={ header }
        >
            <h3 className="text-3xl font-cormorant font-semibold tracking-widest mb-4 max-sm:text-4xl">
                {language === 'sv' ? 'Om mig' : 'About Me'}
            </h3>

            <div className="flex flex-col justify-start sm:p-2">
                {about.split('\n').map((line, index) => (
                    <p key={index} className="tracking-tight p-1" style={{ color: secondary }}>
                        {line}
                    </p>
                ))}
            </div>
            <img src="assets/bunny.png" alt="Bunny working on a laptop" className="h-auto w-32 mx-auto" />
        </div>
    )
}

export default About;
