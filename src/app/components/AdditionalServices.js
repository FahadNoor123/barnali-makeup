import styles from './AdditionalServices.module.css';

const addons = [
    { icon: 'fas fa-cut', title: 'Hair Styling', desc: 'Elegant updos, curls, braids, and sleek styles for every occasion.', price: 'From $60' },
    { icon: 'fas fa-vest', title: 'Saree / Dupatta Draping', desc: 'Expert draping for a perfect silhouette on your special day.', price: 'From $30' },
    { icon: 'fas fa-eye', title: 'Eyelash Application', desc: 'Premium strip or individual lashes for dramatic or natural effects.', price: 'From $20' },
    { icon: 'fas fa-palette', title: 'Makeup Trials', desc: 'Pre-event trials to perfect your look before the big day.', price: 'From $80' },
    { icon: 'fas fa-home', title: 'Home Service', desc: 'Enjoy a luxurious makeup experience in the comfort of your home.', price: 'Available' },
];

export default function AdditionalServices() {
    return (
        <section className={`${styles.section} section`}>
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-label">More Offerings</span>
                    <h2 className="section-title">Additional <span className="accent">Services</span></h2>
                    <p className="section-subtitle">Complement your makeup with these premium add-on services for a complete look.</p>
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
