import { useState, useEffect } from 'react';
import styles from '../../styles/Settings.module.css';

const NotificationSettings = ({ user, setSuccessMessage, setErrorMessage }) => {
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    newsletter: false,
    activityAlerts: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user?.notificationSettings) {
      setNotificationSettings(user.notificationSettings);
    }
  }, [user]);

  const handleToggle = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API delay and success response
    setTimeout(() => {
      setSuccessMessage('Notification settings updated!');
      setErrorMessage('');
      console.log('Saved notification settings:', notificationSettings);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className={styles.settingsSection}>
      <h3>Notification Settings</h3>
      <form onSubmit={handleSubmit}>
        {[
          {
            key: 'emailNotifications',
            title: 'Email Notifications',
            desc: 'Receive important updates via email',
          },
          {
            key: 'pushNotifications',
            title: 'Push Notifications',
            desc: 'Get alerts on your device',
          },
          {
            key: 'newsletter',
            title: 'Newsletter',
            desc: 'Receive our weekly newsletter',
          },
          {
            key: 'activityAlerts',
            title: 'Activity Alerts',
            desc: 'Get notified about account activity',
          }
        ].map(({ key, title, desc }) => (
          <div key={key} className={styles.notificationItem}>
            <div className={styles.notificationInfo}>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
            <label className={styles.toggleSwitch}>
              <input
                type="checkbox"
                checked={notificationSettings[key]}
                onChange={() => handleToggle(key)}
              />
              <span className={styles.slider}></span>
            </label>
          </div>
        ))}

        <button 
          type="submit" 
          className={styles.saveButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save Preferences'}
        </button>
      </form>
    </div>
  );
};

export default NotificationSettings;
