import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { useTheme } from "../context/ThemeContext";

function ProjectCard({ project, detailed }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { theme } = useTheme();
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={` ${
        hovered
          ? theme === "dark"
            ? "p-7 cursor-pointer transition-colors duration-200 border border-[#222] bg-[#161616] rounded-2xl"
            : "p-7 cursor-pointer transition-colors duration-200 border border-[#e5e5e5] bg-[#f5f5f5] rounded-2xl"
          : theme === "dark"
            ? "p-7 cursor-pointer transition-colors duration-200 border bg-[#111] border-[#222] rounded-2xl"
            : "p-7 cursor-pointer transition-colors duration-200 border bg-[#ffffff] border-[#e5e5e5] rounded-2xl"
      }`}
    >
      <div
        className={`text-sm ${theme === "dark" ? "text-[#444]" : "text-[#aaa]"} font-syne mb-4`}
      >
        0{project.number}
      </div>
      <div
        className={`font-syne text-lg ${theme === "dark" ? "text-white" : "text-gray-800"} mb-2`}
      >
        {project.title}
      </div>
      <div className="text-sm text-gray-500 mb-5 leading-relaxed">
        {project.desc}
      </div>
      <hr
        className={`${theme === "dark" ? "border-[#222" : "border-[#e5e5e5]"} my-4`}
      />
      {detailed && (
        <div>
          <h1 className="text-xs text-[#c8f135] tracking-[2px] uppercase mb-2">
            Overview
          </h1>
          {!expanded ? (
            <div>
              <div className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                {project.summary}
              </div>
              <button
                className="text-xs text-[#c8f135] mt-1 cursor-pointer hover:underline"
                onClick={() => setExpanded(!expanded)}
              >
                Read more
              </button>
            </div>
          ) : (
            <div>
              <div className="text-sm text-gray-400 leading-relaxed">
                {project.summary}
              </div>
              <button
                className="text-xs text-[#c8f135] mt-1 cursor-pointer"
                onClick={() => setExpanded(!expanded)}
              >
                Read less
              </button>
            </div>
          )}
        </div>
      )}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            className={`text-xs px-3 py-1 rounded-full border ${theme === "dark" ? "bg-[#1a1a1a]  border-[#333]" : "bg-[#f0f0f0] border-[#e0e0e0]"} text-gray-500 mt-4`}
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-8">
        <a
          className={`text-sm flex gap-2 items-center rounded-3xl ${theme === "dark" ? "text-[#a0d4ff] hover:text-[#7bc4ff] hover:bg-zinc-800" : "text-[#1d6fa8] hover:text-[#105aa8] hover:bg-gray-200"} px-2 py-1`}
          href={project.githubURL}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> Source Code
        </a>
        <a
          className="text-sm text-[#c8f135] flex gap-2 items-center rounded-3xl hover:bg-[#c8f135]/17 px-2 py-1"
          href={project.liveURL}
          target="_blank"
          rel="noreferrer"
        >
          <CiGlobe />
          Live
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
