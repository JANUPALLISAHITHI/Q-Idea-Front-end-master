import { useState } from 'react';
import styles from '../../styles/Settings.module.css';

const AccountSettings = ({ setSuccessMessage, setErrorMessage }) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    countryCode: '+1'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate success message without backend call
    setTimeout(() => {
      setSuccessMessage('Account details updated successfully!');
      setErrorMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className={styles.settingsSection}>
      <h3>Account Settings</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.phoneGroup}>
          <div className={styles.countryCode}>
            <label htmlFor="countryCode">Country Code</label>
            <select
              id="countryCode"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="+1">+1 (US/CA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+91">+91 (IN)</option>
              <option value="+61">+61 (AU)</option>
            </select>
          </div>

          <div className={styles.phoneNumber}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="1234567890"
            />
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button 
            type="submit" 
            className={styles.saveButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountSettings;
