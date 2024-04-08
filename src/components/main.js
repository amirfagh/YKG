// Main.js
import React, { useState } from "react";
import "./main.css";
import Header from "./header";
import Footer from "./footer";
import logo1 from "../images/safa2.jpg";
import logo2 from "../images/bird422.png";
import logo3 from "../images/diver2.jpg";
import logo4 from "../images/kid122.jpg";
import backgroundImage from "../images/mian9.jpg";
import backgroundImage2 from "../images/main22.jpg";
import backgroundImage3 from "../images/main1.jpg";
import { BiHandicap } from "react-icons/bi";
const Main = () => {
  const [showMenu, setShowMenu] = useState(false); // State for showing/hiding the menu
  const [isBold, setIsBold] = useState(false); // State for bold text
  const [zoomLevel, setZoomLevel] = useState(100); // State for zoom level (percentage)

  const handleMenuToggle = () => {
    setShowMenu(!showMenu); // Toggle the menu visibility
  };

  const handleBoldText = () => {
    setIsBold(!isBold); // Toggle bold text
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
      <div className="image-text-container">
        <div className="handicap-logo6" onClick={handleMenuToggle}>
          <BiHandicap size={40} />
        </div>
        <p className="image-text">Jerusalem International YMCA Kindergarten</p>
      </div>

      {showMenu && (
        <div className="menu-container6">
          <label>
            <input type="checkbox" onChange={handleBoldText} />
            Bold Text
          </label>
          <button onClick={handleZoomIn}>Zoom In</button>
          <button onClick={handleZoomOut}>Zoom Out</button>
        </div>
      )}
      <main className="image-container">
        <img
          src={backgroundImage}
          alt="Background"
          className="background-image"
        />
        <img
          src={backgroundImage2}
          alt="Background"
          className="background-image"
        />
        <img
          src={backgroundImage3}
          alt="Background"
          className="background-image"
        />
        <div className="overlay"></div>
      </main>

      <div className="info-container">
        <div className={`info-box ${isBold ? "bold-text" : ""}`}>
          <img src={logo1} alt="Logo 1" className="logo" />
          <p>Bilingual: Arabic & Hebrew kindergarten</p>
        </div>
        <div className={`info-box2 ${isBold ? "bold-text" : ""}`}>
          <img src={logo2} alt="Logo 2" className="logo" />
          <p>
            We provide a safe space for Jewish, Arab, and International
            communities
          </p>
        </div>
        <div className={`info-box2 ${isBold ? "bold-text" : ""}`}>
          <img src={logo3} alt="Logo 3" className="logo" />
          <p>We celebrate diversity and multiculturalism</p>
        </div>
        <div className={`info-box ${isBold ? "bold-text" : ""}`}>
          <img src={logo4} alt="Logo 4" className="logo" />
          <p>
            We put a special emphasis on the emotional, social, and cognitive
            development of every child
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
