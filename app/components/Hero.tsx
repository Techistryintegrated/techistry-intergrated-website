import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <figure>
              <img src="/logo.png" alt="Techistry Logo" width={100} height={100} />
            </figure>
            <h1 className={styles.heroTitle}>
             Researching, Designing, Developing
              <span className={styles.highlight}> Solutions</span>
            </h1>
            <p className={styles.heroSubtitle}>
              We empower businesses with cutting-edge technology solutions, 
              driving digital transformation and accelerating growth in the modern world.
            </p>
            <div className={styles.heroActions}>
              <a href="#services" className="btn btn-primary">
                Our Services
              </a>
              <a href="#contact" className="btn btn-clear">
                Get In Touch
              </a>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}