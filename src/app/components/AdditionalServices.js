import styles from './AdditionalServices.module.css';

const addons = [
    { icon: 'fas fa-cut', title: 'Simple Hair Styling', desc: 'Clean, elegant styling for daily wear or casual events.', price: 'Rs 500' },
    { icon: 'fas fa-burn', title: 'Blowdryer Hair Styling', desc: 'Voluminous blowdry styling that stays smooth and polished.', price: 'Rs 1,500' },
    { icon: 'fas fa-spa', title: 'Keratin Treatment', desc: 'Smoothing care to nourish hair and reduce frizz for weeks.', price: 'Custom Pricing' },
    { icon: 'fas fa-water', title: 'Botox Hair Treatment', desc: 'Deep conditioning and shine restoration for soft, healthy hair.', price: 'Custom Pricing' },
    { icon: 'fas fa-magic', title: 'Nanoplastia', desc: 'Advanced hair smoothing treatment for sleek, long-lasting results.', price: 'Custom Pricing' },
];

export default function AdditionalServices() {
    return (
        <section className={`${styles.section} section`}>
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-label">Beauty Extras</span>
                    <h2 className="section-title">Hair & Skin <span className="accent">Treatments</span></h2>
                    <p className="section-subtitle">Complete your look with expert hair and skin services designed for beauty and confidence.</p>
                </div>
                <div className={styles.grid}>
                    {addons.map((a, i) => (
                        <div key={i} className={`${styles.card} animate-on-scroll`}>
                            <div className={styles.icon}><i className={a.icon}></i></div>
                            <h4>{a.title}</h4>
                            <p>{a.desc}</p>
                            <span className={styles.price}>{a.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
