import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <button onClick={goToPrevious}>Previous</button>
      <div className="carousel-item">
        <img src={items[currentIndex].image} alt={items[currentIndex].title} />
        <h3>{items[currentIndex].title}</h3>
        <p>{items[currentIndex].description}</p>
      </div>
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

export default Carousel;
