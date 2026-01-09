import { useState } from "react";
import styles from "./Header.module.css";
import { MdLogin } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Product", href: "#", hasDropdown: true },
    { name: "Pricing", href: "#", hasDropdown: false },
    { name: "Resources", href: "#", hasDropdown: true },
    { name: "Company", href: "#", hasDropdown: true },
  ];

  return (
    <>
      <header className={styles.mainHeader}>
        <div className="container">
          <nav className={styles.nav}>
            {/* Logo Section */}
            <a href="/">
              <img
                src="/images/Leadcrm Logo.png"
                alt="LeadCRM Logo"
                className={styles.logoImage}
              />
            </a>

            <div className={styles.menuButtonContainer}>
              {/* Desktop Navigation Links */}
              <div className={styles.navLinksContainer}>
                <ul className={styles.navLinks}>
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className={styles.navLink}>
                        {link.name}
                        {link.hasDropdown && <RiArrowDownSLine size={26} />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className={styles.ctaButtons}>
                <a href="#" className={styles.primaryButton}>
                  Get Your Free Account
                </a>
                <a href="#" className={styles.loginButton}>
                  <MdLogin size={24} />
                  Login
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={styles.menuButton}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={styles.hamburger}>
                <span className={isMenuOpen ? styles.open : ""}></span>
                <span className={isMenuOpen ? styles.open : ""}></span>
                <span className={isMenuOpen ? styles.open : ""}></span>
              </span>
            </button>

            {/* Mobile Navigation */}
            <ul
              className={`${styles.mobileNav} ${
                isMenuOpen ? styles.active : ""
              }`}
            >
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <svg
                        className={styles.chevron}
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 4.5L6 7.5L9 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
              <li className={styles.mobileCta}>
                <a href="#" className={styles.mobilePrimaryButton}>
                  Get Your Free Account
                </a>
                <a href="#" className={styles.mobileLoginButton}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="#3498db"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="12"
                      height="12"
                      rx="2"
                      stroke="#3498db"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
