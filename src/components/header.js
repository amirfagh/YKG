// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import ymcaLogo from "../images/oldlogo22.png";
import ymcaLogo2 from "../images/logoy.png";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={ymcaLogo} alt="YMCA Logo" className="logo" />
        </Link>
        <div className="nav-links">
          <Link to="/aboutus" className="nav-link aboutus">
            About Us
          </Link>
          <Link to="/activities" className="nav-link activities">
            Our Activities
          </Link>
          <Link to="/DailySchedule" className="nav-link dailyschedule">
            Daily Schedule
          </Link>
          <Link to="/StaffPage" className="nav-link staffpage">
            Our Staff
          </Link>
          <Link to="/Gallery" className="nav-link gallery">
            Gallery
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
          <Link to="/donation" className="nav-link donation">
            Donation
          </Link>
        </div>
        <Link to="/ymca">
          <img src={ymcaLogo2} alt="YMCA Logo" className="ymca-logo" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
