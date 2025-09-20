/* eslint-disable @next/next/no-page-custom-font */
import { Metadata } from "next";
import "./globals.scss";
import "aos/dist/aos.css";
import AOSInitializer from "./AosInitializer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappFloat from "./whatsappFloat";


export const metadata: Metadata = {
  title: "Techistry Integrated",
  description:
    "Welcome to Techistry, your go-to solution for integrated technology services.",
  keywords: "Techistry, technology, services, integrated solutions",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Krub:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Unbounded:wght@200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <AOSInitializer />
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsappFloat/>
         
   
      </body>
      
    </html>
  );
}
