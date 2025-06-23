import { useState, useEffect } from 'react';
import styles from '../../styles/Settings.module.css';

const AppearanceSettings = ({ setSuccessMessage, setErrorMessage }) => {
  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: 'light',
    fontSize: 'medium',
    density: 'comfortable'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Optionally load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      applyTheme(savedTheme);
      setAppearanceSettings((prev) => ({ ...prev, theme: savedTheme }));
    }
  }, []);

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedSettings = {
      ...appearanceSettings,
      [name]: value
    };
    setAppearanceSettings(updatedSettings);

    if (name === 'theme') {
      applyTheme(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate saving with fake delay
    setTimeout(() => {
      setSuccessMessage('Appearance settings updated!');
      setErrorMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className={styles.settingsSection}>
      <h3>Appearance Settings</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="theme">Theme</label>
          <select
            id="theme"
            name="theme"
            value={appearanceSettings.theme}
            onChange={handleChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System Default</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="fontSize">Font Size</label>
          <select
            id="fontSize"
            name="fontSize"
            value={appearanceSettings.fontSize}
            onChange={handleChange}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="density">Density</label>
          <select
            id="density"
            name="density"
            value={appearanceSettings.density}
            onChange={handleChange}
          >
            <option value="compact">Compact</option>
            <option value="comfortable">Comfortable</option>
            <option value="spacious">Spacious</option>
          </select>
        </div>

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

export default AppearanceSettings;
