import React, { useEffect } from "react";

import "./footer.css";
const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // If user has scrolled to the bottom, show the footer
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        document.querySelector("footer").style.display = "block";
      } else {
        document.querySelector("footer").style.display = "none";
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer>
      <div className="footer-content">
        <div className="social-media-links">
          <p className="green-text">
            Location: King David Street 26, Jerusalem
          </p>{" "}
          {/* Waze location line */}
          <p className="green-text">
            @2023 | YMCA Kindergarten | Created and designed by Amir Ghareeb{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
