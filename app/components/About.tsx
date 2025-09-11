import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>About Techistry Integrated</h2>
            <p>
              Founded with a vision to bridge the gap between innovative technology and 
              practical business solutions, Techistry Integrated has been at the forefront 
              of digital transformation for over a decade.
            </p>
            <p>
              Our team of expert engineers, designers, and strategists work collaboratively 
              to deliver solutions that not only meet today&apos;s challenges but anticipate 
              tomorrow&apos;s opportunities.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <h3>500+</h3>
                <p>Projects Completed</p>
              </div>
              <div className={styles.stat}>
                <h3>50+</h3>
                <p>Happy Clients</p>
              </div>
              <div className={styles.stat}>
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className={styles.aboutImage}>
            <div className={styles.placeholder}>
              <h3>Our Mission</h3>
              <p>To empower businesses through innovative technology solutions that drive growth and success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}