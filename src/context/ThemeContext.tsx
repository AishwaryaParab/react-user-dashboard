import { ReactNode, createContext, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}


interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('te-theme');
        return storedTheme ? (JSON.parse(storedTheme) as Theme) : "dark";
    })

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        localStorage.setItem('te-theme', JSON.stringify(theme === "light" ? "dark" : "light"));
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
}