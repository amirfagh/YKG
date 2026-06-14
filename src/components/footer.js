import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-media-links">
          <p className="green-text">Location: King David Street 26, Jerusalem</p>
          <p className="green-text">
            &copy;{new Date().getFullYear()} | YMCA Peace Preschool | Designed by Amir Ghareeb
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
