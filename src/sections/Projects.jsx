// src/Carousel.js
import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <h1>PROJECTS</h1>
      <button className="carousel-button prev" onClick={goToPrevious}>
        ❮
      </button>
      <div className="carousel-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <img src={slide.image} alt={`Slide ${index}`} />
            </a>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
