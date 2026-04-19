import styles from './Services.module.css';

const packages = [
    {
        title: 'Whitening Facial',
        icon: 'fas fa-sparkles',
        badge: 'Skin Care',
        price: '3,000',
        currency: 'Rs',
        features: ['Brightening facial treatment', 'Fresh, glowing skin', 'Professional skincare products'],
        duration: '60 min',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'Skin Polish + Hand & Feet',
        icon: 'fas fa-hand-sparkles',
        badge: 'Glow Boost',
        price: '1,500',
        currency: 'Rs',
        features: ['Exfoliation for face, hands, and feet', 'Soft, even skin finish', 'Hydrating moisturizers'],
        duration: '60 min',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'Full Face Waxing',
        icon: 'fas fa-wand-magic-sparkles',
        badge: 'Detail Care',
        price: '800',
        currency: 'Rs',
        features: ['Smooth facial waxing', 'Clean contouring', 'Gentle aftercare'],
        duration: '45 min',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'Plucking',
        icon: 'fas fa-eye-dropper',
        badge: 'Precision',
        price: '200',
        currency: 'Rs',
        features: ['Expert eyebrow shaping', 'Clean precision', 'Natural finish'],
        duration: '15 min',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'Manicure & Pedicure',
        icon: 'fas fa-hand-holding-heart',
        badge: 'Pamper',
        price: '3,000',
        currency: 'Rs',
        features: ['Nail shaping and polish', 'Soothing hand & foot care', 'Polish of your choice'],
        duration: '75 min',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'Mehndi Full Hands',
        icon: 'fas fa-hand-paper',
        badge: 'Traditional',
        price: '1,000',
        currency: 'Rs',
        features: ['Intricate full-hand mehndi', 'Traditional bridal style', 'Long-lasting stain'],
        duration: '90 min',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'Bridal Mehndi',
        icon: 'fas fa-heart',
        badge: 'Bridal',
        price: '5,000',
        currency: 'Rs',
        features: ['Bridal-style mehndi', 'Custom patterns', 'Perfect for wedding events'],
        duration: '120 min',
        btnClass: 'btn btn-gold btn-block',
        featured: true,
    },
    {
        title: 'Simple Hair Styling',
        icon: 'fas fa-cut',
        badge: 'Hair',
        price: '500',
        currency: 'Rs',
        features: ['Everyday hair styling', 'Polished finish', 'Quick and elegant'],
        duration: '30 min',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'Blowdryer Hair Styling',
        icon: 'fas fa-burn',
        badge: 'Volume',
        price: '1,500',
        currency: 'Rs',
        features: ['Blow-dry styling', 'Smooth volume and shine', 'Ready for occasions'],
        duration: '45 min',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'Party Makeup',
        icon: 'fas fa-glass-cheers',
        badge: 'Party',
        price: '3,000',
        currency: 'Rs',
        features: ['Full party makeup', 'Bold eyes and lips', 'Long-lasting finish'],
        duration: '90 min',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'Mehndi Makeup',
        icon: 'fas fa-smile-beam',
        badge: 'Festive',
        price: '3,000',
        currency: 'Rs',
        features: ['Soft festive makeup', 'Enhances mehndi look', 'Glow finish'],
        duration: '75 min',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'Engagement Makeup',
        icon: 'fas fa-ring',
        badge: 'Engagement',
        price: '5,000',
        currency: 'Rs',
        features: ['Elegant engagement makeup', 'Defined eyes and contour', 'Perfect for photos'],
        duration: '90 min',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'Nikah Makeup',
        icon: 'fas fa-heart-circle',
        badge: 'Nikah',
        price: '7,000',
        currency: 'Rs',
        features: ['Traditional Nikah makeup', 'Soft bridal glow', 'Beautiful finish'],
        duration: '120 min',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'Bridal Makeup',
        icon: 'fas fa-crown',
        badge: 'Bridal',
        price: '20,000',
        currency: 'Rs',
        features: ['Complete bridal transformation', 'Airbrush and HD finish', 'Bridal hairstyle included'],
        duration: '180 min',
        btnClass: 'btn btn-gold btn-block',
    },
    {
        title: 'Hair Cut for Baby',
        icon: 'fas fa-baby',
        badge: 'Kids',
        price: '500',
        currency: 'Rs',
        features: ['Gentle baby haircut', 'Comfort-first service', 'Quick and neat'],
        duration: '30 min',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'Butterfly Cut',
        icon: 'fas fa-wind',
        badge: 'Style',
        price: '2,000',
        currency: 'Rs',
        features: ['Trendy butterfly haircut', 'Soft layers and shape', 'Styled finish'],
        duration: '45 min',
        btnClass: 'btn btn-primary btn-block',
    },
    {
        title: 'Long Layer Cut',
        icon: 'fas fa-layer-group',
        badge: 'Cut',
        price: '1,000',
        currency: 'Rs',
        features: ['Long layered haircut', 'Volume and movement', 'Suitable for all hair types'],
        duration: '40 min',
        btnClass: 'btn btn-primary btn-block',
    },
];

export default function Services() {
    return (
        <section id="services" className={`${styles.services} section`}>
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-label">Services & Pricing</span>
                    <h2 className="section-title">Eman <span className="accent">Beautics</span> Service Menu</h2>
                    <p className="section-subtitle">Explore our beauty, makeup, bridal, hair, and skin services with clear pricing for every moment.</p>
                </div>
                <div className={styles.grid}>
                    {packages.map((pkg, i) => (
                        <div key={i} className={`${styles.card} ${pkg.featured ? styles.featured : ''} animate-on-scroll`}>
                            <div className={styles.badge}>{pkg.badge}</div>
                            <div className={styles.icon}><i className={pkg.icon}></i></div>
                            <h3 className={styles.title}>{pkg.title}</h3>
                            <div className={styles.price}>
                                <span className={styles.currency}>{pkg.currency}</span>
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
