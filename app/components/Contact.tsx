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
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>Get In Touch</h2>
            <p>
              Ready to transform your business with cutting-edge technology? 
              Let&apos;s discuss your project and explore how we can help you achieve your goals.
            </p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <h4>Email</h4>
                <p>techistryintegrated@gmail.com</p>
              </div>
              {/* <div className={styles.contactItem}>
                <h4>Address</h4>
                <p>123 Tech Street<br />Innovation District<br />San Francisco</p>
              </div> */}
            </div>
          </div>
          
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h3>Send us a message</h3>
            
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="text"
                name="company"
                placeholder="Company (Optional)"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}