import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Product from "./components/Products";
import MiniHero from "./components/MiniHero";
import { Metadata } from "next";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MiniHero />
      <Services />
      <Product />
      <Contact />
      <Footer />
    </>
  );
}
