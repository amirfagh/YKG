import React from "react";
import Header from "./header";

import swimmingImage1 from "../images/swim3.jpg";
import swimmingImage2 from "../images/swim4.jpg";
import yogaImage1 from "../images/yoga1.jpg";
import yogaImage2 from "../images/yoga3.jpg";
import musicImage1 from "../images/holdays2.png";
import musicImage2 from "../images/circle.png";
import natureImage1 from "../images/nature2.jpg";
import natureImage2 from "../images/nature3.jpg";

const Activities = () => {
  return (
    <div>
      <Header />
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
    </div>
  );
};

export default Activities;
