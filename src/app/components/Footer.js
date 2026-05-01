import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.wave}>
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="currentColor" />
                </svg>
            </div>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <a href="#home" className={styles.logo}>
                            <span className={styles.logoScript}>Emaan</span>
                            <span className={styles.logoSub}>Beautics</span>
                        </a>
                        <p>Professional beauty services for your most cherished moments. Enhancing confidence with every look.</p>
                        <div className={styles.socials}>
                            <a href="https://www.instagram.com/eman_beautics?igsh=NnptbWtmZDViZjVj" className={styles.socialIcon} aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" className={styles.socialIcon} aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className={styles.socialIcon} aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
                            <a href="#" className={styles.socialIcon} aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#testimonials">Reviews</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className={styles.servicesCol}>
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Bridal Makeup</a></li>
                            <li><a href="#services">Engagement Package</a></li>
                            <li><a href="#services">Party Makeup</a></li>
                            <li><a href="#services">Photoshoot Makeup</a></li>
                            <li><a href="#services">HD / Airbrush Makeup</a></li>
                        </ul>
                    </div>
                    <div className={styles.contactCol}>
                        <h4>Contact Info</h4>
                        <ul>
                            <li><i className="fas fa-phone-alt"></i> 03278045325</li>
                            <li><i className="fas fa-envelope"></i> contact@emanbeautics.com</li>
                            <li><i className="fas fa-map-marker-alt"></i> Salon & Home Service Available</li>
                            <li><i className="fas fa-clock"></i> Mon-Sat: 10AM - 8PM</li>
                        </ul>
                    </div>
                </div>
            <div className={styles.bottom}>
  <p>&copy; 2026 Emaan Beautics. All Rights Reserved.</p>

  <p>
    Designed with <i className="fas fa-heart"></i> by {" "}
    <a 
      href="https://wa.me/923088265224" 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.whatsappLink}
    > 
      <i className={`fab fa-whatsapp ${styles.icon}`}></i> {" "}
      Mr Ahmed
    </a>
  </p>
</div>
            </div>
        </footer>
    );
}
