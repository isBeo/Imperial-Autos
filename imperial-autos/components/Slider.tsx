'use client'
import { useState, useEffect, useRef } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change slide every 3 seconds
    };

    startTimer();

    return () => {
      clearInterval(timerRef.current); // Clear interval on unmount
    };
  }, [images]); // Re-run effect if images prop changes

  const goToPrevious = () => {
    clearInterval(timerRef.current);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    clearInterval(timerRef.current);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative overflow-hidden"> {/* Image Slider Container */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full block object-cover max-h-[400px]" // Image Styles
      />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-4"> {/* Controls Container */}
        <button
          onClick={goToPrevious}
          className="bg-black/50 text-white px-4 py-2 rounded hover:bg-black/70" // Button Styles
        >
          Previous
        </button>
        <button
          onClick={goToNext}
          className="bg-black/50 text-white px-4 py-2 rounded hover:bg-black/70" // Button Styles
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;