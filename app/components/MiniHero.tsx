import Image from "next/image"
import styles from "./MiniHero.module.scss"

const MiniHero = () => {
  return (
    <div className={styles.miniHero}>
        <div className="container">
            <div className={styles.miniHeroContent} data-aos="fade-up">

            <div className={styles.textArea} data-aos="fade-right">
                <h2>
                Innovative Technology solutions
                </h2>
                <p>
                Empowering businesses through innovative technology solutions that drive growth and success in the digital age.
                </p>
                <button data-aos="zoom-in">
                Explore
                </button>
            </div>
             <Image 
               src="/about-image-1.jpg" 
               alt="About Techistry one" 
               width={300} 
               height={400} 
               data-aos="fade-left" 
             />
             <Image 
               src="/about-image-2.jpg" 
               alt="About Techistry two" 
               width={300} 
               height={400} 
               data-aos="fade-left" 
             />
            </div>
        </div>
    </div>
  )
}

export default MiniHero