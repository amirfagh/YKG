import React from "react";
import "./ymca.css";
import Header from "./header";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import image1 from "../images/ymca2.webp";
import image2 from "../images/pool.jpg";

const YMCA = () => {
  return (
    <div className="main-container">
      <Header />
      <main>
        <div className="content">
          <div className="hero-section2">
            <div className="hero-text2">
              <h1>The Jerusalem International YMCA</h1>
            </div>
          </div>
          <div className="flex-container">
            <div className="image-section">
              <img src={image1} alt="First Imergage" />
              <img src={image2} alt="Second Iermage" />
            </div>
            <div className="text-section">
              <p>The Jerusalem International YMCA</p>
              <p>
                The Jerusalem International YMCA stands as a harmonious haven
                within the rich historical tapestry of Jerusalem. Nestled within
                the iconic Three Arches Hotel, we offer sanctuary to
                approximately 150 guests in our 70 rooms and suites, each
                designed for comfort and tranquility. Our facilities go beyond
                the ordinary, featuring a tantalizing restaurant, a 600-seat
                auditorium resonating with diverse voices, and a nurturing
                kindergarten for young minds.
              </p>
              <p>
                What truly distinguishes us is our commitment to holistic health
                and fitness. Our three-story sports center buzzes with activity,
                housing a semi-Olympic swimming pool where laughter and the
                splash of water create a harmonious atmosphere. A jacuzzi and
                sauna provide a warm embrace of relaxation, a basketball court
                echoes with the sounds of friendly competition, and a vast
                gymnasium welcomes over 5000 monthly users. Here, amid the
                clinks of weights and the rhythmic beats of Zumba, a diverse
                community finds its rhythm.
              </p>
              <p>
                Yet, the YMCA Jerusalem International is more than a hotel or
                sports center; it is a living testament to the power of unity.
                Since the 1933, within these enduring walls, we have cultivated
                more than a facility; we have nurtured a spirit of togetherness.
                Within these walls, politics and religions fade into the
                background, and the focus shifts to the essence of humanity –
                peace, love, and coexistence. Our members, guests, and staff,
                regardless of their backgrounds, discover solace in our halls,
                forging connections that transcend boundaries.
              </p>

              <div className="social-media-links">
                <h3>Follow Us on Social Media: </h3>
                <h2> Ymca Jerusalem </h2>
                <div className="ymca-international-social">
                  <a
                    href="https://www.instagram.com/ymcajerusalem/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a
                    href="https://www.facebook.com/JerusalemYMCA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                </div>
                <h2>Ymca Jerusalem Sport Center </h2>
                <div className="ymca-sport-center-social">
                  <a
                    href="https://www.instagram.com/ymca.sports.center/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a
                    href="https://www.facebook.com/JerusalemYmcaSportsCenter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default YMCA;
