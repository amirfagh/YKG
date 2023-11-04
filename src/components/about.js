import React from "react";
import "./about.css"; // Import your CSS file for styling
import Header from "./header";
import Footer from "./footer";
import image1 from "../images/nature1.jpg";
import image2 from "../images/yoga1.jpg";
const About = () => {
  return (
    <div className="main-container">
      <Header />

      <main>
        <div className="content">
          <div className="hero-section">
            <div className="hero-text">
              <h1>About Us</h1>
            </div>
          </div>
          <div className="flex-container">
            <div className="image-section">
              <img src={image1} alt="First Imergage" />
              <img src={image2} alt="Second Iermage" />
            </div>
            <div className="text-section">
              <p>
                Welcome to the YMCA International Jerusalem Kindergarten,
                located at King David Street 26, Jerusalem. Our kindergarten is
                situated on the 1st floor of the hotel building. Established 10
                years ago, we take pride in providing a nurturing and inclusive
                environment for children to learn, play, and grow.
              </p>
              <p>
                Our kindergarten features:
                <ul>
                  <li>7 classrooms for various age groups</li>
                  <li>
                    Spacious outdoor garden for children to play and explore
                  </li>
                  <li>More than 20 dedicated staff members</li>
                  <li>A well-equipped physical education room for kids</li>
                </ul>
              </p>
              <p>
                With a focus on multicultural education, we celebrate diversity
                and promote understanding among children from various
                backgrounds. We believe in fostering a love for learning and
                encouraging the holistic development of each child.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
