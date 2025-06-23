import { useState } from 'react';
import styles from '../../styles/Settings.module.css';

const DangerZone = ({ setSuccessMessage, setErrorMessage }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [confirmText, setConfirmText] = useState('');

  const handleDeleteAccount = () => {
    if (confirmText.toLowerCase() !== 'delete my account') {
      setErrorMessage('Please type "delete my account" to confirm');
      return;
    }

    setIsDeleting(true);

    // Simulate delete action with a delay
    setTimeout(() => {
      setSuccessMessage('Account deleted successfully');
      setErrorMessage('');
      setIsDeleting(false);

      // Simulate logout and redirect
      console.log('User logged out and redirected to homepage.');
      // Optionally clear localStorage/sessionStorage here
    }, 1000);
  };

  return (
    <div className={styles.settingsSection}>
      <h3>Danger Zone</h3>

      <div className={styles.dangerCard}>
        <h4>Delete Account</h4>
        <p>
          This will permanently delete your account and all associated data.
          This action cannot be undone.
        </p>

        <div className={styles.formGroup}>
          <label htmlFor="confirmDelete">
            Type <strong>"delete my account"</strong> to confirm
          </label>
          <input
            type="text"
            id="confirmDelete"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder="delete my account"
          />
        </div>

        <button
          className={styles.deleteButton}
          onClick={handleDeleteAccount}
          disabled={isDeleting || confirmText.toLowerCase() !== 'delete my account'}
        >
          {isDeleting ? 'Deleting...' : 'Permanently Delete Account'}
        </button>
      </div>
    </div>
  );
};

export default DangerZone;
