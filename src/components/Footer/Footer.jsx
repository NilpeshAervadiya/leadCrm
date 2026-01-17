import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className={styles.mainFooter}>
        <div className="container">
          {/* Main Footer Content */}
          <div className={styles.footerContent}>
            {/* First Box - Logo and Social Media */}
            <div className={`${styles.footerBox} ${styles.firstBox}`}>
              <div>
                <img
                  src="/images/Leadcrm Logo.png"
                  alt="LeadCRM Logo"
                  className={styles.logo}
                />
              </div>
              <p className={styles.tagline}>
                LeadCRM is LinkedIn integration tool for your CRM.
              </p>
              <div className={styles.socialIcons}>
                <a href="/" className={styles.socialIcon}>
                  <FaFacebook />
                </a>
                <a href="/" className={styles.socialIcon}>
                  <FaTwitter />
                </a>
                <a href="/" className={styles.socialIcon}>
                  <FaLinkedin />
                </a>
                <a href="/" className={styles.socialIcon}>
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Second Box - Integrations */}
            <div className={styles.footerBox}>
              <h4 className={styles.boxHeading}>Integrations</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="/">HubSpot</a>
                </li>
                <li>
                  <a href="/">Salesforce</a>
                </li>
                <li>
                  <a href="/">Pipedrive</a>
                </li>
                <li>
                  <a href="/">Close.io</a>
                  <span className={styles.badge}>Coming Soon</span>
                </li>
                <li>
                  <a href="/">Insightly</a>
                  <span className={styles.badge}>Coming Soon</span>
                </li>
              </ul>
            </div>

            {/* Third Box - Alternative */}
            <div className={styles.footerBox}>
              <h4 className={styles.boxHeading}>Alternative</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="/">Surfe VS LeadCRM</a>
                </li>
                <li>
                  <a href="/">Linkmatch Alternative</a>
                </li>
              </ul>
            </div>

            {/* Fourth Box - Legal */}
            <div className={styles.footerBox}>
              <h4 className={styles.boxHeading}>Legal</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Terms of Use</a>
                </li>
              </ul>
            </div>

            {/* Fifth Box - Contact Us */}
            <div className={`${styles.footerBox} ${styles.lastBox}`}>
              <h4 className={styles.boxHeading}>Contact Us</h4>
              <ul className={styles.contactList}>
                <li>
                  <img
                    src="/images/Icon.png"
                    alt="Email"
                    className={styles.contactIcon}
                  />
                  <a href="mailto:support@leadcrm.io">support@leadcrm.io</a>
                </li>
                <li>
                  <img
                    src="/images/Icon (1).png"
                    alt="Email"
                    className={styles.contactIcon}
                  />
                  <a href="tel:+12315387466">+1 231-538-7466</a>
                </li>
                <li>
                  <img
                    src="/images/SVG.png"
                    alt="Email"
                    className={styles.contactIcon}
                  />
                  <a href="/">Help Center</a>
                </li>
              </ul>

              {/* Chrome Badge */}
              <div className={styles.chromeBadge}>
                <div className={styles.chromeTextContainer}>
                  <span className={styles.availableText}>Available in</span>
                  <span className={styles.chromeText}>Chrome</span>
                </div>
                <div className={styles.chromeLogoContainer}>
                  <img
                    src="/images/chrome-logo 1.png"
                    alt="Chrome"
                    className={styles.chromeLogo}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={styles.footerBottom}>
            <p className={styles.disclaimer}>
              Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
              LinkedIn(tm) logos and trademarks displayed on this tool are
              property of LinkedIn. LeadCRM is distributed AS IS. Your use of
              LeadCRM is at your own risk.
            </p>
            <div className={styles.divider}></div>
            <p className={styles.copyright}>
              Copyright © 2025 LeadCRM. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
