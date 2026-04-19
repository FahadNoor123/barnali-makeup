'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Image from "next/image";
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <a href="#home" className={styles.logo}>
                    <Image
                        src="/images/logo.png"
                        alt="Emaan Beautics logo"
                        width={105}
                        height={105}
                        className={styles.logoImage}
                    />
                    <div className={styles.logoText}>
                        <span className={styles.main}>Emaan</span>
                        <span className={styles.sub}>Beautics</span>
                    </div>
                </a>
                <button
                    className={`${styles.navToggle} ${menuOpen ? styles.active : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className={styles.hamburger}></span>
                </button>
                <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksActive : ''}`}>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
                    <li><a href="#testimonials" onClick={closeMenu}>Reviews</a></li>
                    <li><a href="#contact" className={styles.navCta} onClick={closeMenu}>Book Now</a></li>
                </ul>
            </div>
            {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}
        </nav>
    );
}
