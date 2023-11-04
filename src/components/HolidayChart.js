// HolidayChart.js
import React from "react";
import Header from "./header";
import Holiday from "../images/holdays2.png";
import "./HolidayChart.css";
const HolidayChart = () => {
  return (
    <div>
      <Header /> {/* Include the header component */}
      <div className="holiday-chart-container">
        <h2>Holiday Chart</h2>
        <img src={Holiday} alt="Holiday Chart" />{" "}
        {/* Use the imported Holiday image */}
        {/* Add any additional content or details about the holiday chart */}
      </div>
    </div>
  );
};

export default HolidayChart;
