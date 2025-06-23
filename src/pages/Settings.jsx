import { useState } from 'react';
import ProfileSettings from '../components/Settings/ProfileSettings';
import AccountSettings from '../components/Settings/AccountSettings';
import SecuritySettings from '../components/Settings/SecuritySettings';
import NotificationSettings from '../components/Settings/NotificationSettings';
import AppearanceSettings from '../components/Settings/AppearanceSettings';
import SocialConnections from '../components/Settings/SocialConnections';
import DangerZone from '../components/Settings/DangerZone';
import styles from '../styles/Settings.module.css';
import { NavLink } from 'react-router-dom';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const renderTabContent = () => {
    const props = { setSuccessMessage, setErrorMessage };

    switch (activeTab) {
      case 'profile':
        return <ProfileSettings {...props} />;
      case 'account':
        return <AccountSettings {...props} />;
      case 'security':
        return <SecuritySettings {...props} />;
      case 'notifications':
        return <NotificationSettings {...props} />;
      case 'appearance':
        return <AppearanceSettings {...props} />;
      case 'social':
        return <SocialConnections {...props} />;
      case 'danger':
        return <DangerZone {...props} />;
      default:
        return <ProfileSettings {...props} />;
    }
  };

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.settingsSidebar}>
        <h2>Settings</h2>
        <nav className={styles.settingsNav}>
          {[
            { key: 'profile', label: 'Profile' },
            { key: 'account', label: 'Account' },
            { key: 'security', label: 'Security' },
            { key: 'notifications', label: 'Notifications' },
            { key: 'appearance', label: 'Appearance' },
            { key: 'social', label: 'Social Connections' },
            { key: 'danger', label: 'Delete Account' }
          ].map(({ key, label }) => (
            <button
              key={key}
              className={`${styles.navButton} ${activeTab === key ? styles.active : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}

          <NavLink to="/" className={styles.navButton}>
            Back to Home
          </NavLink>
        </nav>
      </div>

      <div className={styles.settingsContent}>
        {successMessage && (
          <div className={styles.successAlert}>
            {successMessage}
            <button onClick={() => setSuccessMessage('')} className={styles.closeAlert}>
              &times;
            </button>
          </div>
        )}
        {errorMessage && (
          <div className={styles.errorAlert}>
            {errorMessage}
            <button onClick={() => setErrorMessage('')} className={styles.closeAlert}>
              &times;
            </button>
          </div>
        )}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Settings;
