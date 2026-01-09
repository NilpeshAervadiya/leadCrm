import styles from "./Support.module.css";

const Support = () => {
  return (
    <>
      <section className={styles.mainSupport}>
        <div className="container">
          <div className={styles.headerSection}>
            <h2 className={styles.mainHeading}>Our Supported LeadCRM</h2>
            <p className={styles.subHeading}>
              LeadCRM provides Native Integrations with popular CRM tools to
              make the most out of your LinkedIn prospecting. We don’t want you
              to miss any revenue opportunity on the internet!
            </p>
          </div>

          <div className={styles.imgContainer}>
            <img
              src="/images/leadcrm-supported-1536x636.png"
              alt="Support"
              className={styles.supportImg}
            />
          </div>

          <div className={styles.integratecrmSection}>
            <button className={styles.integrateCRMNowButton}>
              Lets Integrate your CRM Now!
            </button>
          </div>
        </div>

        <img
          src="/images/banner-thumb-7 1.png"
          alt="msg"
          className={styles.msgImage}
        />

        <div className={styles.chatImageContainer}>
          <img
            src="/images/Collaboration.png"
            alt="chat"
            className={styles.chatImage}
          />
        </div>
      </section>
    </>
  );
};

export default Support;
