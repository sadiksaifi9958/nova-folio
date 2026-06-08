import ProjectCard from "./ProjectCard.jsx";
import ProjectsData from "../constants/ProjectsData.js";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

function Projects() {
  const { theme } = useTheme();
  return (
    <div className="max-w-4xl mx-auto px-8 py-24 scroll-m-40" id="projects">
      <div className="text-xs text-[#c8f135] tracking-[3px] uppercase mb-4">
        Projects
      </div>
      <h1
        className={`text-4xl md:text-5xl font-syne mb-12 leading-tight ${theme === "dark" ? "text-white" : "text-gray-800"}`}
      >
        Things I've built.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ProjectsData.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
      <div className="py-12 flex items-center mx-auto">
        <Link
          to="/projects"
          className={`font-dm-sans border border-[#444] px-7 py-3 rounded-full text-sm hover:text-black active:scale-95 transition-all duration-200 flex items-center gap-2 bg-transparent ${theme === "dark" ? "text-white  hover:bg-white hover:text-gray-800" : "text-gray-800 hover:bg-gray-800 hover:text-white border-gray-300"}`}
        >
          View All Projects
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default Projects;
