import { createContext } from "react";
import { useState } from "react";
export const ThemeContexts = createContext();

export function ThemeProvider({children}) {
  let [Dark, isDark] = useState(JSON.parse(localStorage.getItem("isDarkMode")));

  return(
    <ThemeContexts.Provider value={[Dark, isDark]}>
        {children}
    </ThemeContexts.Provider>
  )
}
