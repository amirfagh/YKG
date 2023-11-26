import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import ContactUs from "./components/contactus";
import AboutUs from "./components/about";
import Ymca from "./components/ymca";
import Signup from "./components/signup";
import StaffPage from "./components/StaffPage";
import HolidayChart from "./components/HolidayChart";
import Gallery from "./components/Gallery";

import Activities from "./components/activities";
import Donations from "./components/donation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/ymca" element={<Ymca />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/StaffPage" element={<StaffPage />} />
        <Route path="/holidaychart" element={<HolidayChart />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/donation" element={<Donations />} />
      </Routes>
    </Router>
  );
};

export default App;
