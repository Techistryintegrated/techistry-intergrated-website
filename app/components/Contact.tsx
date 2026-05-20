"use client";

import { useForm, ValidationError } from "@formspree/react";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [state, handleSubmit] = useForm("mvzykgdq");

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

            {state.succeeded ? (
              <p className={styles.successMessage} role="status">
                Thanks for reaching out. We&apos;ll get back to you soon.
              </p>
            ) : null}

            {state.errors ? (
              <p className={styles.formError} role="alert">
                Something went wrong while sending your message. Please try again.
              </p>
            ) : null}
            
            <div className={styles.formGroup} data-aos="fade-up" data-aos-delay="100">
              <label htmlFor="name" className={styles.visuallyHidden}>
                Your name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                autoComplete="name"
              />
            </div>
            
            <div className={styles.formGroup} data-aos="fade-up" data-aos-delay="200">
              <label htmlFor="email" className={styles.visuallyHidden}>
                Your email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
                autoComplete="email"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            
            <div className={styles.formGroup} data-aos="fade-up" data-aos-delay="300">
              <label htmlFor="company" className={styles.visuallyHidden}>
                Company
              </label>
              <input
                id="company"
                type="text"
                name="company"
                placeholder="Company (Optional)"
                autoComplete="organization"
              />
            </div>
            
            <div className={styles.formGroup} data-aos="fade-up" data-aos-delay="400">
              <label htmlFor="message" className={styles.visuallyHidden}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows={5}
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            
            <button
              type="submit"
              className="btn btn-primary"
              data-aos="zoom-in"
              data-aos-delay="500"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}