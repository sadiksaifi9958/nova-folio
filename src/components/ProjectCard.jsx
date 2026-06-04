import {useState} from "react"
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

function ProjectCard({project, detailed}) {
    const [hovered, setHovered] = useState(false)
    return (
        <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="p-7 cursor-pointer transition-colors duration-200 border border-[#222] rounded-2xl"
        style={{background: hovered ?  "#161616":  "#111"}}>
            <div className="text-xs text-[#444] font-syne mb-4">{project.number}</div>
            <div className="font-syne text-lg text-white mb-2">{project.title}</div>
            <div className="text-sm text-gray-500 mb-5 leading-relaxed">{project.desc}</div>
            <hr className="border-[#222] my-4" />
            {
                detailed ? <div>
                    <h1 className="text-xs text-[#c8f135] tracking-[2px] uppercase mb-2">Overview</h1>
                    <div className="text-sm text-gray-400 leading-relaxed">{project.summary}</div>
                </div> : null
            }
                        <div className="flex flex-wrap gap-2 mb-5">
                {
                    project.tags.map((tag) =>(
                        <span className="text-xs px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#333] text-gray-500"
                        key={project.number}>{tag}</span>
                    ))
                }
            </div>
            <div className="flex gap-3">
                <a
                    className="text-sm text-[#c8f135] flex gap-2 items-center"
                    href={project.liveURL}
                    target="_blank"
                    rel="noreferrer"
                ><CiGlobe /> ↗ Live</a>
                <a
                    className="text-sm text-[#a0d4ff] flex gap-2 items-center"
                    href={project.githubURL}
                    target="_blank"
                    rel="noreferrer"
                ><FaGithub /> Source Code</a>
            </div>
        </div>
    )
}

export default ProjectCard
