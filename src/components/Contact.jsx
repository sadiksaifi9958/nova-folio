import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { theme } = useTheme();
  const [error, setError] = useState("");

  function handleSubmit() {
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setError("please fill in all fields");
      return;
    }
    if (!email.includes("@") || !email.includes(".com")) {
      setError("Please enter a valid email");
      return;
    }
    setSubmitted(true);
    setError("");
  }

  return (
    <div className="max-w-4xl mx-auto px-8 py-24 scroll-m-10" id="contact">
      <div
        className={`bg-[#111] border rounded-2xl p-12 text-center ${theme === "dark" ? "bg-[#111] border-[#222]" : "bg-[#ffffff] border-[#e5e5e5]"}`}
      >
        <div className="text-xs text-[#c8f135] tracking-[3px] uppercase mb-4">
          Contact
        </div>
        <div
          className={`text-4xl md:text-5xl font-syne ${theme === "dark" ? "text-white" : "text-gray-800"} mb-4 leading-tight`}
        >
          Let's work together
        </div>
        <div className="text-gray-500 mb-10">Delhi NCR. Let's Talk</div>
        {!submitted ? (
          <div className="flex flex-col gap-4 max-w-lg text-left">
            <input
              placeholder="Your name"
              className={` border rounded-xl px-4 py-3  text-sm outline-none focus:border-[#c8f135] focus:outline-none ${theme === "dark" ? "bg-[#0a0a0a] border-[#333] text-white" : "bg-[#e5e5e5] border-[#d1d5db] text-gray-800 "}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Your email"
              className={`border rounded-xl px-4 py-3  text-sm outline-none focus:border-[#c8f135] focus:outline-none ${theme === "dark" ? "bg-[#0a0a0a] border-[#333] text-white" : "bg-[#e5e5e5] border-[#d1d5db] text-gray-800"}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Your message"
              rows={5}
              className={`border rounded-xl px-4 py-3 text-sm outline-none focus:border-[#c8f135] focus:outline-none ${theme === "dark" ? "bg-[#0a0a0a] border-[#333] text-white" : "bg-[#e5e5e5] border-[#d1d5db] text-gray-800 placeholder:text-gray-400"}`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              className="bg-[#c8f135] text-black font-semibold px-8 py-3 rounded-full text-sm w-fit mx-auto"
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#c8f135] flex items-center justify-center text-black text-2xl">
              <BsCheckLg />
            </div>
            <h1
              className={`text-2xl font-syne ${theme === "dark" ? "text-white" : "text-gray-800"} `}
            >
              Message Sent!
            </h1>
            <p className="text-gray-500">
              Thanks for reaching out. I'll get back to you soon.
            </p>
          </div>
        )}
        <div className="flex justify-center gap-4 mt-10">
          <a
            className={`flex items-center gap-2 px-5 py-2 border  rounded-full  text-sm hover:border-[#c8f135] hover:text-[#c8f135] transition-colors duration-200 ${theme === "dark" ? "border-[#333] text-gray-400" : "border-gray-300 text-gray-600"}`}
            href="mailto:sadiksaifi7428@gmail.com"
          >
            <MdEmail />
          </a>
          <a
            className={`flex items-center gap-2 px-5 py-2 border  rounded-full  text-sm hover:border-[#c8f135] hover:text-[#c8f135] transition-colors duration-200 ${theme === "dark" ? "border-[#333] text-gray-400 " : "border-gray-300 text-gray-600"}`}
            target="_blank"
            href="https://www.linkedin.com/in/sadik-saifi-934794353?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          >
            <FaLinkedin />
          </a>
          <a
            className={`flex items-center gap-2 px-5 py-2 border  rounded-full text-sm hover:border-[#c8f135] hover:text-[#c8f135] transition-colors duration-200 ${theme === "dark" ? "border-[#333] text-gray-400" : "border-gray-300 text-gray-600"}`}
            target="_blank"
            href="https://github.com/sadiksaifi9958"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
