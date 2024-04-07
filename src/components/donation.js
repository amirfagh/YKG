import React, { useState } from "react";
import Header from "./header";
import backgroundImage from "../images/they.jpg";
import { BiHandicap } from "react-icons/bi";

const DonationPage = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const squareStyle2 = {
    width: "30vw",
    height: "30vh",
    padding: "20px",
    border: "2px solid #333",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#b84242",
    color: "black",
    textDecoration: "none",
    borderRadius: "5px",
  };

  const [showMenu, setShowMenu] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleZoomIn = () => {
    const newZoomLevel = Math.min(zoomLevel + 10, 200);
    setZoomLevel(newZoomLevel);
  };

  const handleZoomOut = () => {
    const newZoomLevel = Math.max(zoomLevel - 10, 50);
    setZoomLevel(newZoomLevel);
  };

  return (
    <div>
      <Header />
      <div className="handicap-logo5" onClick={handleMenuToggle}>
        <BiHandicap size={50} />
      </div>
      {showMenu && (
        <div className="menu-container5">
          <button onClick={handleZoomIn}>Zoom In</button>
          <button onClick={handleZoomOut}>Zoom Out</button>
        </div>
      )}
      <div style={containerStyle}>
        <div
          style={{
            ...squareStyle2,
            ...(window.innerWidth <= 768 && {
              width: "80vw",
              height: "auto",
            }),
            zoom: `${zoomLevel}%`, // Add zoom style here
          }}
        >
          <h1>Donate for the Jerusalem International YMCA Pre-School</h1>
          <p>Your support is greatly appreciated!</p>
          <a
            href="https://www.jgive.com/new/en/ils/charity-organizations/1481"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
