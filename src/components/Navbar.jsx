import { useScrollPosition } from "../hooks/useScrollPosition.js";
import { useTheme } from "../context/ThemeContext.jsx";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const pages = ["About", "Projects", "Skills", "Contact"];

  const [menu, setMenu] = useState(false);
  const scrollY = useScrollPosition();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className="sticky top-0 z-50 border-b border-[#1a1a1a]"
      style={{
        background:
          scrollY > 50
            ? theme === "dark"
              ? "#0a0a0a"
              : "#f9f9f6"
            : "transparent",
        borderBottom:
          scrollY > 50
            ? theme === "dark"
              ? "0.5px solid #222"
              : "0.5px solid #e5e5e5"
            : "none",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="flex items-center justify-between h-16 md:h-20 px-6 md:px-12">
        <div
          className={`text-2xl md:text-4xl font-syne ${theme === "dark" ? "text-white" : "text-gray-800"}`}
        >
          Nova
          <span className="text-[#c8f135]">Folio</span>
        </div>

        <div className=" gap-8 items-center hidden md:flex">
          {pages.map((link) => {
            return (
              <a
                key={link}
                className={` ${theme === "dark" ? "text-white" : "text-gray-800"} text-md font-semibold hover:text-[#c8f135] transition-colors`}
                href={`#${link.toLowerCase()}`}
              >
                {link}
              </a>
            );
          })}
        </div>
        <button
          onClick={toggleTheme}
          className={` text-2xl cursor-pointer ${theme === "dark" ? "text-white" : "text-gray-800"}`}
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
        <button
          onClick={() => setMenu(!menu)}
          className={` text-2xl cursor-pointer md:hidden ${theme === "dark" ? "text-white" : "text-gray-800"}`}
        >
          {menu ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {menu && (
        <div
          className={`absolute left-0 right-0 flex flex-col gap-4 px-4 pb-4 pt-2 border-t  md:hidden ${theme === "dark" ? "bg-[#0a0a0a] border-[#222]" : "bg-[#ffffff] border-gray-300"}`}
        >
          {pages.map((link) => {
            return (
              <a
                key={link}
                className={`text-md font-semibold hover:text-[#c8f135] transition-colors ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                onClick={() => setTimeout(() => setMenu(false), 100)}
                href={`#${link.toLowerCase()}`}
              >
                {link}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
