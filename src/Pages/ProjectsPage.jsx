import { useEffect } from "react";
import { Link } from "react-router-dom";
import Projects from "../constants/ProjectsData.js";
import ProjectCard from "../components/ProjectCard.jsx";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

const ProjectsPage = () => {
  const { theme } = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`${theme === "dark" ? "bg-[#0a0a0a]" : "#ffffff"}  min-h-screen px-8 py-12`}
    >
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className={` text-sm mb-12 flex items-center gap-2 ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-400 hover:text-gray-800"}`}
        >
          <FaArrowLeftLong /> Back To Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-syne text-white mb-12 leading-tight">
          All Projects
        </h1>
        <div className="flex flex-col gap-12">
          {Projects.map((project) => (
            <ProjectCard
              project={project}
              key={project.number}
              detailed={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
