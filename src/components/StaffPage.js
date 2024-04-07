import React, { useState } from "react";
import { BiHandicap } from "react-icons/bi";
import staff2 from "../images/drive/IMG_0924.JPG";
import staff3 from "../images/drive/IMG_0927.JPG";
import staff4 from "../images/drive/IMG_0931.JPG";
import staff5 from "../images/drive/IMG_0937.JPG";
import staff6 from "../images/drive/IMG_5575.JPG";
import staff7 from "../images/drive/print/IMG_5671.JPG";
import staff9 from "../images/drive/IMG_5590.JPG";
import staff10 from "../images/drive/IMG_5592.JPG";
import staff11 from "../images/drive/print/IMG_5662.JPG";
import staff12 from "../images/drive/reham.jpg";
import staff13 from "../images/drive/IMG_5667(1).JPG";
import staff14 from "../images/drive/IMG_5668(1).JPG";
import staff15 from "../images/drive/print/IMG_5585.JPG";
import staff16 from "../images/drive/print/IMG_5579.JPG";
import staff17 from "../images/drive/print/IMG_5587.JPG";
import staff18 from "../images/drive/print/IMG_09202.jpg";
import staff19 from "../images/drive/gn2.jpg";
import staff20 from "../images/drive/gn3.jpg";
import staff21 from "../images/drive/gn1.jpg";
import "./staff.css";
import Header from "./header";

const staffMembers = [
  {
    id: 18,
    name: "Rawan",
    job: "Kidnergarten Director",
    class: "PhD. in Education",
    experience: " 12 years of working experience",
    profilePicture: staff18,
  },
  {
    id: 17,
    name: "Masha",
    job: "Certificated Teacher  ",
    class: "Babies group",
    experience: "33 years of teaching experience",
    profilePicture: staff17,
  },
  {
    id: 4,
    name: "Monica",
    job: "M.A in Education ",
    class: "Toddlers group",
    experience: "28 years of teaching experience",
    profilePicture: staff4,
  },
  {
    id: 6,
    name: "Fida'a",
    job: "Certificated Teacher ",
    class: "Toddlers group",
    experience: "20 years of teaching experience",
    profilePicture: staff6,
  },
  {
    id: 2,
    name: "Nujud",
    job: "Certificated Teacher  ",
    class: "Toddlers group",
    experience: "16 years of teaching experience",
    profilePicture: staff2,
  },
  {
    id: 3,
    name: "Sara",
    job: "Certificated Teacher",
    class: "Babies group",
    experience: "16 years of teaching experience",
    profilePicture: staff3,
  },
  {
    id: 19,
    name: "Angela",
    job: "Certificated Teacher ",
    class: "Babies & toddlers group",
    experience: "11 years of teaching experience",
    profilePicture: staff20,
  },
  {
    id: 20,
    name: "Suha",
    job: "Certificated Teacher ",
    class: "Toddlers group",
    experience: "10 years of teaching experience",
    profilePicture: staff21,
  },

  {
    id: 5,
    name: "Rania",
    job: "Certificated Teacher ",
    class: "Toddlers group",
    experience: "10 years of teaching experience",
    profilePicture: staff5,
  },
  {
    id: 10,
    name: "Ola",
    job: "Certificated Teacher ",
    class: "Babies group",
    experience: "10 years of teaching experience",
    profilePicture: staff10,
  },
  {
    id: 11,
    name: "Wijdan",
    job: "Certificated Teacher ",
    class: "Babies group",
    experience: " 10 years of teaching experience",
    profilePicture: staff11,
  },
  {
    id: 13,
    name: "Tatyana",
    job: "Certificated Teacher ",
    class: "Toddlers group",
    experience: "10 years of teaching experience",
    profilePicture: staff13,
  },
  {
    id: 16,
    name: "Kighan",
    job: "Certificated Teacher ",
    class: "Toddlers group",
    experience: "10 years of teaching experience",
    profilePicture: staff16,
  },
  {
    id: 7,
    name: "Huda",
    job: "Assistant Teacher",
    experience: "5+ years of teaching experience",
    profilePicture: staff7,
  },
  {
    id: 12,
    name: "Riham",
    job: "B.A in Education ",
    class: "For age 3-4",
    experience: "3 years of teaching experience",
    profilePicture: staff12,
  },
  {
    id: 9,
    name: "Mirvat",
    job: "Certificated Teacher ",
    class: "Babies group",
    experience: "2 years of teaching experience",
    profilePicture: staff9,
  },

  {
    id: 14,
    name: "Ghada",
    job: "Certificated Teacher",
    class: "Babies and toddlers group",
    experience: "2 years of teaching experience",
    profilePicture: staff14,
  },
  {
    id: 15,
    name: "Maria",
    job: "B.A in Education ",
    class: "Toddlers group",
    experience: "2 years of teaching experience",
    profilePicture: staff15,
  },

  {
    id: 18,
    name: "Nahida",
    job: "B.A in Education ",
    class: "Toddlers group",
    experience: "2 years of experience",
    profilePicture: staff19,
  },
];

const StaffPage = () => {
  const [zoomLevel, setZoomLevel] = useState(100); // State for zoom level (percentage)
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu); // Toggle the menu visibility
  };
  const handleZoomIn = () => {
    const newZoomLevel = Math.min(zoomLevel + 10, 200); // Increase zoom level by 10%
    setZoomLevel(newZoomLevel);
  };

  const handleZoomOut = () => {
    const newZoomLevel = Math.max(zoomLevel - 10, 50); // Decrease zoom level by 10%
    setZoomLevel(newZoomLevel);
  };
  return (
    <div className="staff-container" style={{ zoom: `${zoomLevel}%` }}>
      <Header />
      <h2>Our Staff</h2>
      <div className="handicap-logo6" onClick={handleMenuToggle}>
        <BiHandicap size={40} />
      </div>
      {showMenu && (
        <div className="menu-container6">
          <button onClick={handleZoomIn}>Zoom In</button>
          <button onClick={handleZoomOut}>Zoom Out</button>
        </div>
      )}
      <div className="staff-list">
        {staffMembers.map((staff) => (
          <div key={staff.id} className="staff-member">
            <div className="profile-picture">
              <img src={staff.profilePicture} alt={`${staff.name}'s Profile`} />
            </div>
            <div className="details">
              <h3>{staff.name}</h3>
              <p>{staff.job}</p>
              <p>{staff.class}</p>
              <p>{staff.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffPage;
