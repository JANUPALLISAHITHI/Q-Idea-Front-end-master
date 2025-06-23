import React, { useState } from 'react';
import styles from '../styles/createidea.module.css';

const Create = () => {
  const [hint, setHint] = useState('');
  const [hintFile, setHintFile] = useState(null);
  const [hashtags, setHashtags] = useState('');
  const [timeCapsule, setTimeCapsule] = useState(1);
  const [reveal, setReveal] = useState('');
  const [revealFile, setRevealFile] = useState(null);
  const maxHintLength = 150;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (hint.length > maxHintLength) {
      alert("Hint cannot exceed 150 characters");
      return;
    }

    const formData = new FormData();
    formData.append('hint', hint);
    formData.append('hintFile', hintFile);
    formData.append('hashtags', hashtags);
    formData.append('timeCapsule', timeCapsule);
    formData.append('reveal', reveal);
    formData.append('revealFile', revealFile);
    console.log("Form submitted");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create Your Idea</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Hint Section */}
        <div className={styles.formGroup}>
          <label>Hint <span>(max 150 characters)</span></label>
          <input
            type="text"
            value={hint}
            onChange={(e) => setHint(e.target.value)}
            maxLength={maxHintLength}
            placeholder="E.g. An app that helps people donate surplus food..."
          />
          <div className={styles.charCount}>{hint.length}/{maxHintLength}</div>

          <label>Upload Image/Video (Hint)</label>
          <input type="file" onChange={(e) => setHintFile(e.target.files[0])} />
        </div>

        {/* Hashtags */}
        <div className={styles.formGroup}>
          <label>Hashtags</label>
          <input
            type="text"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
            placeholder="Eg: tech, innovation, AI"
          />
        </div>

        {/* Time Capsule */}
        <div className={styles.formGroup}>
          <label>Lock in Time Capsule</label>
          <select value={timeCapsule} onChange={(e) => setTimeCapsule(e.target.value)}>
            {[...Array(48)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1} hour(s)</option>
            ))}
          </select>
        </div>

        {/* Reveal */}
        <div className={styles.formGroup}>
          <label>Reveal Your Idea</label>
          <textarea
            value={reveal}
            onChange={(e) => setReveal(e.target.value)}
            placeholder="Write your full idea here..."
          ></textarea>

          <label>Upload Image/Video (Reveal)</label>
          <input type="file" onChange={(e) => setRevealFile(e.target.files[0])} />
        </div>

        <button type="submit" className={styles.submitBtn}>Post Idea</button>
      </form>
    </div>
  );
};

export default Create;
