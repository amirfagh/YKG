// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import ymcaLogo from "../images/kglogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <img src={ymcaLogo} alt="YMCA Logo" className="logo23" />
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
        </div>

        {/* Navigation links for larger screens */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/aboutus" className="nav-link aboutus">
            About Us
          </Link>
          <Link to="/activities" className="nav-link activities">
            Our Activities
          </Link>

          <Link to="/StaffPage" className="nav-link staffpage">
            Our Staff
          </Link>

          <Link to="/HolidayChart" className="nav-link holidays">
            Holiday Chart
          </Link>
          <Link to="/contact" className="nav-link contact">
            Contact Us
          </Link>
          <Link to="/signup" className="nav-link signup">
            Registration
          </Link>
          <a 
  href="https://www.jgive.com/new/en/ils/charity-organizations/1481" 
  target="_blank" 
  rel="noopener noreferrer"
  className="nav-link donation"
>
  Donate
</a>

        </div>
      </nav>
    </header>
  );
};

export default Header;
