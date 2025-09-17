import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Product from "./components/Products";
import MiniHero from "./components/MiniHero";


export default function Home() {
  return (
    <>
      <Hero />
      <MiniHero />
      <Services />
      <Product />
      <Contact />
    </>
  );
}
