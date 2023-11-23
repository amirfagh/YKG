// Main.js
import React from "react";
import "./main.css";
import Header from "./header";
import Footer from "./footer";
import logo1 from "../images/safa.jpg";
import logo2 from "../images/bird4.png";
import logo3 from "../images/diver.jpg";
import logo4 from "../images/kid12.jpg";
import backgroundImage from "../images/mian9.jpg";
import backgroundImage2 from "../images/main6.jpg";
import backgroundImage3 from "../images/main1.jpg";

const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="image-text-container">
        <p className="image-text">Jerusalem International YMCA-Kindergarten</p>
      </div>
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

      <div className="content">
        <div className="info-container">
          <div className="info-box">
            <img src={logo1} alt="Logo 1" className="logo" />
            <p>Bilingual: Arabic & Hebrew kindergarten</p>
          </div>
          <div className="info-box2">
            <img src={logo2} alt="Logo 2" className="logo" />
            <p>
              We provide a safe space for Jewish, Arab, and International
              communities
            </p>
          </div>
          <div className="info-box2">
            <img src={logo3} alt="Logo 3" className="logo" />
            <p>We celebrate diversity and multiculturalism</p>
          </div>
          <div className="info-box">
            <img src={logo4} alt="Logo 4" className="logo" />
            <p>
              We put a special emphasis on the emotional, social, and cognitive
              development of every child
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
