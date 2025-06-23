import React, { useState } from "react";
import styles from "../styles/signup.module.css";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// const SignUpPage = ({ setIsSignUp }) => {
const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const passwordCriteria = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    numeric: /[0-9]/.test(formData.password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sign-Up Data:", formData);
    alert("Sign Up Successful!");
  };

  return (
    <div className={styles.container}>
      {/* Left Side - Image */}
      <div className={styles.imageSection}></div>

      {/* Right Side - Form */}
      <motion.div
        className={styles.authFormSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
        <div className={styles.inputRow}>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className={styles.inputRow}>
          <input type="text" placeholder="Username" required />
          <input type="text" placeholder="Phone Number" />
        </div>
          <input type="email" placeholder="Email address" required />

          <div className={styles.passwordContainer}>
            <div className={styles.passwordField}>
              <input type="password" placeholder="Password" required />
              {/* <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span> */}
            </div>      
            <div className={styles.passwordField}>
              <input type="password" placeholder="Confirm Password" required />
            </div>
          </div>


          {/* Password Strength Check */}
          <div className={styles.passwordRequirements}>
            <p>{passwordCriteria.length ? <FaCheckCircle className={styles.valid} /> : <FaTimesCircle className={styles.invalid} />} At least 8 characters</p>
            <p>{passwordCriteria.uppercase ? <FaCheckCircle className={styles.valid} /> : <FaTimesCircle className={styles.invalid} />} One uppercase letter</p>
            <p>{passwordCriteria.lowercase ? <FaCheckCircle className={styles.valid} /> : <FaTimesCircle className={styles.invalid} />} One lowercase letter</p>
            <p>{passwordCriteria.numeric ? <FaCheckCircle className={styles.valid} /> : <FaTimesCircle className={styles.invalid} />} One number</p>
            <p>{passwordCriteria.special ? <FaCheckCircle className={styles.valid} /> : <FaTimesCircle className={styles.invalid} />} One special character</p>
          </div>
          <div className={styles.rememberMe}>
            <input 
              type="checkbox" 
              checked={rememberMe} 
              onChange={() => setRememberMe(!rememberMe)} 
            />
            <label>Remember Me</label>
          </div>
          
          <button type="submit" className={styles.authButton}>Sign Up</button>
        </form>

        <div className={styles.signupContainer}>
          <p className={styles.orText}>or sign in with</p>
        </div>

        <div className={styles.socialIcons}>
          <a href="https://accounts.google.com" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>

        <div className={styles.signupAccount}>
          <p>
            Already have an account?{" "}
            <span onClick={() => setIsSignUp(false)}>Log in</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;