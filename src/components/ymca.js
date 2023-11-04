import React from "react";
import "./ymca.css";
import Header from "./header";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const YMCA = () => {
  return (
    <div className="main-container">
      <Header />

      <main>
        <div className="content">
          <h2>The Jerusalem International YMCA </h2>
          <p>
            Jerusalem International YMCA stands as a beacon of harmony and
            well-being amidst the historical tapestry of Jerusalem. Nestled
            within our iconic Three Arches Hotel, we provide a sanctuary for
            around 150 guests in our 70 rooms and suites, each one offering
            comfort and tranquility. Our facilities extend far beyond the
            ordinary, boasting a restaurant that tantalizes taste buds, a
            600-seat auditorium that echoes with diverse voices, and a
            kindergarten where young minds are nurtured.
          </p>

          {/* Content about the sports center goes here */}

          <p>
            However, what truly sets us apart is our devotion to holistic health
            and fitness. Our three-story sports center is a bustling hub of
            activity, featuring a semi-Olympic swimming pool where laughter and
            the splash of water harmonize, a jacuzzi and sauna offering
            relaxation in their warm embrace, a basketball court echoing with
            the sound of friendly competition, and a vast gymnasium that
            welcomes over 5000 monthly users. Here, amidst the clinks of weights
            and the rhythmic beats of Zumba, a diverse community finds their
            rhythm.
          </p>

          <p>
            But YMCA Jerusalem International is more than just a hotel or a
            sports center. It's a living testament to the power of unity. In
            this place, where the walls have stood since the 1930s, we've
            created more than a facility; we've fostered a spirit of
            togetherness. Here, politics and religions fade into the background,
            and the focus shifts to the essence of humanity – peace, love, and
            coexistence. Our members, guests, and staff, irrespective of their
            backgrounds, find solace in our halls, forging connections that
            transcend boundaries.
          </p>

          {/* Social media links */}
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
      </main>
      <Footer />
    </div>
  );
};

export default YMCA;
