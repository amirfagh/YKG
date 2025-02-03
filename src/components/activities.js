import React, { useState } from "react";
import Header from "./header";


import { BiHandicap } from "react-icons/bi";


import swimmingImage2 from "../images/66.jpg";

import yogaImage2 from "../images/55.jpg";
import musicImage1 from "../images/77.jpg";

import natureImage2 from "../images/88.jpg";


const Activities = () => {
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
    <div className="main-container" style={{ zoom: `${zoomLevel}%` }}>
      <Header />
      <div className="hero-section1">
        <div className="hero-text1">
          <h1>Our Activities</h1>
        </div>
      </div>
      <div className="activitiees">
        <div className="handicap-logo6" onClick={handleMenuToggle}>
          <BiHandicap size={40} />
        </div>
        {showMenu && (
          <div className="menu-container6">
            <button onClick={handleZoomIn}>Zoom In</button>
            <button onClick={handleZoomOut}>Zoom Out</button>
          </div>
        )}
        <div className="activity">
          
          <div className="activity-images">
            
            <img src={swimmingImage2} alt="Swimming 2" />
          </div>
        </div>
        <div className="activity">
          
          <div className="activity-images">
            
            <img src={yogaImage2} alt="Yoga 2" />
          </div>
        </div>
        <div className="activity">
          
          <div className="activity-images">
            <img src={musicImage1} alt="Music 1" />
           
          </div>
        </div>
        <div className="activity">
          
          <div className="activity-images">
            
            <img src={natureImage2} alt="Nature 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
