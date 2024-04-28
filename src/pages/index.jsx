import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { Container } from "react-bootstrap";
import { Jumbotron } from "@/components/Jumbotron";
import Link from "next/link";

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const initialTheme = "light";
const initialLanguage = "es";
const initialAuth = false;

const translations = {
  es: {
      headerTitle: "Mi aplicacion SIN Context Api",
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
          headerTitle: "My application WITHOUT Context Api",
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

export default function Home() {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);

  const handleTheme = (e) => {
    console.log(e.target.value);
    // if(e.target.value ==)
    setTheme(e.target.value);
  };

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
    setTexts(translations[e.target.value]);
  }

  const handleAuth = (e) => {
    console.log(auth);
    setAuth(!auth);
  }
  
  return (
    <div className="my-page">
      <Header theme={theme} handleTheme={handleTheme} handleLanguage={handleLanguage} texts={texts} auth={auth} handleAuth={handleAuth}/>
      <Main theme={theme} texts={texts} auth={auth}/>
      <Footer theme={theme} texts={texts}/>
    </div>
  );
}
