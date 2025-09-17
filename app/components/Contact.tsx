"use client";

import { useState } from "react";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className={styles.contact} id="contact" data-aos="fade-up">
      <div className="container">
        <div className={styles.contactContent}>
          <div className={styles.contactInfo} data-aos="fade-right">
            <h2>Get In Touch</h2>
            <p>
              Ready to transform your business with cutting-edge technology? 
              Let&apos;s discuss your project and explore how we can help you achieve your goals.
            </p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem} data-aos="fade-up" data-aos-delay="100">
                <h4>Email</h4>
                <p>techistryintegrated@gmail.com</p>
              </div>
              <div className={styles.contactItem} data-aos="fade-up" data-aos-delay="200">
                <h4>Address</h4>
                <p>14, Samuel Awoniyi, Opebi, Ikeja, Lagos STate, Nigeria</p>
              </div>
              <div className={styles.contactItem} data-aos="fade-up" data-aos-delay="300">
                <h4>Whatsapp</h4>
                <p>+234 705 023 2555</p>
              </div>
            </div>
          </div>
          
          <form className={styles.contactForm} onSubmit={handleSubmit} data-aos="fade-left">
            <h3>Send us a message</h3>
            
            <div className={styles.formGroup} data-aos="fade-up" data-aos-delay="100">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup} data-aos="fade-up" data-aos-delay="200">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup} data-aos="fade-up" data-aos-delay="300">
              <input
                type="text"
                name="company"
                placeholder="Company (Optional)"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <div className={styles.formGroup} data-aos="fade-up" data-aos-delay="400">
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" data-aos="zoom-in" data-aos-delay="500">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}