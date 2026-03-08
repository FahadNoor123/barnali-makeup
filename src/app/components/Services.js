import styles from './Services.module.css';

const packages = [
    {
        title: 'Bridal Makeup',
        icon: 'fas fa-crown',
        badge: 'Most Popular',
        price: 350,
        features: ['HD / Airbrush Foundation', 'Eye Makeup & Lashes', 'Contouring & Highlighting', 'Hairstyling Included', 'Dupatta / Veil Setting', 'Touch-up Kit Included'],
        duration: '3-4 Hours',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'Engagement Package',
        icon: 'fas fa-ring',
        badge: 'Premium',
        price: 250,
        features: ['Glamorous Makeup Look', 'Soft Smokey or Shimmer Eyes', 'Contouring & Highlighting', 'Hairstyling Included', 'False Lashes Application', 'Setting Spray Finish'],
        duration: '2-3 Hours',
        featured: true,
        btnClass: 'btn btn-gold btn-block',
    },
    {
        title: 'Party Makeup',
        icon: 'fas fa-glass-cheers',
        badge: 'Glam',
        price: 150,
        features: ['Full Face Makeup', 'Eye Makeup with Lashes', 'Contouring & Blush', 'Lip Color Matching', 'Setting Spray Finish'],
        duration: '1.5-2 Hours',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'Photoshoot Makeup',
        icon: 'fas fa-camera-retro',
        badge: 'Editorial',
        price: 200,
        features: ['Camera-Ready HD Makeup', 'Creative Eye Art (Optional)', 'Contouring for Photography', 'Multiple Look Changes', 'On-Set Touch-ups'],
        duration: '2-3 Hours',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'HD / Airbrush Makeup',
        icon: 'fas fa-magic',
        badge: 'Flawless',
        price: 180,
        features: ['Airbrush Foundation', 'Flawless Skin Finish', 'Long-lasting (12+ Hours)', 'Natural or Glam Options', 'Waterproof Formula'],
        duration: '1.5-2 Hours',
        btnClass: 'btn btn-primary btn-block',
    },
];

export default function Services() {
    return (
        <section id="services" className={`${styles.services} section`}>
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-label">Services & Packages</span>
                    <h2 className="section-title">Makeup <span className="accent">Packages</span></h2>
                    <p className="section-subtitle">Choose the perfect package for your special occasion. Every look is customized to match your style, outfit, and personality.</p>
                </div>
                <div className={styles.grid}>
                    {packages.map((pkg, i) => (
                        <div key={i} className={`${styles.card} ${pkg.featured ? styles.featured : ''} animate-on-scroll`}>
                            <div className={styles.badge}>{pkg.badge}</div>
                            <div className={styles.icon}><i className={pkg.icon}></i></div>
                            <h3 className={styles.title}>{pkg.title}</h3>
                            <div className={styles.price}>
                                <span className={styles.currency}>$</span>
                                <span className={styles.amount}>{pkg.price}</span>
                            </div>
                            <ul className={styles.features}>
                                {pkg.features.map((f, j) => (
                                    <li key={j}><i className="fas fa-check"></i> {f}</li>
                                ))}
                            </ul>
                            <div className={styles.duration}><i className="fas fa-clock"></i> {pkg.duration}</div>
                            <a href="#contact" className={pkg.btnClass}>Book Now</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
