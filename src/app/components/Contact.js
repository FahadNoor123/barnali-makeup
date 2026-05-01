'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

   const handleSubmit = (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const phone = e.target.phone.value;
  const email = e.target.email.value;
  const service = e.target.package.value; // 🔥 FIXED
  const message = e.target.message.value;

  const text = `Hi, I want to book an appointment:
Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}
Message: ${message}`;

  const url = `https://wa.me/03278045325?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
};
    return (
        <section id="contact" className={`${styles.contact} section`}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={`${styles.info} animate-on-scroll`}>
                        <span className="section-label">Get in Touch</span>
                        <h2 className="section-title">Book Your <span className="accent">Appointment</span></h2>
                        <p className={styles.intro}>Ready to look and feel your best? Fill out the booking form and I&apos;ll get back to you within 24 hours to confirm your appointment.</p>
                        <div className={styles.details}>
                            <div className={styles.item}>
                                <i className="fas fa-phone-alt"></i>
                                <div>
                                    <h5>Phone</h5>
                                    <p>03278045325</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h5>Email</h5>
                                    <p>contact@emanbeautics.com</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h5>Location</h5>
                                    <p>Professional salon services with home visits available.</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <i className="fas fa-clock"></i>
                                <div>
                                    <h5>Business Hours</h5>
                                    <p>Mon - Sat: 10:00 AM - 8:00 PM<br />Sun: By Appointment Only</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.socials}>
                            <a href="https://www.instagram.com/eman_beautics?igsh=NnptbWtmZDViZjVj" className={styles.socialIcon} aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" className={styles.socialIcon} aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className={styles.socialIcon} aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
                            <a 
                                href="https://wa.me/03278045325" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.socialIcon} 
                                aria-label="WhatsApp"
                                >
                                <i className="fab fa-whatsapp"></i>
                                </a>
                        </div>
                    </div>
                    <div className={`${styles.formWrap} animate-on-scroll`}>
                        {submitted ? (
                            <div className={styles.success}>
                                <i className="fas fa-check-circle"></i>
                                <h3>Thank You!</h3>
                                <p>Your booking request has been sent successfully. I&apos;ll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <h3>Booking Form</h3>
                                <div className={styles.row}>
                                    <div className={styles.group}>
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" placeholder="Your full name" required />
                                    </div>
                                    <div className={styles.group}>
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" placeholder="+1 (555) 000-0000" required />
                                    </div>
                                </div>
                                <div className={styles.group}>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="you@example.com" required />
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.group}>
                                        <label htmlFor="eventDate">Event Date</label>
                                        <input type="date" id="eventDate" required />
                                    </div>
                                    <div className={styles.group}>
                                        <label htmlFor="package">Select Package</label>
                                        <select id="package" required defaultValue="">
                                            <option value="" disabled>Choose a package</option>
                                            <option value="Whitening Facial - Rs 3,000">Whitening Facial - Rs 3,000</option>
                                            <option value="Skin Polish with Hand & Feet - Rs 1,500">Skin Polish with Hand & Feet - Rs 1,500</option>
                                            <option value="Full Face Waxing - Rs 800">Full Face Waxing - Rs 800</option>
                                            <option value="Manicure & Pedicure - Rs 3,000">Manicure & Pedicure - Rs 3,000</option>
                                            <option value="Mehndi Full Hands - Rs 1,000">Mehndi Full Hands - Rs 1,000</option>
                                            <option value="Bridal Mehndi - Rs 5,000">Bridal Mehndi - Rs 5,000</option>
                                            <option value="Bridal Makeup - Rs 20,000">Bridal Makeup - Rs 20,000</option>
                                            <option value="Engagement Makeup - Rs 5,000">Engagement Makeup - Rs 5,000</option>
                                            <option value="Nikah Makeup - Rs 7,000">Nikah Makeup - Rs 7,000</option>
                                            <option value="Party Makeup - Rs 3,000">Party Makeup - Rs 3,000</option>
                                            <option value="Simple Hair Styling - Rs 500">Simple Hair Styling - Rs 500</option>
                                            <option value="Blowdryer Styling - Rs 1,500">Blowdryer Styling - Rs 1,500</option>
                                            <option value="Keratin / Botox / Nanoplastia">Keratin / Botox / Nanoplastia</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={styles.group}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows={4} placeholder="Tell me about your event, outfit color, preferred style, etc."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    <i className="fas fa-calendar-check"></i> Send Booking Request
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
