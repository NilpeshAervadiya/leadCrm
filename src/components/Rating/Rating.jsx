import styles from "./Rating.module.css";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";

const Rating = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“",
      ratingIcon: "/images/capterra-logo 1 (1).png", // You will provide this image
      reviewerImage: "/images/d4e73957eaeaaaec2fcad5a51436a80b65c3dfec.png", // You will provide this image (David Fincher)
      reviewerName: "David Fincher",
      platform: "On Capterra",
    },
    {
      id: 2,
      quote:
        "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!”",
      ratingIcon: "/images/capterra-logo 1 (1).png", // You will provide this image
      reviewerImage: "/images/4eb14b0261802b25e543f0595b8c08e4b4902fcf.png", // You will provide this image (Lillian Williams)
      reviewerName: "Lillian Williams",
      platform: "On Capterra",
    },
    {
      id: 3,
      quote:
        "“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“",
      ratingIcon: "/images/capterra-logo 1 (1).png", // You will provide this image
      reviewerImage: "/images/c2e3da2727ce9a1c90f33014c90379b00de8ed9f.png", // You will provide this image (Michael)
      reviewerName: "Michael",
      platform: "On Capterra",
    },
  ];

  return (
    <>
      <section className={styles.rating}>
        <div className="container">
          {/* Header Section */}
          <div className={styles.headerSection}>
            <h2 className={styles.mainHeading}>
              What people are saying about LeadCRM
            </h2>
            <div className={styles.navigationButtons}>
              <button className={styles.navButton}>
                <FaAngleLeft />
              </button>
              <button className={`${styles.navButton} ${styles.active}`}>
                <FaAngleRight />
              </button>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className={styles.cardsContainer}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  {/* Quote */}
                  <p className={styles.testimonialQuote}>{testimonial.quote}</p>

                  {/* Rating Section */}
                  <div className={styles.ratingSection}>
                    <div className={styles.ratingIcon}>
                      <img
                        src="/images/capterra-logo 1 (1).png"
                        alt="Capterra"
                        className={styles.ratingIconImage}
                      />
                    </div>
                    <div className={styles.starsContainer}>
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className={styles.star} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>

                {/* Reviewer Info */}
                <div className={styles.reviewerSection}>
                  <img
                    src={testimonial.reviewerImage}
                    alt={testimonial.reviewerName}
                    className={styles.reviewerImage}
                  />
                  <div className={styles.reviewerInfo}>
                    <h4 className={styles.reviewerName}>
                      {testimonial.reviewerName}
                    </h4>
                    <p className={styles.reviewerPlatform}>
                      {testimonial.platform}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src="/images/ball.png" alt="ball" className={styles.ballImage} />
      </section>
    </>
  );
};

export default Rating;
