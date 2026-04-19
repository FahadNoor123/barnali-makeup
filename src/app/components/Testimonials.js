'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        stars: 5,
        text: '"Eman Beautics made me feel like an absolute queen on my wedding day! My makeup lasted the entire event and I received so many compliments. The artist truly understood my vision and brought it to life."',
        name: 'Sarah Ahmed',
        role: 'Bridal Client',
        initial: 'S',
    },
    {
        stars: 5,
        text: '"I booked Eman Beautics for my engagement party and the look was incredible! The makeup was flawless and lasted all night. The service was warm and professional — highly recommend!"',
        name: 'Maria Khan',
        role: 'Engagement Client',
        initial: 'M',
    },
    {
        stars: 4.5,
        text: '"Working with Eman Beautics on our editorial shoot was amazing. They brought creative ideas and executed them perfectly. The final photos looked stunning thanks to their artistry."',
        name: 'Rachel Torres',
        role: 'Fashion Photographer',
        initial: 'R',
    },
    {
        stars: 5,
        text: '"Best makeup experience ever! Eman Beautics came to my home for the service and made the whole process so relaxing and enjoyable. My party look was absolutely perfect!"',
        name: 'Fatima Noor',
        role: 'Party Makeup Client',
        initial: 'F',
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef(null);

    const goTo = (index) => {
        setCurrent(index);
        resetTimer();
    };

    const next = () => goTo((current + 1) % testimonials.length);
    const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);

    const resetTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrent((c) => (c + 1) % testimonials.length);
        }, 6000);
    };

    useEffect(() => {
        resetTimer();
        return () => clearInterval(timerRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderStars = (count) => {
        const full = Math.floor(count);
        const half = count % 1 !== 0;
        return (
            <>
                {Array.from({ length: full }, (_, i) => (
                    <i key={i} className="fas fa-star"></i>
                ))}
                {half && <i className="fas fa-star-half-alt"></i>}
            </>
        );
    };

    return (
        <section id="testimonials" className={`${styles.testimonials} section`}>
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className={`section-label ${styles.label}`}>Client Love</span>
                    <h2 className={`section-title ${styles.title}`}>What My <span className={styles.accent}>Clients Say</span></h2>
                    <p className={`section-subtitle ${styles.subtitle}`}>Real stories from real brides and clients who trusted me with their special moments.</p>
                </div>
                <div className={styles.slider}>
                    <div className={styles.track} style={{ transform: `translateX(-${current * 100}%)` }}>
                        {testimonials.map((t, i) => (
                            <div key={i} className={styles.card}>
                                <div className={styles.stars}>{renderStars(t.stars)}</div>
                                <p className={styles.text}>{t.text}</p>
                                <div className={styles.author}>
                                    <div className={styles.avatar}>{t.initial}</div>
                                    <div className={styles.info}>
                                        <h5>{t.name}</h5>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.controls}>
                        <button className={styles.sliderBtn} onClick={prev}><i className="fas fa-chevron-left"></i></button>
                        <div className={styles.dots}>
                            {testimonials.map((_, i) => (
                                <button key={i} className={`${styles.dot} ${i === current ? styles.activeDot : ''}`} onClick={() => goTo(i)} />
                            ))}
                        </div>
                        <button className={styles.sliderBtn} onClick={next}><i className="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </section>
    );
}
