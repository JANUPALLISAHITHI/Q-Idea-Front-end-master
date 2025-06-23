import React from 'react';
import styles from '../styles/HelpDesk.module.css';

const HelpDesk = () => {
  const topCategories = [
    "Subscription, Plans and Pricing",
    "Accessing JioHotstar",
    "Supported Devices",
    "Our Features",
    "Help with your account"
  ];

  const topQueries = [
    "JioHotstar subscription plans",
    "I have done the recharge with JIO/Airtel/VI/BSNL but my JioHotstar subscription is not active.",
    "I have paid already; why am I being asked to pay again?",
    "I have a mobile plan but being asked to pay/upgrade when watching on TV",
    "I’ve changed my phone number. How can I access my subscription?"
  ];

  const categories = [
    {
      title: "Buffering & Quality related",
      links: [
        "Minimum Bandwidth recommended to stream content on JioHotstar",
        "Improve your internet connection",
        "Check video and network performance on your device",
        "Facing buffer on Samsung TV",
        "Why is there a delay between JioHotstar and the Live feed?"
      ]
    },
    {
      title: "Billing Help",
      links: [
        "Are the charges inclusive of taxes?",
        "Where can I see my billing history?",
        "How can I get my invoice?",
        "Review and Print/Save iTunes Subscription Invoices",
        "I do not recognise these charges"
      ]
    },
    {
      title: "Content related",
      links: [
        "Some music pieces are removed from content in the episode on JioHotstar",
        "Why are some movies on Star India channels not a part of JioHotstar",
        "Can I get a refund if content expires before I watch it"
      ]
    },
    {
      title: "Cancellations & Refunds",
      links: [
        "Issue a refund on Airtel Plan; I now bought a JioHotstar Premium Plan",
        "Issue a refund on Jio Plan; I now bought a JioHotstar Premium Plan",
        "Issue a refund on Flipkart Plan; I now bought a JioHotstar Premium Plan"
      ]
    },
    {
      title: "Terms of Use and Privacy Policy",
      links: [
        "Our Privacy Policy",
        "Free Trial Terms and Conditions",
        "Complimentary Living Room Device Access Terms and Conditions",
        "JioHotstar Updates Now Via Whatsapp!",
        "Our Terms of Use"
      ]
    },
    {
      title: "Trouble on devices",
      links: [
        "ERR_PB_1401 while watching LIVE content",
        "There is no image on the video",
        "A secure connection to the JioHotstar service cannot be made. (PB_IOS_NM-1200)",
        "Something went wrong. Please try again (PB_IOS_AV-11800)"
      ]
    }
  ];

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.heading}>How can we help you today?</h1>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search queries or error code"
            className={styles.searchInput}
          />
        </div>
        <div className={styles.topSearches}>
          <span>Top Searches:</span>
          <a href="#">Login Troubles ↗</a>
          <a href="#">Billing Issues ↗</a>
          <a href="#">Can’t find desired content ↗</a>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <div className={styles.sectionGrid}>
            <div className={styles.cardBox}>
              <h2 className={styles.sectionHeading}>Top Categories</h2>
              <ul className={styles.list}>
                {topCategories.map(item => (
                  <li key={item}><a href="#">{item} →</a></li>
                ))}
              </ul>
            </div>
            <div className={styles.cardBox}>
              <h2 className={styles.sectionHeading}>Top Queries</h2>
              <ul className={styles.list}>
                {topQueries.map(item => (
                  <li key={item}><a href="#">{item} →</a></li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className={styles.gridHeading}>All Categories</h2>
          <div className={styles.categoryGrid}>
            {categories.map(category => (
              <div key={category.title} className={styles.categoryCard}>
                <h3>
                  {category.title}
                  <a href="#" className={styles.viewAllLink}>View all</a>
                </h3>
                <ul>
                  {category.links.map(link => (
                    <li key={link}><a href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Section at Bottom */}
      <div className={styles.supportSection}>
        <div className={styles.supportBox}>
          <h2>Need more help?</h2>
          <p>Our support team is here for you. Reach out to us anytime.</p>
          <div className={styles.supportActions}>
            <button className={styles.callButton}>📞 Call Us</button>
            <button className={styles.chatButton}>💬 Chat with Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
