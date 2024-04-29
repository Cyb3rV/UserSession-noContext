import AuthContext from "@/context/AuthContext";
import LanguageContext from "@/context/LanguageContext";
import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";

export default function Main(){
    
    const {theme} = useContext(ThemeContext);
    const {texts} = useContext(LanguageContext);
    const {auth} = useContext(AuthContext);
    
    return(    
        
        <main className={theme}>
            {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
            <p>{texts.mainContent}</p>
        </main>
    );
    
}