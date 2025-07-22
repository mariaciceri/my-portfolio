import { useState } from 'react';
import { useLanguage } from "../../context/LanguageContext";
import { content } from '../../data/translations';
import ProjectPopup from '../ProjectPopup';

function Projects() {
    const { language } = useLanguage();
    const firstProjects = content[language].projects.slice(0, 6) || [];
    const lastProjects = content[language].projects.slice(6,) || [];

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    type Project = {
        name: string;
        description: string;
        link: string;
        github: string;
        tech: string;
    }

    return (
        <div className="grid grid-cols-3 gap-2 p-4 flex shadow-xl rounded-2xl">
            <h3 className="col-span-3 tracking-widest font-cormorant text-3xl">
                Personal Projects
            </h3>
            {firstProjects.map((project, index) => (
                <div 
                key={index} // change color of hover
                className="relative group overflow-hidden bg-white py-2 min-h-20 rounded shadow m-1 content-center cursor-pointer"
                onClick={() => setSelectedProject(project)}
                >
                    <h4 className='text-gray-600'>{project.name}</h4>
                    <div className='absolute opacity-90 inset-0 bg-black translate-y-full group-hover:translate-y-0 
                        transition-transform duration-[400ms] text-slate-100 content-center py-4 min-h-20 rounded'>
                        {project.name}
                    </div>
                </div>
            ))}
            <div className="col-span-3 flex justify-center gap-4">
                {lastProjects.map((project, index) => (
                    <div
                    key={index}
                    className="relative group overflow-hidden bg-white py-4 min-h-20 rounded shadow m-1 content-center 
                    flex-grow max-w-[280px] cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                    >
                        <h4 className='text-gray-600'>{project.name}</h4>
                        <div className='absolute opacity-90 inset-0 bg-black translate-y-full group-hover:translate-y-0 
                        transition-transform duration-[400ms] text-slate-100 content-center py-4 min-h-20 rounded'>
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