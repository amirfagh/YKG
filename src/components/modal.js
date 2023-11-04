import React, { useEffect } from "react";
import "./modal.css"; // Import the CSS file for modal styles

const Modal = ({ isOpen, onClose, photo, onPrevious, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isOpen) {
        if (event.key === "ArrowLeft") {
          onPrevious();
        } else if (event.key === "ArrowRight") {
          onNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onPrevious, onNext]);
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="nav-button left" onClick={onPrevious}>
          &#8249; Previous
        </button>
        <img src={photo} alt="Larger version" className="modal-photo" />
        <button className="nav-button right" onClick={onNext}>
          Next &#8250;
        </button>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
