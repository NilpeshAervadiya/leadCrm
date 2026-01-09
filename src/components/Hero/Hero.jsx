import styles from "./Hero.module.css";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: "url(/images/HeroBg.png)",
  };
  // const backgroundLinesImageStyle = {
  //   backgroundImage: "url(/images/lines.png)",
  // };

  return (
    <>
      {/* Top Banner */}

      {/* Main Hero Section */}
      <section className={styles.mainHero} style={backgroundImageStyle}>
        <div className="container">
          <div className={styles.heroContent}>
            <h5 className={styles.heroProfessional}>
              <img
                src="/images/Frame.png"
                alt="Rocket"
                width={20}
                height={20}
              />
              <span className={styles.heroProfessionalText}>
                Thousands of Professional using LeadCRM
              </span>
            </h5>

            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleLine1}>
                LinkedIn CRM Integration
              </span>
              <span className={styles.heroTitleLine2}>
                Capture, Sync and Enrich in{" "}
                <span className={styles.heroTitleHighlight}>
                  Both Ways
                  <img
                    src="/images/line 1.png"
                    alt="Line"
                    className={styles.heroTitleHighlightLine}
                  />
                </span>
              </span>
            </h1>

            <p className={styles.heroDescription}>
              Automatically sync LinkedIn prospects to your CRM and overlay
              existing CRM contacts on LinkedIn profiles. Complete
              bi-directional integration with HubSpot, Salesforce, and
              Pipedrive.
            </p>

            <div className={styles.heroWorkButton}>
              <p className={styles.worksWithText}>Works with</p>
              <div className={styles.partnerLogos}>
                <div className={styles.logoCircle}>
                  <img
                    src="/images/Group 1171278188.png"
                    alt="HubSpot"
                    className={styles.logoImage}
                  />
                </div>
                <div className={styles.logoCircle}>
                  <img
                    src="/images/Group 1171278189.png"
                    alt="Pipedrive"
                    className={styles.logoImage}
                  />
                </div>
                <div className={styles.logoCircle}>
                  <img
                    src="/images/Salesforce Integration.png"
                    alt="Salesforce"
                    className={styles.logoImage}
                  />
                </div>
              </div>
            </div>

            <div className={styles.heroRating}>
              <div className={styles.ratingItem}>
                <div className={styles.ratingIcon}>
                  <img
                    src="/images/capterra-logo 1.png"
                    alt="Chrome Web Store"
                    className={styles.ratingIconImage}
                  />
                </div>
                <div className={styles.ratingStars}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="14.31"
                      height="14.31"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill="#C58920"
                      />
                    </svg>
                  ))}
                </div>
                <span className={styles.ratingText}>5/5</span>
              </div>
              <div className={styles.ratingDivider}></div>
              <div className={styles.ratingItem}>
                <div className={styles.ratingIcon}>
                  <img
                    src="/images/capterra-logo 1 (1).png"
                    alt="Capterra"
                    className={styles.ratingIconImage}
                  />
                </div>
                <div className={styles.ratingStars}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="14.31"
                      height="14.31"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill="#C58920"
                      />
                    </svg>
                  ))}
                </div>
                <span className={styles.ratingText}>5/5</span>
              </div>
            </div>

            <div className={styles.heroAppAvailable}>
              <a href="#" className={styles.chromeStoreButton}>
                <div className={styles.chromeButtonText}>
                  <span className={styles.chromeButtonTop}>Available in</span>
                  <span className={styles.chromeButtonBottom}>
                    Chrome Web Store
                  </span>
                </div>
                <div className={styles.chromeButtonLogoContainer}>
                  <img
                    src="/images/chrome-logo 1.png"
                    alt="Chrome"
                    className={styles.chromeButtonLogo}
                  />
                </div>
              </a>
              <a href="#" className={styles.trialButton}>
                Get a Free Trial Now!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
