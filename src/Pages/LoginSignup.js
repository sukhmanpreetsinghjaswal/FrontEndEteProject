import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { useNavigate } from 'react-router-dom';

const LoginSignUp = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [signUpSuccess, setSignUpSuccess] = useState(false); 
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setAgreeToTerms(checked);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
    }

    if (!agreeToTerms) {
      window.alert('Please agree to the terms and conditions');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && agreeToTerms;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      
      setSignUpSuccess(true);
      window.alert('Sign Up Successful!');
      navigate('/');
      
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="loginsignup-agree">
            <input
              type="checkbox"
              name="agreeToTerms"
              id="agreeToTerms"
              checked={agreeToTerms}
              onChange={handleChange}
            />
            <label htmlFor="agreeToTerms">
              By continuing, I agree to the terms of use & Privacy Policy
            </label>
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignUp;
