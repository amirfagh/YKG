import React, { useState } from "react";

import "./main.css"; // Import your CSS file for styling

import Header from "./header";
import Footer from "./footer";

const Signup = () => {
  const [formData, setFormData] = useState({
    childName: "",
    parentName: "",
    phoneNumber: "",
    childIdNumber: "",
    parentIdNumber: "",
    emailAddress: "",
    childBirthdate: "",
    placeOfLiving: "",
  });

  const {
    childName,
    parentName,
    phoneNumber,
    childIdNumber,
    parentIdNumber,
    emailAddress,
    childBirthdate,
    placeOfLiving,
  } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Logic to handle signup form submission goes here
    // You can send the form data to a server or perform validation as needed

    // Clear form after submission
    setFormData({
      childName: "",
      parentName: "",
      phoneNumber: "",
      childIdNumber: "",
      parentIdNumber: "",
      emailAddress: "",
      childBirthdate: "",
      placeOfLiving: "",
    });
  };

  return (
    <div className="main-container">
      <Header />

      <main>
        <div className="content">
          <h2>Sign Up Page</h2>
          <div className="signup-form">
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="childName">Child's Name:</label>
              <input
                type="text"
                id="childName"
                name="childName"
                value={childName}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="parentName">Parent's Name:</label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={parentName}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="childIdNumber">Child's ID Number:</label>
              <input
                type="text"
                id="childIdNumber"
                name="childIdNumber"
                value={childIdNumber}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="parentIdNumber">Parent's ID Number:</label>
              <input
                type="text"
                id="parentIdNumber"
                name="parentIdNumber"
                value={parentIdNumber}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="emailAddress">Email Address:</label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={emailAddress}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="childBirthdate">Child's Birthdate:</label>
              <input
                type="date"
                id="childBirthdate"
                name="childBirthdate"
                value={childBirthdate}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="placeOfLiving">Place of Living:</label>
              <input
                type="text"
                id="placeOfLiving"
                name="placeOfLiving"
                value={placeOfLiving}
                onChange={handleInputChange}
                required
              />

              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Signup;
