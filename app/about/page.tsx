import Image from "next/image";
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
                <h3>150+</h3>
                <p>Empowering Brands</p>
              </div>
              <div className={styles.stat}>
                <h3>2</h3>
                <p>Solutions delivered</p>
              </div>
             
            </div>
          </div>
         <Image src="/about-image-1.jpg" alt="About Techistry 0ne" width={500} height={400} />
         <Image src="/about-image-2.jpg" alt="About Techistry two" width={500} height={400} />
        </div>
      </div>
    </section>
  );
}