import React, { useState } from 'react';
import styles from '../styles/FeedbackPage.module.css';

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    feedback: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validation
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errs.email = 'Invalid email address';
    }
    if (formData.rating === 0) errs.rating = 'Please provide a rating';
    if (!formData.feedback.trim()) errs.feedback = 'Feedback cannot be empty';
    return errs;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleStarClick = (star) => {
    setFormData(prev => ({
      ...prev,
      rating: star,
    }));
    setErrors(prev => ({ ...prev, rating: '' }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <div className={styles.pageWrapper}>
      <h2 className={styles.heading}>We value your feedback</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Name */}
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              autoComplete="name"
            />
            {errors.name && <small className={styles.errorMsg}>{errors.name}</small>}
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
            />
            {errors.email && <small className={styles.errorMsg}>{errors.email}</small>}
          </div>

          {/* Rating */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Rating</label>
            <div className={styles.starsWrapper} role="radiogroup" aria-label="Rating">
              {[1,2,3,4,5].map(star => (
                <Star
                  key={star}
                  filled={formData.rating >= star}
                  onClick={() => handleStarClick(star)}
                  ariaChecked={formData.rating === star}
                  starId={`star-${star}`}
                />
              ))}
            </div>
            {errors.rating && <small className={styles.errorMsg}>{errors.rating}</small>}
          </div>

          {/* Feedback */}
          <div className={styles.formGroup}>
            <label htmlFor="feedback" className={styles.label}>Your Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              rows="5"
              className={`${styles.textarea} ${errors.feedback ? styles.inputError : ''}`}
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Write your thoughts here..."
            />
            {errors.feedback && <small className={styles.errorMsg}>{errors.feedback}</small>}
          </div>

          {/* Submit */}
          <button type="submit" className={styles.submitBtn}>
            Submit Feedback
          </button>
        </form>
      ) : (
        <div className={styles.thankYou}>
          <h3>Thank you for your feedback!</h3>
          <p>We appreciate you taking the time to help us improve.</p>
        </div>
      )}
    </div>
  );
}

// Star component for rating
function Star({ filled, onClick, ariaChecked, starId }) {
  return (
    <button
      type="button"
      className={`${styles.star} ${filled ? styles.filledStar : ''}`}
      onClick={onClick}
      aria-checked={ariaChecked}
      role="radio"
      id={starId}
      tabIndex="0"
      aria-label={`${ariaChecked ? "Selected" : "Not selected"} star`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={filled ? "var(--main-accent-color)" : "none"}
        stroke="var(--main-accent-color)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.starIcon}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </button>
  );
}
