'use client';
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    const particlesRef = useRef(null);

    useEffect(() => {
        const container = particlesRef.current;
        if (!container) return;
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = styles.particle;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (4 + Math.random() * 4) + 's';
            container.appendChild(particle);
        }
    }, []);

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.particles} ref={particlesRef}></div>
            <div className={styles.content}>
                <p className={`${styles.tagline} animate-on-scroll`}>✦ Premium Beauty Experience ✦</p>
                <h1 className={`${styles.title} animate-on-scroll`}>
                    <span className={styles.scriptText}>Unveil Your</span>
                    <span className={styles.mainText}>Radiance</span>
                </h1>
                <p className={`${styles.description} animate-on-scroll`}>
                    Professional makeup artistry for your most cherished moments. From bridal elegance to editorial glamour — let your beauty shine.
                </p>
                <div className={`${styles.buttons} animate-on-scroll`}>
                    <a href="#services" className="btn btn-primary">View Packages</a>
                    <a href="#contact" className="btn btn-outline">Book Appointment</a>
                </div>
                <div className={`${styles.highlights} animate-on-scroll`}>
                    <div className={styles.highlightItem}>
                        <i className="fas fa-gem"></i>
                        <span>Bridal Makeup</span>
                    </div>
                    <div className={styles.highlightItem}>
                        <i className="fas fa-glass-cheers"></i>
                        <span>Party Glam</span>
                    </div>
                    <div className={styles.highlightItem}>
                        <i className="fas fa-camera"></i>
                        <span>Photoshoot</span>
                    </div>
                    <div className={styles.highlightItem}>
                        <i className="fas fa-star"></i>
                        <span>HD Makeup</span>
                    </div>
                </div>
            </div>
            <div className={styles.scrollIndicator}>
                <span>Scroll</span>
                <div className={styles.scrollLine}></div>
            </div>
        </section>
    );
}
