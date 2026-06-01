import Navbar from "../components/Navbar.jsx"
import Hero from "../components/Hero.jsx"
import About from "../components/About.jsx"
import Skills from "../components/Skills.jsx"

const Home = () => {
    return (
        <div className="bg-[#0a0a0a] min-h-screen">
            <Navbar/>
            <Hero/>
            <About/>
            <Skills/>
        </div>
    )
}

export default Home