// DonationPage.js

import React from "react";
import Header from "./header";
import backgroundImage from "../images/they.jpg";

const DonationPage = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
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

  return (
    <div>
      <Header />
      <div style={containerStyle}>
        <div
          style={{
            ...squareStyle2,
            ...(window.innerWidth <= 768 && {
              width: "80vw", // Adjust the width for smaller screens
              height: "auto", // Allow the height to adjust based on content
            }),
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
