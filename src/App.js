import Main from "./comps/Main";
import Navbar from "./comps/Navbar";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }
  return (
    <div>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
  );
}
