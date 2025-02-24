import React, { useState } from "react";
import "./about.css"; // Import your CSS file for styling
import Header from "./header";
import Footer from "./footer";

import image from "../images/diagram2.png";
import image4 from "../images/annan6.png";
import image5 from "../images/annan5.png";

import { BiHandicap } from "react-icons/bi";

const About = () => {
  const [isBold, setIsBold] = useState(false); // State for bold text
  const [zoomLevel, setZoomLevel] = useState(100); // State for zoom level (percentage)
  const [showMenu, setShowMenu] = useState(false);
  const handleBoldText = () => {
    setIsBold(!isBold); // Toggle bold text
  };
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
    <div className="main-container" style={{ zoom: `${zoomLevel}%` }}>
      <Header />

      <main>
        <div className="content">
          <div className="flex-container">
            <div className="image-section">
             
              
            </div>
            <div className="text-section">
              <div className="handicap-logo7" onClick={handleMenuToggle}>
                <BiHandicap size={40} />
              </div>
              {showMenu && (
                <div className="zoom-menu2">
                  <label>
                    <input type="checkbox" onChange={handleBoldText} />
                    Bold Text
                  </label>
                  <button onClick={handleZoomIn}>Zoom In</button>
                  <button onClick={handleZoomOut}>Zoom Out</button>
                </div>
              )}
              <img src={image5} alt="Connecting Element" className="connecting-image2" />
              <h1 className={`activities-title2 ${isBold ? "bold-text" : ""}`}>
                The Erna and Henry Leir Peace preschool
              </h1>
              <p className={isBold ? "bold-text" : ""}>
                Founded in 1982, the Erna and Henry Leir Peace Preschool at the
                Jerusalem International YMCA is a beacon of unity and learning.
                Welcoming children from Christian, Jewish, and Muslim
                backgrounds, we nurture children aged 3 months to 4 years. Our
                unique educational approach includes bilingual classes, with
                each class led by both a Hebrew-speaking and an Arabic-speaking
                teacher. This fosters a natural environment of partnership and
                mutual respect.
              </p>
              <h1 className={`activities-title2 ${isBold ? "bold-text" : ""}`}>
                Living the Dream of a Harmonious Tomorrow
              </h1>
              <p className={isBold ? "bold-text" : ""}>
                Our preschool is more than just a learning environment; it's a
                place where families and staff collaboratively live the dream of
                a peaceful, unified future. We believe in the power of early
                education to bridge cultural divides and lay the foundation for
                a better world.
              </p>
              <h1 className={`activities-title2 ${isBold ? "bold-text" : ""}`}>
                Celebrating Diversity Through Festivities
              </h1>
              <p className={isBold ? "bold-text" : ""}>
                We embrace and celebrate the diverse cultural and religious
                backgrounds of our students. Our festivities include creating
                greeting cards for the Jewish New Year, decorating the Christmas
                tree, and baking sweets for Eid al-Fitr. These celebrations are
                often shared with parents, bringing immense joy and excitement
                to our community.
              </p>
              <h1 className={`activities-title2 ${isBold ? "bold-text" : ""}`}>
                Focus on Holistic Development
              </h1>
              <p className={isBold ? "bold-text" : ""}>
                At the core of our philosophy is the emphasis on each child's
                emotional, social, and cognitive development. Our approach is
                tailored to nurture every aspect of a child's growth.
              </p>
              <p className={isBold ? "bold-text" : ""}>
                Features of Our Kindergarten
                <ul>
                  <li>
                    A team of responsible, dedicated, and experienced staff who
                    provide abundant warmth, love, and a rich educational
                    program.
                  </li>
                  <li>
                    Daily professional guidance by the kindergarten director and
                    a pedagogical supervisor.
                  </li>
                  <li>
                    An enrichment program with activities and games for motor,
                    cognitive, emotional, and social development.
                  </li>
                  <li>
                    Small group sizes to ensure personalized attention and care.
                  </li>
                  <li>
                    A nutritious food menu, overseen by a child clinical
                    nutritionist.
                  </li>
                  <li>
                    Security measures including cameras and personal insurance
                    for each child.
                  </li>
                  <li>
                    A warm, joyful, and nurturing environment cherished by
                    children and parents alike.
                  </li>
                </ul>
              </p>
              <p className={isBold ? "bold-text" : ""}>
                Classroom Structure
                <ul>
                  <li>Babies 1: 3 months - 9 months</li>
                  <li>Babies 2: 11 months - 1.1</li>
                  <li>Toddlers 1: 1.2 years – 1.6 years</li>
                  <li>Toddlers 2 : 1.7 years – 1.10</li>
                  <li>2 years 1: 1.11 years – 2.3 years</li>
                  <li>2 years 2 : 2.4 years – 2.7 years</li>
                  <li>3-4 years : 2.8 years – 3 years</li>
                </ul>
              </p>

              <p className={isBold ? "bold-text" : ""}>
                Annual scheduale
                <p className={isBold ? "bold-text" : ""}>
                  The preschool operates from September-July.
                </p>
                <br />
                Sunday-Friday 7:30-16:00 Friday 7:30-12:30
                <br />
                August is reserved for our exciting summer camp.
              </p>
              
              <img src={image4} alt="Connecting Element" className="connecting-image" />
            </div>
          
            <div className="imported-image-container">
             
             <img
               src={image}
               alt="Imported Description"
               className="imported-image"
             />
           </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
