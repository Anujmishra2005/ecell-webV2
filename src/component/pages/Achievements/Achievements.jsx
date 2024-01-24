
import React, { useState } from 'react';
import './achievements.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-slider">
      <button className="prev-btn" onClick={handlePrevClick}>
        &lt; Previous
      </button>
      <img className="slider-image" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button className="next-btn" onClick={handleNextClick}>
        Next &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
