import React, { useState } from "react";
import "./signup.css";
import Header from "./header";
import { BiHandicap } from "react-icons/bi";
import ball2 from "../images/ball1.png";
import ball3 from "../images/ball3.png";

const Signup = () => {
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
    <div className="signup-page-container" style={{ zoom: `${zoomLevel}%` }}>
      <Header />
      <h1>Registeration</h1>
      <main className="signup-content">
        <div className="handicap-icon" onClick={handleMenuToggle}>
          <BiHandicap size={40} />
        </div>
        {showMenu && (
          <div className="zoom-menu">
            <button onClick={handleZoomIn}>Zoom In</button>
            <button onClick={handleZoomOut}>Zoom Out</button>
          </div>
        )}
        <div className="signup-info">
          <p>
            Register for our YMCA Peace Kindergarten by filling out the form
            below.{" "}
            <a
              href="https://docs.google.com/forms/d/1rX2dm_cnf26tetWkljJxIbLffzqqclmMlWapjYKBBmc/viewform?pli=1&pli=1&edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>
          </p>
        </div>
      </main>
      <div className="ball-left">
        <img src={ball2} alt="Ball Left" />
      </div>
      <div className="ball-right">
        <img src={ball3} alt="Ball Right" />
      </div>
    </div>
  );
};

export default Signup;
