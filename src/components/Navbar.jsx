import {useScrollPosition} from "../hooks/useScrollPosition.js";
import {useTheme} from "../context/ThemeContext.jsx";
import {useState} from "react";
import {HiMenu, HiX} from "react-icons/hi";
import {FiSun, FiMoon} from "react-icons/fi";

export default function Navbar() {
    const pages = ["About", "Projects", "Skills", "Contact"]

    const [menu, setMenu] = useState(false)
    const scrollY = useScrollPosition()
    const {theme, toggleTheme} = useTheme()

    return (
        <nav className="sticky top-0 z-50 border-b border-[#1a1a1a]"
             style={{
                 background: scrollY > 50 ? '#0a0a0a' : 'transparent',
                 borderBottom: scrollY > 50 ? '0.5px solid #222' : 'none',
                 backdropFilter: 'blur(10px)'
             }}>
            <div className="flex items-center justify-between h-16 md:h-20 px-6 md:px-12">
                <div className="text-2xl md:text-4xl font-syne text-white">Nova
                    <span className="text-[#c8f135]">Folio</span>
                </div>


                <div className=" gap-8 items-center hidden md:flex">
                    {pages.map((link) => {
                        return (
                            <a
                                key={link}
                                className="text-white text-md font-semibold hover:text-[#c8f135] transition-colors"
                                href={`#${link.toLowerCase()}`}
                            >{link}</a>
                        )
                    })}
                </div>
                <button
                    onClick={toggleTheme}
                    className="text-white text-2xl cursor-pointer"
                >{theme === "dark"? <FiSun/> : <FiMoon/> }</button>
                <button
                    onClick={()=>setMenu(!menu)}
                    className="text-white text-2xl cursor-pointer md:hidden"
                >{menu? <HiMenu/> : <HiX/> }</button>
            </div>
            {
                !menu && <div className="flex flex-col gap-4 px-4 pb-4 pt-2 bg-[#0a0a0a] border-t border-[#222] md:hidden">
                    {pages.map((link) => {
                        return (
                            <a
                                key={link}
                                className="text-white text-md font-semibold hover:text-[#c8f135] transition-colors"
                                onClick={()=>setMenu(false)}
                                href={`#${link.toLowerCase()}`}
                            >{link}</a>
                        )
                    })}
                </div>
            }
        </nav>

    )
}
