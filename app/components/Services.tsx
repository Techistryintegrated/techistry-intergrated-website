import styles from "./Services.module.scss";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and technologies.",
      features: ["React/Next.js", "Node.js", "TypeScript", "Responsive Design"]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS/Android", "Progressive Web Apps"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      features: ["AWS/Azure/GCP", "DevOps", "Microservices", "Serverless"]
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and ML.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Data Analytics"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Risk Assessment"]
    },
    {
      title: "Consulting",
      description: "Strategic technology consulting to guide your digital transformation.",
      features: ["Technology Strategy", "Digital Transformation", "Architecture Design", "Technical Leadership"]
    }
  ];

  return (
    <section className={styles.services} id="services" data-aos="fade-up">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className={styles.servicesHeader} data-aos="fade-up" data-aos-delay="200">
          <h2>Our Services</h2>
          <p>Comprehensive technology solutions tailored to your business needs</p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.serviceCard}
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}