import Home from "./Pages/Home.jsx"
import {ThemeProvider} from "./context/ThemeContext.jsx";
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProjectsPage from "./Pages/ProjectsPage.jsx";

function App() {
  return (
      <ThemeProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/projects" element={<ProjectsPage/>} />
              </Routes>
          </BrowserRouter>
      </ThemeProvider>


  )
}

export default App
