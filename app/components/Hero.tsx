import Image from "next/image";
import styles from "./Hero.module.scss";

const cards = [
  {
    title: "Integrated Solutions",
    description: "Bridging logic and imagination for impactful results.",
    image: "/solution.png",
  }, 
  {
    title: "Creative Design",
    description: "Intuitive systems that enhance user experience seamlessly.",
    image: "/creative.png",
  },
  {
    title: "Engineering Excellence",
    description: "Expressive interfaces that captivate and engage users.",
    image: "/engineering.png",
  },
]
export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className={styles.heroContent} >
          <div className={styles.heroText} >
            <figure data-aos="zoom-in">
              <Image src="/logo.png" alt="Techistry Logo" width={100} height={100} />
            </figure>
            <h1 className={styles.heroTitle} data-aos="fade-up">
             Researching, Designing, Developing
              <span className={styles.highlight} data-aos="fade-left"> Solutions</span>
            </h1>
            <p className={styles.heroSubtitle} data-aos="fade-up">
              We empower businesses with cutting-edge technology solutions, 
              driving digital transformation and accelerating growth in the modern world.
            </p>
            <div className={styles.heroActions} data-aos="fade-up">
              <a href="#services" className="btn btn-primary">
                Our Services
              </a>
              <a href="#contact" className="btn btn-clear">
                Get In Touch
              </a>
            </div>
          </div>
          <div className={styles.heroCards}>
            {cards.map((card, index) => (
              <div 
                key={card.title} 
                className={styles.heroCard} 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <Image src={card.image} alt={card.title} width={80} height={80} />  
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}