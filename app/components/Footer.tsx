import Image from "next/image";
import styles from "./Footer.module.scss";
import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <Image src="/logo.png" alt="Techistry Logo" width={50} height={50} />
            </div>
            {/* <p>
              Empowering businesses through innovative technology solutions 
              that drive growth and success in the digital age.
            </p> */}
          </div>
          
          {/* <div className={styles.footerSection}>
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
           */}
            <ul className={styles.socials}>
              <li><Link href="https://www.facebook.com/share/1761Z6v5gw/"><Facebook/></Link></li>
              <li><Link href="https://x.com/techistryi"><Twitter/></Link></li>
              <li><Link href="https://www.instagram.com/integratedtechistry?igsh=MWRnOWt5YzBqOXU2Nw==/"><Instagram/></Link></li>
              <li><Link href="mailto:techistryintegrated@gmail.com"><Mail/></Link></li>
            </ul>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Techistry Integrated. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}