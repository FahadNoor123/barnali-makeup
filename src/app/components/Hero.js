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
                <p className={`${styles.tagline} animate-on-scroll`}>✦ Emaan Beautics - Radiance Redefined ✦</p>
                <h1 className={`${styles.title} animate-on-scroll`}>
                    <span className={styles.scriptText}>Unveil Your</span>
                    <span className={styles.mainText}>True Glow</span>
                </h1>
                <p className={`${styles.description} animate-on-scroll`}>
                    Emaan Beautics brings luxury beauty care and professional artistry to every appointment. Bridal, party, skin, and hair services tailored to your unique style.
                </p>
                <div className={`${styles.buttons} animate-on-scroll`}>
                    <a href="#services" className="btn btn-primary">View Services</a>
                    <a href="#contact" className="btn btn-outline">Book Now</a>
                </div>
                <div className={`${styles.highlights} animate-on-scroll`}>
                    <div className={styles.highlightItem}>
                        <i className="fas fa-gem"></i>
                        <span>Bridal Beauty</span>
                    </div>
                    <div className={styles.highlightItem}>
                        <i className="fas fa-glass-cheers"></i>
                        <span>Party Makeup</span>
                    </div>
                    <div className={styles.highlightItem}>
                        <i className="fas fa-spa"></i>
                        <span>Skin Treatments</span>
                    </div>
                    <div className={styles.highlightItem}>
                        <i className="fas fa-cut"></i>
                        <span>Hair Styling</span>
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
