import { FaArrowRight } from "react-icons/fa";
import styles from "./UseCrm.module.css";
const UseCrm = () => {
  const backgoundImageStyle = {
    backgroundImage: "url(/images/useCrmBg.png)",
  };
  const useCrmImageStyle = {
    backgroundImage: "url(/images/Product-hunt-banner-image.webp)",
  };
  return (
    <>
      <section className={styles.mainUseCrm} style={backgoundImageStyle}>
        <div className="container">
          <div className={styles.headerSection}>
            <h2 className={styles.mainHeading}>
              Join Thousands of Professionals Using LeadCRM
            </h2>
          </div>

          <div className={styles.useCrmContainer} style={useCrmImageStyle}>
            <h2 className={styles.useCrmHeading}>
              Your LinkedIn Powerhouse for Smarter Lead Management
            </h2>
          </div>

          <div className={styles.getstartedSection}>
            <button className={styles.getStartedButton}>
              Get Started Today
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseCrm;
