const { createContext } = require("react");
import { useState } from "react";

const LanguageContext = createContext(null);

const initialLanguage = "es";

const translations = {
    es: {
        headerTitle: "Mi aplicacion CON Context Api",
        headerSubtitle: "Mi Cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesion",
        buttonLogout: "Cerrar Sesion",
        mainWelcome: "Bienvenido invitado",
        mainHello: "Hola usuario",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pie de pagina"
    },
    en: {
            headerTitle: "My application WITH Context Api",
            headerSubtitle: "My Header",
            headerLight: "Light",
            headerDark: "Dark",
            buttonLogin: "Login",
            buttonLogout: "Close Session",
            mainWelcome: "Welcome guest",
            mainHello: "Hello user",
            mainContent: "My main content",
            footerTitle: "My footer"
        }
  }

export function LanguageProvider ({children}) {
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    const handleLanguage = (e) => {
        setLanguage(e.target.value);
        setTexts(translations[e.target.value]);
      }

    const data = {language, handleLanguage, texts};

    return(
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    )

}

export default LanguageContext;