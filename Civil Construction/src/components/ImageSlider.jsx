import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images, autoPlay = true, autoPlayInterval = 4000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length, autoPlayInterval]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(autoPlay);
  };

  if (!images || images.length === 0) {
    return <div className="slider-placeholder">No images available</div>;
  }

  return (
    <div 
      className="image-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slider-container">
        <div 
          className="slider-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img 
                src={image.src} 
                alt={image.alt || `Slide ${index + 1}`}
                className="slide-image"
              />
              {image.caption && (
                <div className="slide-caption">
                  <h3>{image.title}</h3>
                  <p>{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button 
              className="slider-btn slider-btn-prev"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              ❮
            </button>
            <button 
              className="slider-btn slider-btn-next"
              onClick={goToNext}
              aria-label="Next image"
            >
              ❯
            </button>
          </>
        )}

        {/* Slide Indicators */}
        {images.length > 1 && (
          <div className="slider-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Slide Counter */}
        {images.length > 1 && (
          <div className="slide-counter">
            {currentSlide + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
