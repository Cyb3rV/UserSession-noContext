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
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { AuthProvider } from "@/context/AuthContext";


export default function Home() {

  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <Header/>
            <Main/>
            <Footer/>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}
