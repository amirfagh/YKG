import React from "react";
import "./main.css";
import Header from "./header";
import Footer from "./footer";
import video from "../images/Movie007.mp4";
import image from "../images/circle.png";
import swimmingImage1 from "../images/swim3.jpg";
import swimmingImage2 from "../images/swim4.jpg";
import yogaImage1 from "../images/yoga1.jpg";
import yogaImage2 from "../images/yoga3.jpg";
import musicImage1 from "../images/holdays2.png";
import musicImage2 from "../images/circle.png";
import natureImage1 from "../images/nature2.jpg";
import natureImage2 from "../images/nature3.jpg";

const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <main className="video-container">
        <video autoPlay loop muted className="video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>
      <div className="content">
        <h2>YMCA Multi-communities based Kinder-Garten in Jerusalem</h2>
      </div>
      <h1 className="activities-title">Our Activities</h1>

      <div className="activitiees">
        <div className="activity">
          <h3>Swimming</h3>
          <div className="activity-images">
            <img src={swimmingImage1} alt="Swimming 1" />
            <img src={swimmingImage2} alt="Swimming 2" />
          </div>
        </div>
        <div className="activity">
          <h3>Yoga</h3>
          <div className="activity-images">
            <img src={yogaImage1} alt="Yoga 1" />
            <img src={yogaImage2} alt="Yoga 2" />
          </div>
        </div>
        <div className="activity">
          <h3>Music</h3>
          <div className="activity-images">
            <img src={musicImage1} alt="Music 1" />
            <img src={musicImage2} alt="Music 2" />
          </div>
        </div>
        <div className="activity">
          <h3>Exploring the Nature</h3>
          <div className="activity-images">
            <img src={natureImage1} alt="Nature 1" />
            <img src={natureImage2} alt="Nature 2" />
          </div>
        </div>
      </div>
      <h1 className="activities-title">Developmental areas of children</h1>
      <div className="imported-image-container">
        <img
          src={image}
          alt="Imported Description"
          className="imported-image"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
