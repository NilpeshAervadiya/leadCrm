import styles from "./Slider.module.css";

const Slider = () => {
  const features = [
    {
      id: 1,
      label: "Advanced",
      title: "AI Productivity",
      subtitle: "",
      icon: "/images/acec696b50d8f43b75003f9809bfdf010b045873.png",
      iconWidth: 40,
      iconHeight: 40,
    },
    {
      id: 2,
      label: "Seamless",
      title: "Deal Management",
      subtitle: "",
      icon: "/images/3c2aceedcd416d8e8658e851a4eeae71852957bb.png",
      iconWidth: 40,
      iconHeight: 40,
    },
    {
      id: 3,
      label: "Advanced",
      title: "Waterfall Enrichment",
      subtitle: "",
      icon: "/images/beb1b27a36ceb446629310e785472656fc261eb2.png",
      iconWidth: 40,
      iconHeight: 40,
    },
    {
      id: 4,
      label: "",
      title: "Bulk Export &",
      subtitle: "Enrich",
      icon: "/images/14b7d9142d74985b63e1d2f877c5bbb66a57d639.png",
      iconWidth: 40,
      iconHeight: 40,
    },
    {
      id: 5,
      label: "Instant",
      title: "Email Finder",
      subtitle: "",
      icon: "/images/23f6bb7cd2f8b84fefad45aae0e322552e351428.png",
      iconWidth: 40,
      iconHeight: 40,
    },
    {
      id: 6,
      label: "",
      title: "Custom Field",
      subtitle: "Mapping",
      icon: "/images/a1facf555e42e3a1135e0576b085e2fba73a0817.png",
      iconWidth: 47.57,
      iconHeight: 47.57,
    },
    {
      id: 7,
      label: "",
      title: "One click push",
      subtitle: "to CRM",
      icon: "/images/1ea3389c89439800d4ac9422c0bb7a3c4843405e.png",
      iconWidth: 38.36,
      iconHeight: 41,
    },
    {
      id: 8,
      label: "Access to",
      title: "700M+ Contacts",
      subtitle: "",
      icon: "/images/60231ad522b191760ea117478624d833265ac8b1.png",
      iconWidth: 58.15,
      iconHeight: 58.15,
    },
  ];

  // Create multiple sets for seamless infinite scroll
  const sliderItems = [];
  for (let setIndex = 0; setIndex < 3; setIndex++) {
    // sliderItems.push(
    //   <span key={`crm-${setIndex}`} className={styles.crmLabel}>
    //     to CRM
    //   </span>
    // );
    features.forEach((feature) => {
      sliderItems.push(
        <section
          key={`${feature.id}-${setIndex}`}
          className={styles.featureItem}
        >
          <div
            className={styles.featureIcon}
            style={{
              width: `${feature.iconWidth}px`,
              height: `${feature.iconHeight}px`,
            }}
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className={styles.featureIconImage}
              style={{
                width: `${feature.iconWidth}px`,
                height: `${feature.iconHeight}px`,
              }}
            />
          </div>
          <div className={styles.featureText}>
            {feature.label && (
              <span className={styles.featureLabel}>{feature.label} </span>
            )}
            <span className={styles.featureTitle}>{feature.title}</span>
            {feature.subtitle && (
              <span className={styles.featureSubtitle}>
                {" "}
                {feature.subtitle}
              </span>
            )}
          </div>
        </section>
      );
    });
  }

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderTrack}>{sliderItems}</div>
    </div>
  );
};

export default Slider;
