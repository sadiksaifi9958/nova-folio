import ProjectCard  from "./ProjectCard.jsx";
import ProjectsData from "../data/ProjectsData.js"

function Projects() {
    return (
        <div className="max-w-4xl mx-auto px-8 py-24">
            <div className="text-xs text-[#c8f135] tracking-[3px] uppercase mb-4">Projects</div>
            <h1 className="text-5xl font-syne text-white mb-12 leading-tight">Things I've built.</h1>
            <div className="grid grid-cols-2 gap-4">
                {ProjectsData.map((project) => (
                    <ProjectCard
                        project={project}
                        key={project.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects
