import styles from "./Products.module.scss";

interface ProductCardProps {
  title: string;
  description: string;
  status: "live" | "development";
  url?: string;
  icon: string;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  status,
  url,
  icon,
  features,
}) => {
  return (
    <div className={styles.productCard} data-aos="fade-up">
      <div className={styles.cardHeader}>
        <div className={styles.iconContainer}>
          <span className={styles.icon}>{icon}</span>
        </div>
        <div className={styles.statusBadge}>
          <span className={`${styles.status} ${styles[status]}`}>
            {status === "live" ? "Live" : "In Development"}
          </span>
        </div>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productDescription}>{description}</p>

        <div className={styles.featuresContainer}>
          <h4 className={styles.featuresTitle}>Key Features:</h4>
          <ul className={styles.featuresList}>
            {features.map((feature, index) => (
              <li
                key={index}
                className={styles.featureItem}
                data-aos="fade-right"
              >
                <span className={styles.checkIcon}>✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.cardFooter}>
        {status === "live" && url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.primaryButton} btn btn-primary`}
            data-aos="zoom-in"
          >
            Visit Website
            <span className={styles.arrowIcon}>→</span>
          </a>
        ) : (
          <button
            className={styles.secondaryButton}
            disabled
            data-aos="zoom-in"
          >
            Coming Soon
          </button>
        )}
      </div>
    </div>
  );
};

const Product: React.FC = () => {
  const products = [
    {
      title: "SporTellex",
      description:
        "Sportellex is a fast-moving sports hub that blends headline-driven football coverage, real-time match updates, and comprehensive soccer data to create an engaging experience for football fans worldwide.",
      status: "live" as const,
      url: "https://www.sportellex.com",
      icon: "⚽",
      features: [
        "real-time football news feed",
        "transfer rumours and breaking updates",
        "match previews and live narratives",
        "league-specific content segmentation",
        "opinion/editorial articles",
      ],
    },
   
  ];

  return (
    <section className={styles.productSection} id="products" data-aos="fade-in">
      <div className={styles.container}>
        <div className={styles.sectionHeader} data-aos="fade-down">
          <h2 className={styles.sectionTitle}>Our Products</h2>
          <p className={styles.sectionSubtitle}>
            Discover our innovative solutions designed to enhance your digital
            experience
          </p>
        </div>

        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              status={product.status}
              url={product.url}
              icon={product.icon}
              features={product.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
