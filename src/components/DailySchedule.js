import React from "react";

import Header from "./header";

const DailySchedule = () => {
  // Your Daily Schedule content goes here
  return (
    <div className="daily-schedule-container">
      <Header /> {/* Reusable header */}
      <div className="content">
        <h2>Daily Schedule</h2>
        {/* Add your daily schedule content here */}
      </div>
    </div>
  );
};

export default DailySchedule;
