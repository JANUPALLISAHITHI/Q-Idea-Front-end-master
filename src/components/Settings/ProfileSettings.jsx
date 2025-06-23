import { useState } from 'react';
import styles from '../../styles/Settings.module.css';

const ProfileSettings = ({ user, setSuccessMessage, setErrorMessage }) => {
  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    dob: user?.dob ? new Date(user.dob).toISOString().split('T')[0] : '',
    bio: user?.bio || '',
    profileImage: user?.profileImage || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate saving to backend
    setTimeout(() => {
      console.log('Updated profile data:', formData);
      setSuccessMessage('Profile updated successfully!');
      setErrorMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className={styles.settingsSection}>
      <h3>Profile Settings</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Profile Picture</label>
          <div className={styles.profileImageContainer}>
            <img
              src={formData.profileImage || '/default-profile.png'}
              alt="Profile"
              className={styles.profileImage}
            />
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              onChange={handleImageChange}
              className={styles.fileInput}
            />
            <label htmlFor="profileImage" className={styles.uploadButton}>
              Change Photo
            </label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows="4"
            maxLength="200"
          />
        </div>

        <button
          type="submit"
          className={styles.saveButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
