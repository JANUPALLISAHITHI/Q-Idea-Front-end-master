// components/PremiumSubscription.jsx
import React, { useState } from 'react';
import styles from '../styles/Premiumsubscription.module.css';

const plans = [
  {
    id: 'basic',
    title: 'Basic',
    price: '₹199',
    description: 'Good for casual users',
    features: ['Access to standard content', 'SD streaming', 'Watch on 1 device'],
  },
  {
    id: 'standard',
    title: 'Standard',
    price: '₹399',
    description: 'Recommended for most',
    features: ['HD streaming', 'Watch on 2 devices simultaneously', 'Offline downloads'],
  },
  {
    id: 'premium',
    title: 'Premium',
    price: '₹699',
    description: 'For power users',
    features: ['Ultra HD streaming', 'Watch on 4 devices simultaneously', 'Exclusive content'],
  },
];

const PremiumSubscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const handleSubscribe = () => {
    if (!selectedPlan) {
      alert('Please select a subscription plan!');
      return;
    }
    alert(`Subscribed to ${selectedPlan} plan! 🎉`);
    // Here you can add actual subscription logic
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Go Premium</h1>
      <p className={styles.pageSubtitle}>
        Choose the best plan that fits your needs and enjoy unlimited access!
      </p>

      <div className={styles.planCards}>
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`${styles.planCard} ${
              selectedPlan === plan.id ? styles.selected : ''
            }`}
            onClick={() => handleSelect(plan.id)}
          >
            <h2 className={styles.planTitle}>{plan.title}</h2>
            <p className={styles.planPrice}>{plan.price} / month</p>
            <p className={styles.planDesc}>{plan.description}</p>
            <ul className={styles.featuresList}>
              {plan.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button
        className={styles.subscribeButton}
        onClick={handleSubscribe}
        disabled={!selectedPlan}
      >
        {selectedPlan ? 'Subscribe Now' : 'Select a Plan'}
      </button>
    </div>
  );
};

export default PremiumSubscription;
