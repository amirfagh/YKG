import React, { useState, useEffect } from "react";
import "./gallery.css"; // Import the CSS file for gallery styles
import Modal from "./modal"; // Import the Modal component
import photo1 from "../images/kids/1.webp";
import photo2 from "../images/kids/2.webp";
import photo3 from "../images/kids/3.webp";
import photo4 from "../images/kids/4.webp";
import photo5 from "../images/kids/5.webp";
import photo6 from "../images/kids/6.webp";
import photo7 from "../images/kids/7.webp";
import photo8 from "../images/kids/8.webp";
import photo9 from "../images/kids/9.webp";
import photo20 from "../images/kids/20.webp";
import photo10 from "../images/kids/10.webp";
import photo11 from "../images/kids/11.webp";
import photo12 from "../images/kids/12.webp";
import photo13 from "../images/kids/13.webp";
import photo24 from "../images/kids/24.webp";
import photo25 from "../images/kids/25.webp";
import photo26 from "../images/kids/26.webp";
import Header from "./header";

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo20,
    photo24,
    photo25,
    photo26,
  ];
  const openModal = (index) => {
    setSelectedPhotoIndex(index);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handlePrevious = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    checkScreenSize(); // Initial check

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <div className="gallery-container">
        <Header />
        <h2>Photo Gallery</h2>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <img loading="lazy"
              key={index}
              src={photo}
              alt={`Landscape ${index + 1}`}
              className="gallery-photo"
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="gallery-container">
      <Header />
      <h2>Photo Gallery</h2>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img loading="lazy"
            key={index}
            src={photo}
            alt={`Landscape ${index + 1}`}
            className="gallery-photo"
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        photo={photos[selectedPhotoIndex]}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};
export default Gallery;
