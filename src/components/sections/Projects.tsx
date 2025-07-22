import { useEffect, useState } from 'react';
import { useLanguage } from "../../context/LanguageContext";
import { useColor } from '../../context/ColorContext';
import { content } from '../../data/translations';
import { colors } from '../../data/colors';
import ProjectPopup from '../ProjectPopup';

function Projects() {
    const { language } = useLanguage();
    const firstProjects = content[language].projects.slice(0, 6) || [];
    const lastProjects = content[language].projects.slice(6,) || [];
    const { colorScheme } = useColor();
    const { primary, secondary, lightBackground } = colors[colorScheme];

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    type Project = {
        name: string;
        description: string;
        link: string;
        github: string;
        tech: string;
    }

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    })

    return (
        <div className="grid grid-cols-3 gap-2 p-4 shadow-xl rounded-2xl
        max-sm:grid-cols-1 max-sm:gap-4 max-sm:p-2"
        style={{ backgroundColor: primary, color: lightBackground }}>
            <h3 className="col-span-3 tracking-widest font-cormorant text-4xl max-sm:col-span-1">
                Personal Projects
            </h3>
            {firstProjects.map((project, index) => (
                <div 
                key={index}
                className="relative group overflow-hidden bg-white py-2 min-h-20 rounded shadow m-1
                content-center cursor-pointer max-sm:w-[90%]"
                style={{ backgroundColor: lightBackground, color: secondary }}
                onClick={() => setSelectedProject(project)}
                >
                    <h4 className='max-sm:text-lg max-sm:px-2'>{project.name}</h4>
                    <div className='absolute inset-0 translate-y-full group-hover:translate-y-0 
                    transition-transform duration-[400ms] content-center py-4 min-h-20 rounded'
                    style={{ backgroundColor: secondary, color: lightBackground }}>
                        {project.name}
                    </div>
                </div>
            ))}
            <div className="col-span-3 flex justify-center gap-4 max-sm:col-span-1 max-sm:flex-col">
                {lastProjects.map((project, index) => (
                    <div
                    key={index}
                    className="relative group overflow-hidden bg-white py-4 min-h-20 rounded shadow m-1 content-center 
                    flex-grow max-w-[280px] cursor-pointer max-sm:w-[90%]"
                    style={{ backgroundColor: lightBackground, color: secondary }}
                    onClick={() => setSelectedProject(project)}
                    >
                        <h4 className='max-sm:text-lg max-sm:px-2'>{project.name}</h4>
                        <div className='absolute inset-0 translate-y-full group-hover:translate-y-0 
                        transition-transform duration-[400ms] content-center py-4 min-h-20 rounded'
                        style={{ backgroundColor: secondary, color: lightBackground }}>
                            {project.name}
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <ProjectPopup project={selectedProject} onClose={() => setSelectedProject(null)} />
                
            )}
        </div>
    );
}

export default Projects;