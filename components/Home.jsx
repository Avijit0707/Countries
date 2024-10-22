import Header from "./header";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountryesList from "./CountryesList";
import "../App.css"
import { useEffect, useState } from "react";
// import { useOutletContext } from "react-router-dom";
// import { ThemeContexts } from "../contexts/ThemeContexts";
import { GetwindowArea, windowArea } from "../hooks/utility";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
    const [quary,setquary]= useState('')
    // const [isDark] =useOutletContext()
    const [isDark] =useTheme()

  
    // const returnContexts=useContext(ThemeContexts)
    // console.log(returnContexts);

  const windowArea = GetwindowArea()

  return (
    <main className={`${isDark?'dark':''}`}>
      <div className="search-filter-container">
        <SearchBar setquary={setquary} />
        <SelectMenu setquary={setquary} />
      </div>
     {/* <h1 style={{textAlign: 'center', width:'95vw'}}>{windowArea.width} x {windowArea.hight}</h1> */}

      { <CountryesList quary={quary} />}
    </main>
  );
}
