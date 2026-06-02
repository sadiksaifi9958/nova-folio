import {useState} from "react"

function ProjectCard({project}) {

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
                    className="text-sm text-[#a0d4ff]"
                    href={project.githubURL}
                    target="_blank"
                    rel="noreferrer"
                >Source Code</a>
                <a
                    className="text-sm text-[#c8f135]"
                    href={project.liveURL}
                    target="_blank"
                    rel="noreferrer"
                >↗ Live</a>
            </div>
        </div>
    )
}

export default ProjectCard
