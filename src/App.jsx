import Home from "../src/Pages/Home.jsx"
import {ThemeProvider} from "./context/ThemeContext.jsx";

function App() {
  return (
      <ThemeProvider>
        <Home/>
      </ThemeProvider>

  )
}

export default App
