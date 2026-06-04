import ProjectCard  from "./ProjectCard.jsx";
import ProjectsData from "../data/ProjectsData.js"
import {Link} from "react-router-dom"

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
            <div className="py-12 flex items-center mx-auto">
                <Link to="/projects" className="font-dm-sans border border-[#444] px-7 py-3 rounded-full text-sm text-white hover:bg-white hover:text-black active:scale-95 transition-all duration-200">View All Projects</Link>
            </div>

        </div>
    )
}

export default Projects
