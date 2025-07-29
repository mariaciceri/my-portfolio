import React from 'react';
import { useColor } from "../context/ColorContext";
import { colors } from '../data/colors';

type ProjectPopupProps = {
    project: {
        name: string;
        description: string;
        link: string;
        github: string;
        tech: string;
    };
    onClose: () => void;
}

function ProjectPopup({ project, onClose }: ProjectPopupProps) {
    const { colorScheme } = useColor();
    const { secondary, popupBackground } = colors[colorScheme];

    const popupRef = React.useRef<HTMLDivElement>(null);

    function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
        const target = e.target as Node;
        // if the click is outside the popup content, close the popup
        if (popupRef.current && !popupRef.current.contains(target)) {
            onClose();
        }
    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleOverlayClick}>
                <div className="relative p-12 rounded text-black shadow-lg max-w-md w-full"
                ref={popupRef}
                style={{ background: popupBackground }}>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-2xl hover:rotate-180 transition-transform duration-200 absolute top-3 right-4"
                        aria-label='Close Popup'
                    >
                        &times;
                    </button>
                    <h2 className="text-2xl font-semibold mb-4 font-cormorant">{project.name}</h2>
                    <p className="mb-4">{project.description}</p>
                    <p className="mb-4 font-cormorant text-xl">Technologies:</p>
                    <p className="my-4">
                        {project.tech.split(", ").map((tech, index) => {
                            return (
                                <span key={index} className="inline-block m-1 rounded px-2 py-1 text-sm"
                                style={{ background: secondary, color: popupBackground }}>
                                    {tech}
                                </span>
                            );
                        })}
                    </p>
                    <div className="flex space-x-[50px] justify-self-center text-xl">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" 
                            className="text-black hover:text-gray-700 hover:scale-105 transition-all duration-300">
                            <i className="fa-solid fa-globe"></i> Live Page
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" 
                            className="text-black hover:text-gray-700 hover:scale-105 transition-all duration-300">
                            <i className="fa-brands fa-github"></i> Repo
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPopup;