
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
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                    <h2 className="text-xl font-semibold mb-4">{project.name}</h2>
                    <p className="mb-4">{project.description}</p>
                    <p className="mb-4"><strong>Technologies:</strong> {project.tech}</p>
                    <div className="flex justify-between">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View on GitHub</a>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProjectPopup;