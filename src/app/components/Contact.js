'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
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
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h5>Email</h5>
                                    <p>hello@glamourbyaria.com</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h5>Location</h5>
                                    <p>Serving Greater Metro Area<br />Home service available</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <i className="fas fa-clock"></i>
                                <div>
                                    <h5>Business Hours</h5>
                                    <p>Mon - Sat: 9:00 AM - 7:00 PM<br />Sun: By Appointment Only</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialIcon} aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" className={styles.socialIcon} aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className={styles.socialIcon} aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
                            <a href="#" className={styles.socialIcon} aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
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
                                            <option value="bridal">Bridal Makeup - $350</option>
                                            <option value="engagement">Engagement Package - $250</option>
                                            <option value="party">Party Makeup - $150</option>
                                            <option value="photoshoot">Photoshoot Makeup - $200</option>
                                            <option value="hd">HD / Airbrush Makeup - $180</option>
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
