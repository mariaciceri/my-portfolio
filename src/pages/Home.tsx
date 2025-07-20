import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Experience from '../components/sections/Experience'
import Extras from '../components/sections/Extras'
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
        viewport: { once: true, amount: 0.5 }
    };
    
    return (
        <AnimatePresence>
            <div className="bg-gray-50 py-24 sm:py-32">
                <motion.div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8"
                    key={language + '-home'}
                    exit={{ opacity: 0, y: 10 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    >
                    <h2 className={`text-center text-4xl tracking-tighter font-semibold ${textColor}`}>
                        {greeting}
                    </h2>
                    <p className="mx-auto mt-2 max-w-lg tracking-tighter text-center text-xl font-semibold tracking-tight text-balance text-gray-950">
                    {description}
                    </p>
                    <div className="mt-10 flex justify-center">
                        {/* ADD A NICER IMAGE EFFECT */}
                        <motion.img
                            key={image}
                            src={image}
                            alt="Maria"
                            className="h-48 w-48 rounded-full object-cover shadow-lg"
                        />
                    </div>
                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2">
                        <motion.div {...fadeIn} className='row-span-2'>
                            <About />
                        </motion.div>
                        <motion.div {...fadeIn} className='flex'>
                            <Experience />
                        </motion.div>
                        <motion.div {...fadeIn} className='flex'>
                            <Extras />
                        </motion.div>
                    </div>
                    <div className="mt-10">
                        <motion.div {...fadeIn}>
                            <Projects />
                        </motion.div>
                        <motion.div {...fadeIn}>
                            <Contact />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default Home