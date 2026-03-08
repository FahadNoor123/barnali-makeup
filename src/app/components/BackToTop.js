'use client';
import { useState, useEffect } from 'react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            <button
                className={`back-to-top ${visible ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Back to top"
            >
                <i className="fas fa-chevron-up"></i>
            </button>
            <a
                href="https://wa.me/15551234567"
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
        </>
    );
}
