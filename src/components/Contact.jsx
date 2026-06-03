import {useState} from "react";
import { BsCheckLg } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const[message, setMessage] = useState("")

    function handleSubmit(){
        setSubmitted(true)
    }

    return (
        <div className="max-w-4xl mx-auto px-8 py-24">
            <div className="bg-[#111] border border-[#222] rounded-2xl p-12 text-center">
                <div className="text-xs text-[#c8f135] tracking-[3px] uppercase mb-4">Contact</div>
                <div className="text-5xl font-syne text-white mb-4 leading-tight">Let's work together</div>
                <div className="text-gray-400 mb-10">Delhi NCR. Let's Talk</div>
                {!submitted ?
                        <div className="flex flex-col gap-4 max-w-lg text-left">
                            <input
                                placeholder="Your name"
                                className="bg-[#0a0a0a] border border-[#333] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#c8f135]"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                placeholder="Your email"
                                className="bg-[#0a0a0a] border border-[#333] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#c8f135]"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <textarea
                                placeholder="Your message"
                                rows={5}
                                className="bg-[#0a0a0a] border border-[#333] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#c8f135]"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <button
                                className="bg-[#c8f135] text-black font-semibold px-8 py-3 rounded-full text-sm w-fit mx-auto"
                                onClick={handleSubmit}
                            >Send Message</button>
                        </div>
                        :
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-[#c8f135] flex items-center justify-center text-black text-2xl"><BsCheckLg /></div>
                            <h1 className="text-2xl font-syne text-white">Message Sent!</h1>
                            <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                        </div>
                }
                <div className="flex justify-center gap-4 mt-10">
                    <a
                        className="flex items-center gap-2 px-5 py-2 border border-[#333] rounded-full text-gray-400 text-sm hover:border-[#666]"
                        href="mailto:sadiksaifi7428@gmail.com"
                    ><MdEmail /></a>
                    <a
                        className="flex items-center gap-2 px-5 py-2 border border-[#333] rounded-full text-gray-400 text-sm hover:border-[#666]"
                        target="_blank"
                        href="https://www.linkedin.com/in/sadik-saifi-934794353?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    ><FaLinkedin /></a>
                    <a
                        className="flex items-center gap-2 px-5 py-2 border border-[#333] rounded-full text-gray-400 text-sm hover:border-[#666]"
                        target="_blank"
                        href="https://github.com/sadiksaifi9958"
                    ><FaGithub /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact
