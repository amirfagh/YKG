import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import ymcaLogo from "../images/kglogo.webp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav aria-label="Main navigation">
        <Link to="/">
          <img src={ymcaLogo} alt="Jerusalem YMCA Peace Preschool home" className="logo23" />
        </Link>

        <button
          className="menu-icon"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
          <div className={`bar ${menuOpen ? "open" : ""}`} />
        </button>

        <div id="nav-links" className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/aboutus" className="nav-link aboutus">About Us</Link>
          <Link to="/activities" className="nav-link activities">Our Activities</Link>
          <Link to="/StaffPage" className="nav-link staffpage">Our Staff</Link>
          <Link to="/HolidayChart" className="nav-link holidays">Holiday Chart</Link>
          <Link to="/contact" className="nav-link contact">Contact Us</Link>
          <Link to="/signup" className="nav-link signup">Registration</Link>
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
