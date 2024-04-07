import React, { useState } from "react";
import "./signup.css";
import Header from "./header";
import imageLarge from "../images/kids17.avif";
import imageSmall from "../images/kids15.jpg";
import { BiHandicap } from "react-icons/bi";
const Signup = () => {
  const isSmallScreen = () => window.innerWidth <= 768;
  const [zoomLevel, setZoomLevel] = useState(100); // State for zoom level (percentage)
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu); // Toggle the menu visibility
  };
  const handleZoomIn = () => {
    const newZoomLevel = Math.min(zoomLevel + 10, 200); // Increase zoom level by 10%
    setZoomLevel(newZoomLevel);
  };

  const handleZoomOut = () => {
    const newZoomLevel = Math.max(zoomLevel - 10, 50); // Decrease zoom level by 10%
    setZoomLevel(newZoomLevel);
  };
  return (
    <div className="main-container2" style={{ zoom: `${zoomLevel}%` }}>
      <Header />

      <main>
        <div className="registration-header">
          <img
            src={isSmallScreen() ? imageSmall : imageLarge}
            alt="Registration Header"
          />
          <h2>Registration</h2>
        </div>
        <div className="handicap-logo6" onClick={handleMenuToggle}>
          <BiHandicap size={40} />
        </div>
        {showMenu && (
          <div className="menu-container6">
            <button onClick={handleZoomIn}>Zoom In</button>
            <button onClick={handleZoomOut}>Zoom Out</button>
          </div>
        )}
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
