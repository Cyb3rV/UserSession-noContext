import LanguageContext from "@/context/LanguageContext";
import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";

export default function Footer(){
    
    const {theme} = useContext(ThemeContext);
    const {texts} = useContext(LanguageContext);
    
    return (        
            <footer className={theme}>
                <h4>{texts.footerTitle}</h4>
            </footer>
        );
    
}