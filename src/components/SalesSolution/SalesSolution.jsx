import { useState } from "react";
import styles from "./SalesSolution.module.css";

const SalesSolution = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "CRM Data Enrichment",
      icon: "/images/201d689debd5b20c5bf4f606da681accea090bf7.png", // You will provide this image
    },
    {
      id: 2,
      title: "CRM Data Sync",
      icon: "/images/730fa30c0870e5663abff213bc6047b6edd9c37e.png", // You will provide this image
    },
    {
      id: 3,
      title: "Bulk Export & Enrichment",
      icon: "/images/14b7d9142d74985b63e1d2f877c5bbb66a57d639.png", // You will provide this image
    },
    {
      id: 4,
      title: "AI Productivity",
      icon: "/images/acec696b50d8f43b75003f9809bfdf010b045873.png", // You will provide this image
    },
  ];

  return (
    <>
      <section className={styles.mainSalesSolution}>
        <div className="container">
          {/* Header Section */}
          <div className={styles.headerSection}>
            <h2 className={styles.mainHeading}>
              Complete LinkedIn Sales Solutions
            </h2>
            <p className={styles.subHeading}>
              Everything you need for professional LinkedIn prospecting
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className={styles.tabsContainer}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${
                  activeTab === tab.id ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <img
                  src={tab.icon}
                  alt={tab.title}
                  className={styles.tabIcon}
                />
                <span className={styles.tabTitle}>{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className={styles.contentSection}>
            <p className={styles.introText}>
              It’s hard to find the accurate contact data for every prospects by
              <span className={styles.badge}>Incomplete Data</span>
            </p>

            {/* Two Cards Container */}
            <div className={styles.cardsContainer}>
              {/* Left Card */}
              <div className={styles.leftCard}>
                <h3 className={styles.cardHeading}>
                  Here is how{" "}
                  <span className={styles.cardHeadingHighlight}>
                    LeadCRM tackles
                  </span>{" "}
                  that situation.
                </h3>
                <p className={styles.cardGreenText}>
                  Try LeadCRM Data Enrichment &gt;
                </p>

                <div className={styles.smallCardsContainer}>
                  {/* First Small Card */}
                  <div className={styles.smallCard}>
                    <div className={styles.smallCardHeader}>
                      <img
                        src="/images/verfied-email.png"
                        alt="Verified"
                        className={styles.smallCardIcon}
                      />
                      <h4 className={styles.smallCardTitle}>
                        Verified Email & Phone
                      </h4>
                    </div>
                    <img
                      src="/images/Group 2147224128.png"
                      alt="Verified Email & Phone Card"
                      className={styles.smallCardImage}
                    />
                  </div>

                  {/* Second Small Card */}
                  <div className={styles.smallCard}>
                    <div className={styles.smallCardHeader}>
                      <img
                        src="/images/Frame 1171278123 (1).png"
                        alt="Search"
                        className={styles.smallCardIcon}
                      />
                      <h4 className={styles.smallCardTitle}>
                        40+ Search Filters
                      </h4>
                    </div>
                    <img
                      src="/images/Frame 1171277486.png"
                      alt="40+ Search Filters Card"
                      className={styles.smallCardImage}
                    />
                  </div>
                </div>
              </div>

              {/* Right Card */}
              <div className={styles.rightCard}>
                <h3 className={styles.cardHeading}>
                  If it does not works for you! try our{" "}
                  <span className={styles.highlightText}>
                    Advanced Waterfall Enrichment
                  </span>{" "}
                  &gt;
                </h3>

                <div className={styles.cardImagesContainer}>
                  <img
                    src="/images/CRM-Data-Enrichment-1024x632.webp"
                    alt="Advanced Waterfall Enrichment"
                    className={styles.cardImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/Group 2147224119.png"
          alt="robot"
          className={styles.robotImage}
        />
      </section>
    </>
  );
};

export default SalesSolution;
