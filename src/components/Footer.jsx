import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`border-t py-8 text-center text-sm text-gray-400 ${theme === "dark" ? "border-[#222]" : "border-gray-300"}`}
    >
      Built by Sadik · NovaFolio · 2026
    </footer>
  );
}

export default Footer;
