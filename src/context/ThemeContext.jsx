import React from "react"
import {createContext, useContext, useState} from "react"

export const ThemeContext = React.createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark")

    function toggleTheme(){
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}