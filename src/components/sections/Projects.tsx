
function Projects() {
    return (
        <div className="grid grid-cols-3 gap-2 bg-red-700 flex justify-center">
            <div className="col-span-3 bg-yellow-300">Test Projects</div>
            <div className="bg-yellow-100 m-1">
                Project 1
            </div>
            <div className="bg-yellow-100 m-1">
                Project 2
            </div>
            <div className="bg-yellow-100 m-1">
                Project 3
            </div>
            <div className="bg-yellow-100 m-1">
                Project 4
            </div>
            <div className="bg-yellow-100 m-1">
                Project 5
            </div>
            <div className="bg-yellow-100 m-1">
                Project 6
            </div>
            <div className="col-span-3 flex justify-center gap-4">
                <div className="bg-yellow-100 m-1 flex-grow max-w-[280px]">
                    Project 7
                </div>
                <div className="bg-yellow-100 m-1 flex-grow max-w-[280px]">
                    Project 8
                </div>
            </div>
        </div>
    )
}

export default Projects;