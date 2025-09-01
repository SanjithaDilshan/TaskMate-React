import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";

export const Header = () => {

  const [theme, seetTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "medium");

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme])

  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="TaskMate Logo" />
            <span>TaskMate</span>
        </div>
        <div className="themeSelector">
            <span onClick={() => seetTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
            <span onClick={() => seetTheme("medium")} className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
            <span onClick={() => seetTheme("dark")} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
            <span onClick={() => seetTheme("gOne")} className={theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
            <span onClick={() => seetTheme("gTwo")} className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
            <span onClick={() => seetTheme("gThree")} className={theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
        </div>
    </header>
  )
}

export default Header
