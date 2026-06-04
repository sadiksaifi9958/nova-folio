import {useEffect} from "react";
import {Link} from "react-router-dom";
import Projects from "../data/ProjectsData.js"
import ProjectCard from "../components/ProjectCard.jsx";

const ProjectsPage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    return(
        <div className="bg-[#0a0a0a] min-h-screen px-8 py-12">
            <div className="mx-auto max-w-3xl">
                <Link
                    to="/"
                    className="text-gray-400 text-sm mb-12 inline-block hover:text-white"
                >Back To Home</Link>
                <h1 className="text-5xl font-syne text-white mb-12 leading-tight">All Projects</h1>
                <div className="flex flex-col gap-12">
                    {
                        Projects.map((project) =>(
                            <ProjectCard
                                project={project}
                                key={project.number}
                                detailed={true}/>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default ProjectsPage