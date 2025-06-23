import { useState } from 'react';
import styles from '../../styles/Settings.module.css';

const SocialConnections = ({ user, setSuccessMessage, setErrorMessage }) => {
  const [isConnecting, setIsConnecting] = useState({
    google: false,
    github: false,
    linkedin: false
  });

  const handleConnect = (provider) => {
    setIsConnecting(prev => ({ ...prev, [provider]: true }));

    // Simulate successful connection after 1s
    setTimeout(() => {
      console.log(`Simulated connect to ${provider}`);
      setSuccessMessage(`Connected with ${provider} successfully!`);
      setErrorMessage('');
      setIsConnecting(prev => ({ ...prev, [provider]: false }));
    }, 1000);
  };

  const handleDisconnect = (provider) => {
    setIsConnecting(prev => ({ ...prev, [provider]: true }));

    // Simulate successful disconnection after 1s
    setTimeout(() => {
      console.log(`Simulated disconnect from ${provider}`);
      setSuccessMessage(`Disconnected from ${provider} successfully!`);
      setErrorMessage('');
      setIsConnecting(prev => ({ ...prev, [provider]: false }));
    }, 1000);
  };

  return (
    <div className={styles.settingsSection}>
      <h3>Social Connections</h3>

      {/* Google */}
      <div className={styles.socialConnection}>
        <div className={styles.socialInfo}>
          <img src="/google-icon.png" alt="Google" className={styles.socialIcon} />
          <span>Google</span>
        </div>
        {user?.googleId ? (
          <button
            className={styles.disconnectButton}
            onClick={() => handleDisconnect('google')}
            disabled={isConnecting.google}
          >
            {isConnecting.google ? 'Disconnecting...' : 'Disconnect'}
          </button>
        ) : (
          <button
            className={styles.connectButton}
            onClick={() => handleConnect('google')}
            disabled={isConnecting.google}
          >
            {isConnecting.google ? 'Connecting...' : 'Connect'}
          </button>
        )}
      </div>

      {/* GitHub */}
      <div className={styles.socialConnection}>
        <div className={styles.socialInfo}>
          <img src="/github-icon.png" alt="GitHub" className={styles.socialIcon} />
          <span>GitHub</span>
        </div>
        {user?.githubId ? (
          <button
            className={styles.disconnectButton}
            onClick={() => handleDisconnect('github')}
            disabled={isConnecting.github}
          >
            {isConnecting.github ? 'Disconnecting...' : 'Disconnect'}
          </button>
        ) : (
          <button
            className={styles.connectButton}
            onClick={() => handleConnect('github')}
            disabled={isConnecting.github}
          >
            {isConnecting.github ? 'Connecting...' : 'Connect'}
          </button>
        )}
      </div>

      {/* LinkedIn */}
      <div className={styles.socialConnection}>
        <div className={styles.socialInfo}>
          <img src="/linkedin-icon.png" alt="LinkedIn" className={styles.socialIcon} />
          <span>LinkedIn</span>
        </div>
        {user?.linkedinId ? (
          <button
            className={styles.disconnectButton}
            onClick={() => handleDisconnect('linkedin')}
            disabled={isConnecting.linkedin}
          >
            {isConnecting.linkedin ? 'Disconnecting...' : 'Disconnect'}
          </button>
        ) : (
          <button
            className={styles.connectButton}
            onClick={() => handleConnect('linkedin')}
            disabled={isConnecting.linkedin}
          >
            {isConnecting.linkedin ? 'Connecting...' : 'Connect'}
          </button>
        )}
      </div>
    </div>
  );
};

export default SocialConnections;
