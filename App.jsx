import Header from "./components/header";
import "./App.css";
import { Outlet } from "react-router-dom";
import {ThemeProvider } from "./contexts/ThemeContexts";

const App = () => {


  return (
  
      <ThemeProvider>
      <Header />
      <Outlet />
      </ThemeProvider>
    
  );
};
export default App;
