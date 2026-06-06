import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div
      className="min-h-screen overflow-x-clip"
      style={{ backgroundColor: theme === "dark" ? "#0a0a0a" : "#ffffff" }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
