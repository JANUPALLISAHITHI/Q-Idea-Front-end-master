import { useState } from "react";
import styles from "../styles/login.module.css";  // Going up one level and then into the styles folder
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = ({ setIsSignUp }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted:", formData);
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
        <h2>Log In</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className={styles.passwordField}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className={styles.rememberMe}>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <button type="submit" className={styles.authButton}>Log In</button>
        </form>
        
        <div>
          <p class="orText">or sign up with</p>
        </div>
        
        <div className={styles.socialIcons}>
          <a href="https://accounts.google.com" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>

        <p>
          Don't have an account?{" "}
          <span onClick={() => setIsSignUp(true)}>Sign up</span>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;