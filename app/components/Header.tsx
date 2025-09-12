"use client";

import { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
           <Image src="/logo.png" alt="Techistry Logo" width={50} height={50} />
          </Link>
          
          <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#contact">Get in touch</a>
          </div>
          
          <button 
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}