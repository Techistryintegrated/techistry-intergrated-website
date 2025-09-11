import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <h3>Techistry</h3>
              <span>Integrated</span>
            </div>
            <p>
              Empowering businesses through innovative technology solutions 
              that drive growth and success in the digital age.
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile Development</a></li>
              <li><a href="#services">Cloud Solutions</a></li>
              <li><a href="#services">AI & Machine Learning</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Connect</h4>
            <ul>
              <li><a href="#linkedin">LinkedIn</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#github">GitHub</a></li>
              <li><a href="#email">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Techistry Integrated. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}