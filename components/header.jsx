import { useState } from "react"
// import { ThemeContexts } from "../contexts/ThemeContexts";
import { useTheme } from "../hooks/useTheme";


export default function Header() {
  let [Dark, isDark] = useTheme()
  // console.log(JSON.parse(localStorage.getItem('isDarkMode')));
 
  return (
    <header className={`header-container ${Dark?"dark":null}`}>
      <div className="header-content">
        <h2 className="title"><a href="/">Where in the world?</a></h2>
        <p className="theme-changer" onClick={()=>{
          // document.body.classList.toggle("dark")
          isDark(!Dark)
         localStorage.setItem("isDarkMode",!Dark)
        }}><i className={`fa-regular fa-${Dark?'sun':'moon'}`}></i>&nbsp;&nbsp;{Dark?"Light":"Dark"} Mode</p>
      </div>
    </header>
  )
}
