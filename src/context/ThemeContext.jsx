const { createContext } = require("react");
import { useState } from "react";

const ThemeContext = createContext(null);

const initialTheme = "light";

export function ThemeProvider ({children}) {
    const [theme, setTheme] = useState(initialTheme);

    const handleTheme = (e) => {
        console.log(e.target.value);
        // if(e.target.value ==)
        setTheme(e.target.value);
      };
    

    const data = {theme, handleTheme};
    
    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext;