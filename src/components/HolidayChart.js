import React, { useState } from "react";
import Header from "./header";
import { BiHandicap } from "react-icons/bi";
import Holiday from "../images/hl4.png";
import image5 from "../images/annan6.png";
import ball1 from "../images/ball3.png";
import ball2 from "../images/ball2.png";

import "./HolidayChart.css";
const HolidayChart = () => {
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
    <div>
      <Header />
      <div
        className="holiday-chart-container"
        style={{ zoom: `${zoomLevel}%` }}
      >
        <h2>Holiday Chart</h2>
        <div className="handicap-logo6" onClick={handleMenuToggle}>
          <BiHandicap size={40} />
        </div>
        {showMenu && (
          <div className="menu-container6">
            <button onClick={handleZoomIn}>Zoom In</button>
            <button onClick={handleZoomOut}>Zoom Out</button>
          </div>
        )}
        <div className="holiday-chart-container">
  
  
  <div className="image-wrapper">
    <img src={ball1} alt="Ball 1" className="ball ball-left" />
    <img src={Holiday} alt="Holiday Chart" className="holiday-image" />
    <img src={ball2} alt="Ball 2" className="ball ball-right" />
  </div>
</div>
{" "}
        
      </div>
      <img src={image5} alt="Connecting Element" className="connecting-image3" />
    </div>
  );
};

export default HolidayChart;
