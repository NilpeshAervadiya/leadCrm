import styles from "./DailyChallenges.module.css";

const DailyChallenges = () => {
  const withoutChallenges = [
    {
      id: 1,
      stat: "3+ Hours wasted daily",
      title: "Manual Data Entry",
      description:
        "Copying LinkedIn contacts to CRM manually plus losing conversation history",
    },
    {
      id: 2,
      stat: "60% Data Incomplete",
      title: "Incomplete Data",
      description:
        "LinkedIn profiles missing Email and Phones from 700M+ Database",
    },
    {
      id: 3,
      stat: "Zero context available",
      title: "No CRM Visibility",
      description:
        "Can't see existing CRM contacts when browsing LinkedIn profiles",
    },
    {
      id: 4,
      stat: "No smart assistance",
      title: "Limited Productivity",
      description:
        "Writing messages manually plus no AI assistant for reply, Invite or comments.",
    },
  ];

  const withBenefits = [
    {
      id: 1,
      icon: "/images/17b1d426324f01617673c4a34d34abc220e408c8.png",
      title: "Complete Bi-Directional Sync",
      description:
        "Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.",
    },
    {
      id: 2,
      icon: "/images/60231ad522b191760ea117478624d833265ac8b1.png",
      title: "700M+ Contacts + Enrichment",
      description:
        "Get verified emails and phone numbers from a vast global database.",
    },
    {
      id: 3,
      icon: "/images/e686e5c58ed723ceb50e33751b1dba7917c240a1.png",
      title: "CRM Overlay on LinkedIn",
      description:
        "See full CRM insights directly on LinkedIn profiles without switching tabs.",
    },
    {
      id: 4,
      icon: "/images/acec696b50d8f43b75003f9809bfdf010b045873.png",
      title: "AI Response + Templates + Bulk Exports",
      description:
        "Save time with AI-crafted replies, pre-built templates, and one-click data exports.",
    },
  ];

  return (
    <section className={styles.dailyChallenges}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          Every LinkedIn Prospector faces these daily challenges
        </h2>

        <div className={styles.comparisonContainer}>
          {/* Without LeadCRM Section */}
          <div className={styles.withoutSection}>
            <div className={styles.screenshotContainer}>
              <img
                src="/images/Frame 1171278223.png"
                alt="Without LeadCRM"
                className={styles.screenshot}
              />
            </div>

            <h4 className={styles.dailyChallengesHeading}>Without LeadCRM</h4>

            <div className={styles.challengesList}>
              {withoutChallenges.map((challenge) => (
                <div key={challenge.id} className={styles.challengeItem}>
                  <span className={styles.xIcon}>✕</span>
                  <div className={styles.challengeContent}>
                    <div className={styles.challengeHeader}>
                      <h4 className={styles.challengeTitle}>
                        {challenge.title}
                      </h4>
                      <span className={styles.challengeStat}>
                        {challenge.stat}
                      </span>
                    </div>
                    <p className={styles.challengeDescription}>
                      {challenge.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VS Divider */}
          <div className={styles.vsDivider}>
            <div className={styles.vsLineTop}></div>
            <span className={styles.vsText}>VS</span>
            <div className={styles.vsLineBottom}></div>
          </div>

          <div
            className={styles.withoutSection}
            style={{
              background: "#FFFFFF",
              boxShadow: "0 5px 30px rgba(13, 72, 141, 0.10)",
            }}
          >
            <div className={styles.screenshotContainer}>
              <img
                src="/images/Frame 1171278228.png"
                alt="Without LeadCRM"
                className={styles.screenshot}
              />
            </div>

            <div className={styles.withCRM}>
              <h4
                className={styles.dailyChallengesHeading}
                style={{ color: "#097737" }}
              >
                With LeadCRM
              </h4>
              <img
                src="/images/89bc74561f4769c4dcf3fb36541ab3e50522a90e.png"
                alt="Without LeadCRM"
                className={styles.withCrmImg}
              />

              <span
                className={styles.challengeStat}
                style={{ background: "#E6FFF1", color: "#097737" }}
              >
                4+ Hours/day Saved
              </span>
            </div>

            <div className={styles.challengesList} style={{ gap: "28px" }}>
              {withBenefits.map((challenge) => (
                <div key={challenge.id} className={styles.challengeItem}>
                  <img
                    src={challenge.icon}
                    alt={challenge.title}
                    className={styles.challengeImage}
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  />{" "}
                  <div className={styles.challengeContent}>
                    <div className={styles.challengeHeader}>
                      <h4 className={styles.challengeTitle}>
                        {challenge.title}
                      </h4>
                    </div>
                    <p className={styles.challengeDescription}>
                      {challenge.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <button className={styles.ctaButton}>Start Using LeadCRM Now</button>
          <div className={styles.ctaImageContainer}>
            <img
              src="/images/Group 2147224137.png"
              alt="Save 40+ hours every Month"
              className={styles.ctaImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyChallenges;
