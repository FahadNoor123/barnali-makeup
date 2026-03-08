'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Portfolio.module.css';

const items = [
    { src: '/images/hero-banner.png', alt: 'Bridal Makeup Look', category: 'bridal', label: 'Bridal', title: 'Classic Bridal Elegance' },
    { src: '/images/portfolio-party.png', alt: 'Party Makeup Look', category: 'party', label: 'Party', title: 'Evening Glamour' },
    { src: '/images/portfolio-editorial.png', alt: 'Editorial Makeup Look', category: 'editorial', label: 'Editorial', title: 'High Fashion Art' },
    { src: '/images/portfolio-natural.png', alt: 'Natural Glam Look', category: 'natural', label: 'Natural Glam', title: 'Soft & Dewy Beauty' },
    { src: '/images/portfolio-bridal.png', alt: 'Traditional Bridal Look', category: 'bridal', label: 'Bridal', title: 'Traditional Bridal Glam' },
    { src: '/images/about-artist.png', alt: 'Soft Glam Party Look', category: 'party', label: 'Party', title: 'Soft Glam Evening' },
];

const filters = ['all', 'bridal', 'party', 'editorial', 'natural'];
const filterLabels = { all: 'All', bridal: 'Bridal', party: 'Party', editorial: 'Editorial', natural: 'Natural Glam' };

export default function Portfolio() {
    const [active, setActive] = useState('all');

    const filtered = active === 'all' ? items : items.filter((item) => item.category === active);

    return (
        <section id="portfolio" className={`${styles.portfolio} section`}>
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-label">My Work</span>
                    <h2 className="section-title">Portfolio <span className="accent">Gallery</span></h2>
                    <p className="section-subtitle">A glimpse into the transformations and beauty looks I&apos;ve created for my amazing clients.</p>
                </div>
                <div className={`${styles.filters} animate-on-scroll`}>
                    {filters.map((f) => (
                        <button key={f} className={`${styles.filterBtn} ${active === f ? styles.activeFilter : ''}`} onClick={() => setActive(f)}>
                            {filterLabels[f]}
                        </button>
                    ))}
                </div>
                <div className={styles.grid}>
                    {filtered.map((item, i) => (
                        <div key={`${item.src}-${i}`} className={`${styles.item} animate-on-scroll`}>
                            <Image src={item.src} alt={item.alt} width={400} height={400} className={styles.img} />
                            <div className={styles.overlay}>
                                <span className={styles.category}>{item.label}</span>
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
