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
        <div className="flex items-center justify-between h-16"
        style={{background: scrollY > 50 ? 'rgba(10,10,10,0.98)': 'rgba(10,10,10,0.85)'}}>
            <div className="text-4xl font-bold font-syne">Nova
            <span className="text-[#c8f135]">Folio</span>
            </div>


            <div className="flex gap-4 items-center">
                {pages.map((link) => {
                    <a
                        key={link}
                        className="text-md font-semibold"
                        href={`#${link.toLowerCase()}`}
                    >{link}</a>
                })}
                <button onClick={toggleTheme}>{theme === "dark"? <FiSun/> : <FiMoon/> }</button>
                <button onClick={()=>setMenu(!menu)}>{menu? <HiMenu/> : <HiX/> }</button>
            </div>
        </div>
    )
}
