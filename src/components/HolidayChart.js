import React from "react";
import Header from "./header";

import Holiday from "../images/holdays2.png";
import "./HolidayChart.css";
const HolidayChart = () => {
  return (
    <div>
      <Header />
      <div className="holiday-chart-container">
        <h2>Holiday Chart</h2>
        <img src={Holiday} alt="Holiday Chart" />{" "}
      </div>
    </div>
  );
};

export default HolidayChart;
