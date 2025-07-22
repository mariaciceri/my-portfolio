import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import { content } from '../data/translations'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'


function Home() {
    const { language } = useLanguage();
    const { greeting, description, image } = content[language];
    const textColor = language === 'sv' ? 'text-amber-300' : 'text-red-600';
    
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
        viewport: { once: false, amount: 0.5 }
    };
    
    return (
        <AnimatePresence>
            <div className="bg-stone-50 py-20 rounded-2xl">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <motion.div className='flex m-6'
                    key={language + '-home'}
                    exit={{ opacity: 0, y: 20 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    >
                        <div>
                            <h2 className={`font-cormorant text-center text-4xl tracking-tighter font-semibold ${textColor}`}>
                                {greeting}
                            </h2>
                            <p className="mx-auto mt-2 max-w-lg tracking-tighter text-center text-xl font-semibold tracking-tight text-balance text-gray-950">
                            {description}
                            </p>
                        </div>
                        <div className="flex justify-center">
                            {/* ADD A NICER IMAGE EFFECT */}
                            <motion.img
                            key={image}
                            src={image}
                            alt="Maria"
                            className="h-48 w-48 rounded-full object-cover shadow-lg"
                            />
                        </div>
                    </motion.div>
                    <motion.div 
                    key={`${language}-sections`}
                    initial = {{ opacity: 0, y: 30 }}
                    exit = {{ opacity: 1, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition = {{ duration: 0.8 }}
                    className="mt-20 grid gap-4 sm:mt-16 lg:grid-cols-2 items-stretch"
                    >
                        <div className='h-full flex flex-col'>
                            <About />
                        </div>
                        <motion.div 
                        {...(window.innerWidth < 1024 ? fadeIn : {})}
                        key={`${language}-experience`}
                        className='h-full flex flex-col'
                        >
                            <Experience />
                        </motion.div>
                    </motion.div>
                    <div className="mt-10">
                        <motion.div 
                        {...fadeIn}
                        key={`${language}-projects`}
                        >
                            <Projects />
                        </motion.div>
                        <motion.div {...fadeIn} key={`${language}-contact`}>
                            <Contact />
                        </motion.div>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    )
}

export default Home