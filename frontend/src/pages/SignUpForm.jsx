// SignUpForm.jsx changes to be made: remove- location and host type, two buttons traveller and host add checkbox for user type

import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    password: '',
    confirmPassword: '',
    hostFor: '',
    role: '',
    signedUp: false,
    showPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleRoleSelection = (selectedRole) => {
    setFormData({
      ...formData,
      role: selectedRole,
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g., send data to a server).
    setFormData({
      ...formData,
      signedUp: true,
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <div style={{ marginBottom: '20px', marginRight:'20px' }}>
        <button type="button" onClick={() => handleRoleSelection('traveller')}>
          Sign Up as a Traveller
        </button>
        <button type="button" onClick={() => handleRoleSelection('host')}>
          Sign Up as a Host
        </button>
      </div>
      {formData.role && (
        <form onSubmit={handleSignUp}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>

          {formData.role === 'traveller' && (
            <div>
              <label htmlFor="password">Password:</label>
              <div className="password-input">
                <input
                  type={formData.showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button type="button" onClick={handleTogglePassword}>
                  {formData.showPassword ? 'Hide' : 'Show'} Password
                </button>
              </div>
            </div>
          )}

          {formData.role === 'traveller' && (
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <div className="password-input">
                <input
                  type={formData.showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
                <button type="button" onClick={handleTogglePassword}>
                  {formData.showPassword ? 'Hide' : 'Show'} Password
                </button>
              </div>
            </div>
          )}

          {formData.role === 'host' && (
            <div>
              <label htmlFor="hostFor">Host for:</label>
              <select
                id="hostFor"
                name="hostFor"
                value={formData.hostFor}
                onChange={handleInputChange}
                required
              >
                <option value="">Select...</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Accommodation">Accommodation</option>
                <option value="Transportation">Transportation</option>
                <option value="TouristPlace">Tourist Place</option>
              </select>
            </div>
          )}

          <div>
            <button type="submit">Sign Up</button>
          </div>

          {formData.signedUp && <p>You have successfully signed up!</p>}
        </form>
      )}
    </div>
  );
};

export default SignUpForm;
