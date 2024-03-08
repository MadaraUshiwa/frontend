'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Providers } from "./redux/Providers";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />      
          {children}  
          <Footer />          
        </body>
      </html>
    </Providers>
  );
}
