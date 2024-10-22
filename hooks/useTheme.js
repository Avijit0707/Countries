import { useContext } from "react";
import { ThemeContexts } from "../contexts/ThemeContexts";

export function useTheme(){
    return (useContext(ThemeContexts))
}