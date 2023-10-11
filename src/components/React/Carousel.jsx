import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative overflow-hidden w-full h-60">
      <div
        className="absolute w-full h-full flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-none w-full h-full flex">
            <img src={image} alt={`Image ${index + 1}`} className="w-1/3 object-cover h-full" />
            <div className="w-2/3 p-4">
              <h3>{`Title ${index + 1}`}</h3>
              <p>{`Project description ${index + 1}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
