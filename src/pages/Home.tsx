import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Achievements from '../components/sections/Achievements'
import { content } from '../data/translations'
import { colors } from '../data/colors'
import { motion, AnimatePresence } from 'framer-motion'
import { useColor } from '../context/ColorContext'
import { useLanguage } from '../context/LanguageContext'

function Home() {
    const { language } = useLanguage();
    const { greeting, description, image } = content[language];
    const { colorScheme } = useColor();
    const { primary, secondary } = colors[colorScheme];

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
    };
    
    return (
        <AnimatePresence>
            <div className="py-20 rounded-2xl shadow-xl bg-stone-200">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <motion.div className='flex m-6'
                    key={language + '-home'}
                    exit={{ opacity: 0, y: 20 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    >
                        <div className='flex justify-between items-center w-full max-md:block'>
                            <div>
                                <h2 className="font-cormorant text-center 
                                text-4xl tracking-tighter font-semibold"
                                style={{ color: primary  }}>
                                    {greeting}
                                </h2>
                                <p className="mx-auto mt-2 max-w-lg tracking-tighter 
                                text-center text-xl leading-8"
                                style={{ color: secondary }}>
                                    {description}
                                </p>
                            </div>
                            <div>
                                <motion.img
                                key={image}
                                src={image}
                                alt="Maria"
                                className="h-48 w-48 rounded-3xl object-cover
                                shadow-2xl border border-white/30 mr-6
                                max-md:mx-auto max-md:mt-6"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        {...fadeIn} 
                        key={`${language}-achievements`}
                        className='mb-4'    
                    >
                        <Achievements />
                    </motion.div>
                    
                    <motion.div 
                    {...fadeIn}
                    key={`${language}-experience`}
                    className='h-full flex flex-col mb-4'
                    >
                        <Experience />
                    </motion.div>


                    <div className="grid lg:gap-4 gap-2 lg:grid-cols-2 mt-2 items-stretch">
                        <div className='flex flex-col h-full'>
                            <motion.div {...fadeIn} key={`${language}-projects`} className="flex-1 flex">
                                <Projects />
                            </motion.div>
                            <motion.div {...fadeIn} key={`${language}-contact`}>
                                <Contact />
                            </motion.div>
                        </div>
                        <div className='flex flex-col h-full'>
                            <motion.div {...fadeIn} key={`${language}-about`}
                                className="flex-1">
                                <About />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    )
}

export default Home