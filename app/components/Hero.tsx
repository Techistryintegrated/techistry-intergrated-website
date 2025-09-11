import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Innovative Technology
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
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.techGrid}>
              <div className={styles.techCard}>AI/ML</div>
              <div className={styles.techCard}>Cloud</div>
              <div className={styles.techCard}>DevOps</div>
              <div className={styles.techCard}>Mobile</div>
              <div className={styles.techCard}>Web</div>
              <div className={styles.techCard}>IoT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}