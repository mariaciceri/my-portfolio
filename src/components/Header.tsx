import { useState } from 'react';
import { useLanguage } from "../context/LanguageContext";
import { useColor } from '../context/ColorContext';
import { content } from '../data/translations';
import { colors } from '../data/colors';
import { motion, AnimatePresence, useScroll, useTransform, } from 'framer-motion'


function Header({children}: { children: React.ReactNode }) {
    const { language } = useLanguage();
    const header = content[language].header;
    const { colorScheme } = useColor();
    const { primary, lightBackground } = colors[colorScheme];

    const { scrollY } = useScroll();
    const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", primary]);
    const textColor = useTransform(scrollY, [0, 100], [primary, lightBackground]);

    const path = language === 'en' ? '../../assets/englishcv.pdf' : '../../assets/swedishcv.pdf';

    const [isOpen, setIsOpen] = useState(false);
    const isMobile = window.innerWidth < 768;

    return (
        <AnimatePresence>
            <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
                <motion.header
                    className="w-full max-w-screen-xl mx-auto px-8 py-2 rounded-2xl font-cormorant flex justify-between items-center"
                    style={{ backgroundColor, color: textColor }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <h1 className="text-3xl max-sm:text-2xl">{header.title}</h1>

                    <div className="flex items-center gap-4 relative">
                        {/* Hamburger Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            data-collapse-toggle="navbar-default"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 text-sm rounded-lg md:hidden"
                            aria-controls="navbar-default"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>

                        {/* Navigation List */}
                        <div className={`${isOpen ? "block" : "hidden"} md:block`} id="navbar-default">
                            <ul className="absolute flex flex-col md:flex-row md:space-x-4 left-0 top-16 md:top-0 md:static md:w-auto bg-white md:bg-transparent rounded-lg md:rounded-none shadow-md md:shadow-none p-4 md:p-0 space-y-2 md:space-y-0"
                                style={isMobile ? { backgroundColor: lightBackground, color: primary} : {}}>
                                {header.navigator.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={'#'+item}
                                            className="block py-2 px-3 md:p-0 md:bg-transparent hover:text-gray-900"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                                <li key={'download'}>
                                    <a
                                        href={path} download
                                        className="block py-2 px-3 md:p-0 md:bg-transparent hover:text-gray-900"
                                    >
                                        <i className="fa-solid fa-download"></i> CV
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {children}
                    </div>
                </motion.header>
            </div>
        </AnimatePresence>
    );
}

export default Header;