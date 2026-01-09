import { FaArrowRight } from "react-icons/fa";
import styles from "./HowItWork.module.css";

const HowItWork = () => {
  const backgoundImageStyle = {
    backgroundImage: "url(/images/LinesBox.png)",
  };

  const steps = [
    {
      id: 1,
      number: "1",
      title: "Install the Extension",
      description:
        "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
      image: "/images/howtoworkcard1.png", // You will provide this image
    },
    {
      id: 2,
      number: "2",
      title: "Browse LinkedIn",
      description:
        "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
      image: "/images/howtoworkcard2.png", // You will provide this image
    },
    {
      id: 3,
      number: "3",
      title: "Get Enriched Data",
      description:
        "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
      image: "/images/howtoworkcard3.png", // You will provide this image
    },
    {
      id: 4,
      number: "4",
      title: "Sync to CRM Instantly",
      description:
        "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow ups.",
      image: "/images/howtoworkcard4.png", // You will provide this image
    },
  ];

  return (
    <>
      <section className={styles.howItWork} style={backgoundImageStyle}>
        <div className="container">
          <div className={styles.contentWrapper}>
            {/* Header Section */}
            <div className={styles.headerSection}>
              <h2 className={styles.mainHeading}>How it Works</h2>
              <p className={styles.mainDescription}>
                From setup to success in <span>4 simple steps</span>
              </p>
            </div>

            {/* Steps Cards */}
            <div className={styles.stepsContainer}>
              {steps.map((step) => (
                <div key={step.id} className={styles.stepWrapper}>
                  <div className={styles.stepCard}>
                    <div className={styles.stepDescriptionWrapper}>
                      <div className={styles.stepNumber}>{step.number}</div>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDescription}>
                        {step.description}
                      </p>
                    </div>
                    <div className={styles.stepImageContainer}>
                      <img
                        src={step.image}
                        alt={step.title}
                        className={styles.stepImage}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className={styles.howItWorkConnectImageContainer}>
                <img
                  src="/images/HowToWorkConnect.png"
                  alt="How to Work Connect"
                  className={styles.howItWorkConnectImage}
                />
              </div>
            </div>
          </div>

          <div className={styles.tryleadcrmSection}>
            <button className={styles.tryLeadCRMNowButton}>
              Try LeadCRM Now
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWork;
