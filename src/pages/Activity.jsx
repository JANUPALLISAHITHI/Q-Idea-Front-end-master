import React from 'react';
import styles from '../styles/ActivityPage.module.css';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import {
  FaHeart,
  FaCommentDots,
  FaTags,
  FaStar,
  FaArchive,
  FaTrashAlt,
} from 'react-icons/fa';

const activityData = [
  { day: 'Mon', usage: 30 },
  { day: 'Tue', usage: 45 },
  { day: 'Wed', usage: 40 },
  { day: 'Thu', usage: 60 },
  { day: 'Fri', usage: 55 },
  { day: 'Sat', usage: 80 },
  { day: 'Sun', usage: 50 }
];

const recentActivity = [
  { user: 'JohnDoe', action: 'liked your post', time: '2h ago' },
  { user: 'JaneSmith', action: 'started following you', time: '5h ago' },
  { user: 'Xavier99', action: 'commented on your reel', time: '1d ago' },
  { user: 'PriyaMehra', action: 'liked your story', time: '2d ago' },
  { user: 'RaviK', action: 'mentioned you in a comment', time: '3d ago' }
];

const sections = [
  {
    key: 'likedIdeas',
    title: 'Liked Ideas',
    icon: <FaHeart className={styles.sectionIcon} />,
    items: [
      "Improve UI design for dashboard",
      "Add dark mode toggle",
      "Optimize image loading speed"
    ]
  },
  {
    key: 'commentedIdeas',
    title: 'Commented Ideas',
    icon: <FaCommentDots className={styles.sectionIcon} />,
    items: [
      "New feature proposal feedback",
      "Bug in login flow discussion",
      "Mobile responsiveness suggestions"
    ]
  },
  {
    key: 'tags',
    title: 'Tags',
    icon: <FaTags className={styles.sectionIcon} />,
    items: ["UI", "Performance", "Accessibility", "Backend", "React"]
  },
  {
    key: 'reviews',
    title: 'Reviews',
    icon: <FaStar className={styles.sectionIcon} />,
    items: [
      "UX improvements needed",
      "Excellent performance review",
      "Add unit tests feedback"
    ]
  },
  {
    key: 'archived',
    title: 'Archived',
    icon: <FaArchive className={styles.sectionIcon} />,
    items: [
      "Old design proposal",
      "Deprecated API documentation"
    ]
  },
  {
    key: 'recentlyDeleted',
    title: 'Recently Deleted',
    icon: <FaTrashAlt className={styles.sectionIcon} />,
    items: [
      "Duplicate task",
      "Unused code snippets"
    ]
  }
];

const ActivityPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Activity</h1>
        <p className={styles.subheading}>
          Here’s a quick summary of your recent interactions and usage.
        </p>
      </div>

      <div className={styles.chartCard}>
        <h2 className={styles.chartTitle}>Weekly Usage Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={activityData}>
            <Line
              type="monotone"
              dataKey="usage"
              stroke="#7ead0e"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.activityCard}>
        <h2 className={styles.activityTitle}>Recent Activity</h2>
        <ul className={styles.activityList}>
          {recentActivity.map((item, index) => (
            <li key={index} className={styles.activityItem}>
              <strong className={styles.user}>{item.user}</strong> {item.action}
              <small className={styles.time}>{item.time}</small>
            </li>
          ))}
        </ul>
      </div>

      {/* New Sections */}
      <div className={styles.sectionsContainer}>
        {sections.map(({ key, title, icon, items }) => (
          <section key={key} className={styles.sectionCard}>
            <h3 className={styles.sectionTitle}>
              {icon}
              {title}
            </h3>
            <ul className={styles.sectionList}>
              {items.map((item, idx) => (
                <li key={idx} className={styles.sectionItem}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ActivityPage;
