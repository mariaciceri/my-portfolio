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
        // HOVER EFFECTS
        <div className="grid grid-cols-3 gap-2 bg-red-700 flex justify-center">
            <h3 className="col-span-3 bg-yellow-300 tracking-widest text-2xl">Personal Projects</h3>
            {firstProjects.map((project, index) => (
                <div 
                key={index}
                className="bg-white p-4 rounded shadow m-1"
                onClick={() => setSelectedProject(project)}
                >
                    <h4 className="text-lg font-semibold">{project.name}</h4>
                </div>
            ))}
            <div className="col-span-3 flex justify-center gap-4">
                {lastProjects.map((project, index) => (
                    <div
                    key={index}
                    className="bg-white p-4 rounded shadow m-1 flex-grow max-w-[280px]"
                    onClick={() => setSelectedProject(project)}
                    >
                        <h4 className="text-lg font-semibold">{project.name}</h4>
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