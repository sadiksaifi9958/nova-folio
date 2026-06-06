import { useTheme } from "../context/ThemeContext";
function SkillChip({ highlighted, skill }) {
  const { theme } = useTheme();
  return (
    <span
      className={
        highlighted
          ? theme === "dark"
            ? "bg-[#121200] border border-[#3a3a1a] text-[#c8f135] px-4 py-2 rounded-lg text-sm"
            : "bg-gray-100 border border-gray-300 text-[#c8f135] px-4 py-2 rounded-lg text-sm"
          : theme === "dark"
            ? "bg-[#111] border border-[#2a2a2a] text-gray-400 px-4 py-2 rounded-lg text-sm"
            : "bg-gray-100 border border-gray-300 text-gray-400 px-4 py-2 rounded-lg text-sm"
      }
    >
      {skill}
    </span>
  );
}

export default SkillChip;
