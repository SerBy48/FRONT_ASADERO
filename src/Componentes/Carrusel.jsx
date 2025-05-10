import React, { useState } from "react";
import "../css/Carrusel.css"; // Ruta relativa al archivo CSS

const Carrusel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>
        &#8249;
      </button>
      <div className="carousel-content">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Carrusel;
