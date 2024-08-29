import { useEffect } from "react";
import moon from "../../assets/moon.png";
import sun from "../../assets/sun.png";
import "./Topbar.css";
import useTheme from "../../hooks/useTheme";

const ThemeToggle = () => {
  const {theme, toggleTheme} = useTheme();

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }, [theme]);

  return (
    <div className="toggle-container" style={theme === "dark" ? {backgroundColor: "white"} : {backgroundColor: "black"}} onClick={toggleTheme}>
      <img src={moon} alt="dark-mode" width={14} height={14} />
      <div className="toggle" style={theme === "dark" ? {backgroundColor: "#0f172a", left: "3px"} : {backgroundColor: "white", right: "3px"}}></div>
      <img src={sun} alt="light-mode" width={14} height={14} />
    </div>
  )
}

export default ThemeToggle