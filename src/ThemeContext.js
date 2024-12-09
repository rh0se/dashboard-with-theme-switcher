import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({children}) => {
    const [isDarkTheme, setTheme] = useState(true);

    const toggleTheme = () => {
        setTheme(isDarkTheme => !isDarkTheme);
    }

    return (
        <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme =() => {
    const theme = useContext(ThemeContext.Provider)
    if (!theme) 
        throw new Error("useTheme must be used within a ThemeProvider")
    return theme;
}

export { ThemeProvider, useTheme };