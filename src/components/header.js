import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import ymcaLogo from "../images/logoy.png";
import ymcaKinderGartenLogo from "../images/logokg5.png";

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
        <Link to="/">
          <img
            src={ymcaKinderGartenLogo}
            alt="YMCA Kindergarten Logo"
            style={{ width: "60px", height: "70px", marginRight: "20px" }}
          />
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/aboutus"
            style={{ ...linkStyles, backgroundColor: "#CE7DA5" }}
          >
            About Us
          </Link>
          <Link
            to="/activities"
            style={{ ...linkStyles, backgroundColor: "#C6B1B2" }}
          >
            Activities
          </Link>
          <Link
            to="/DailySchedule"
            style={{ ...linkStyles, backgroundColor: "#C2CBB9" }}
          >
            Daily Schedule
          </Link>
          <Link
            to="/StaffPage"
            style={{ ...linkStyles, backgroundColor: "#BEE5BF" }}
          >
            Our Staff
          </Link>
          <Link
            to="/Gallery"
            style={{ ...linkStyles, backgroundColor: "#CFECD1" }}
          >
            Gallery
          </Link>
          <Link
            to="/HolidayChart"
            style={{ ...linkStyles, backgroundColor: "#DFF3E3" }}
          >
            Holiday Chart
          </Link>
          <Link
            to="/contact"
            style={{ ...linkStyles, backgroundColor: "#EFE2CF" }}
          >
            Contact Us
          </Link>
          <Link
            to="/signup"
            style={{ ...linkStyles, backgroundColor: "#FFD1BA" }}
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
