import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import ymcaLogo from "../images/logoy.png";

const Header = () => {
  const linkStyles = {
    display: "inline-block",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "5px",
    color: "black",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <header>
      <nav style={{ justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ ...linkStyles, backgroundColor: "#9DF7E5" }}>
            Home
          </Link>
          <Link
            to="/aboutus"
            style={{ ...linkStyles, backgroundColor: "#006BA6" }}
          >
            About Us
          </Link>
          <Link
            to="/activities"
            style={{ ...linkStyles, backgroundColor: "#0083E0" }}
          >
            Our Activities
          </Link>
          <Link
            to="/DailySchedule"
            style={{ ...linkStyles, backgroundColor: "#F8DF00" }}
          >
            Daily Schedule
          </Link>
          <Link
            to="/StaffPage"
            style={{ ...linkStyles, backgroundColor: "#8F2D56" }}
          >
            Our Staff
          </Link>
          <Link
            to="/Gallery"
            style={{ ...linkStyles, backgroundColor: "#D81159" }}
          >
            Gallery
          </Link>
          <Link
            to="/HolidayChart"
            style={{ ...linkStyles, backgroundColor: "#ACF39D" }}
          >
            Holiday Chart
          </Link>
          <Link
            to="/contact"
            style={{ ...linkStyles, backgroundColor: "#773344" }}
          >
            Contact Us
          </Link>
          <Link
            to="/signup"
            style={{ ...linkStyles, backgroundColor: "#9CFFFA" }}
          >
            Registration
          </Link>
        </div>
        <Link to="/ymca">
          <img
            src={ymcaLogo}
            alt="YMCA Logo"
            style={{ width: "70px", height: "50px", marginLeft: "20px" }}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
