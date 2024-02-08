import React from "react";
import "./signup.css";
import Header from "./header";
import imageLarge from "../images/kids17.avif";
import imageSmall from "../images/kids15.jpg";
const Signup = () => {
  const isSmallScreen = () => window.innerWidth <= 768;
  return (
    <div className="main-container2">
      <Header />

      <main>
        <div className="registration-header">
          <img
            src={isSmallScreen() ? imageSmall : imageLarge}
            alt="Registration Header"
          />
          <h2>Registration</h2>
        </div>

        <div className="registration-info">
          <p>
            Register for our YMCA Peace Kindergarten by filling out the form
            below. Click{" "}
            <a
              href="https://docs.google.com/forms/d/1rX2dm_cnf26tetWkljJxIbLffzqqclmMlWapjYKBBmc/viewform?pli=1&pli=1&edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
          </p>
        </div>

        {/* The rest of your signup form can go here */}
      </main>
    </div>
  );
};

export default Signup;
