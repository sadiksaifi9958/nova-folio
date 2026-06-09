import { useTheme } from "../context/ThemeContext";
function About() {
  const { theme } = useTheme();
  return (
    <div className="max-w-4xl mx-auto px-8 py-24 scroll-m-17" id="about">
      <div className="text-xs text-[#c8f135] mb-4 font-dm-sans tracking-[3px]">
        ABOUT
      </div>
      <h1
        className={`text-4xl md:text-5xl font-syne mb-12 leading-tight ${theme === "dark" ? "text-white" : "text-gray-800"}`}
      >
        A developer who loves to build.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <div className="text-gray-500 text-base leading-relaxed mb-5">
            I'm a{" "}
            <span
              className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}
            >
              BCA student at MDU
            </span>{" "}
            . I got into frontend development because I enjoy building things
            that people actually use and interact with.
          </div>
          <div className="text-gray-500 text-base leading-relaxed mb-5">
            I build with{" "}
            <span
              className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}
            >
              HTML, CSS, JavaScript, and React.
            </span>{" "}
            Every project I ship is real and deployed — not just a tutorial
            clone. I'm actively looking for a fresher frontend role in Delhi NCR
            where I can grow fast and contribute from day one.
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={`flex items-center justify-between border-b py-4 ${theme === "dark" ? "border-[#222]" : "border-gray-200"}`}
          >
            <div className="text-gray-500 text-sm font-dm-sans">Degree</div>
            <div
              className={`${theme === "dark" ? "text-white" : "text-gray-800"} text-sm font-syne`}
            >
              BCA &#x2027; MDU
            </div>
          </div>
          <div
            className={`flex items-center justify-between border-b py-4 ${theme === "dark" ? "border-[#222]" : "border-gray-200"}`}
          >
            <div className="text-gray-500 text-sm font-dm-sans">Location</div>
            <div
              className={`${theme === "dark" ? "text-white" : "text-gray-800"} text-sm font-syne`}
            >
              Delhi NCR
            </div>
          </div>
          <div
            className={`flex items-center justify-between border-b py-4 ${theme === "dark" ? "border-[#222]" : "border-gray-200"}`}
          >
            <div className="text-gray-500 text-sm font-dm-sans">
              Projects shipped
            </div>
            <div
              className={`${theme === "dark" ? "text-white" : "text-gray-800"} text-sm font-syne`}
            >
              2+
            </div>
          </div>
          <div
            className={`flex items-center justify-between border-b py-4 ${theme === "dark" ? "border-[#222]" : "border-gray-200"}`}
          >
            <div className="text-gray-500 text-sm font-dm-sans">Status</div>
            <div className="text-[#c8f135] text-sm font-syne">Available</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
