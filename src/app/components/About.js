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
                            <Image src="/images/about-artist.png" alt="Aria - Professional Makeup Artist" width={500} height={600} className={styles.img} />
                            <div className={styles.frameDecoration}></div>
                        </div>
                        <div className={styles.expBadge}>
                            <span className={styles.expNumber}>8+</span>
                            <span className={styles.expText}>Years of Experience</span>
                        </div>
                    </div>
                    <div className={`${styles.content} animate-on-scroll`}>
                        <span className="section-label">About Me</span>
                        <h2 className="section-title">Hello, I&apos;m <span className="accent">Aria</span></h2>
                        <p className={styles.lead}>A passionate makeup artist dedicated to enhancing your natural beauty and making every moment unforgettable.</p>
                        <p className={styles.text}>With over 8 years of experience in the beauty industry, I have had the privilege of transforming hundreds of brides and clients for their most special occasions. My journey began with a deep love for art and beauty, which led me to train under some of the most renowned makeup artists in the industry.</p>
                        <p className={styles.text}>I specialize in creating flawless, long-lasting looks that photograph beautifully and make you feel confident. Whether it&apos;s your wedding day, a glamorous event, or a professional photoshoot — I bring precision, creativity, and warmth to every session.</p>
                        <div className={styles.stats} ref={statsRef}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber} data-count="500">0</span><span className={styles.statPlus}>+</span>
                                <span className={styles.statLabel}>Happy Clients</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber} data-count="200">0</span><span className={styles.statPlus}>+</span>
                                <span className={styles.statLabel}>Bridal Looks</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber} data-count="50">0</span><span className={styles.statPlus}>+</span>
                                <span className={styles.statLabel}>Editorials</span>
                            </div>
                        </div>
                        <div className={styles.certs}>
                            <h4>Certifications & Training</h4>
                            <ul>
                                <li><i className="fas fa-certificate"></i> Certified Bridal Makeup Artist</li>
                                <li><i className="fas fa-certificate"></i> HD & Airbrush Makeup Specialist</li>
                                <li><i className="fas fa-certificate"></i> Advanced Contouring & Color Theory</li>
                                <li><i className="fas fa-certificate"></i> International Beauty Academy Graduate</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
