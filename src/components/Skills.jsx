import SkillChip from "../components/SkillChip.jsx";
import skillsGroups from "../constants/SkillsData.js";
import { useTheme } from "../context/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  return (
    <div className="max-w-4xl mx-auto px-8 py-24 scroll-m-30" id="skills">
      <div className="text-xs text-[#c8f135] tracking-[3px] uppercase mb-4">
        Skills
      </div>
      <h1
        className={`text-5xl font-syne mb-12 leading-tight ${theme === "dark" ? "text-white" : "text-gray-800"}`}
      >
        What I work with.
      </h1>
      <div className="flex flex-col gap-8">
        {skillsGroups.map((group) => (
          <div>
            <div className="text-xs text-gray-500 tracking-[1.5px] uppercase mb-3">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.chips.map((chip) => (
                <SkillChip
                  key={chip}
                  skill={chip}
                  highlighted={group.highlight.includes(chip)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
