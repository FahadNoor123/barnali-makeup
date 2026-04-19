'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
    const statsRef = useRef(null);
    const animated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !animated.current) {
                        animated.current = true;
                        const counters = entry.target.querySelectorAll('[data-count]');
                        counters.forEach((counter) => {
                            const target = +counter.dataset.count;
                            let current = 0;
                            const increment = target / 60;
                            const timer = setInterval(() => {
                                current += increment;
                                if (current >= target) {
                                    counter.textContent = target;
                                    clearInterval(timer);
                                } else {
                                    counter.textContent = Math.floor(current);
                                }
                            }, 30);
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className={`${styles.about} section`}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={`${styles.imageWrap} animate-on-scroll`}>
                        <div className={styles.imageFrame}>
                            <Image src="/images/about-artist.png" alt="Emaan Beautics - Professional Beauty Artist" width={500} height={600} className={styles.img} />
                            <div className={styles.frameDecoration}></div>
                        </div>
                        <div className={styles.expBadge}>
                            <span className={styles.expNumber}>8+</span>
                            <span className={styles.expText}>Years of Experience</span>
                        </div>
                    </div>
                    <div className={`${styles.content} animate-on-scroll`}>
                        <span className="section-label">About Emaan Beautics</span>
                        <h2 className="section-title">Welcome to <span className="accent">Emaan Beautics</span></h2>
                        <p className={styles.lead}>A luxury beauty studio offering bridal, party, skin, and hair services designed to make every client feel confident and radiant.</p>
                        <p className={styles.text}>Emaan Beautics combines expert artistry with high-quality products to deliver beautiful, long-lasting results. From bridal makeup to skin polish and hair styling, every service is customized for your needs.</p>
                        <p className={styles.text}>Whether you are preparing for your wedding, a special event, or simply want a pampering beauty session, our team brings care, precision, and warmth to every appointment.</p>
                        <div className={styles.stats} ref={statsRef}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber} data-count="500">0</span><span className={styles.statPlus}>+</span>
                                <span className={styles.statLabel}>Happy Clients</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber} data-count="250">0</span><span className={styles.statPlus}>+</span>
                                <span className={styles.statLabel}>Bridal Looks</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber} data-count="80">0</span><span className={styles.statPlus}>+</span>
                                <span className={styles.statLabel}>Beauty Treatments</span>
                            </div>
                        </div>
                        <div className={styles.certs}>
                            <h4>Expertise & Training</h4>
                            <ul>
                                <li><i className="fas fa-certificate"></i> Bridal & Bridal Party Makeup</li>
                                <li><i className="fas fa-certificate"></i> Skin Renewal & Facial Treatments</li>
                                <li><i className="fas fa-certificate"></i> Hair Styling & Keratin Care</li>
                                <li><i className="fas fa-certificate"></i> Professional Beauty Makeovers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
