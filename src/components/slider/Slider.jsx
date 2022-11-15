import React, { useEffect, useState } from 'react';
import './Slider.scss';
import { sliderData } from './slider-data';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  //auto Scroll;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
      }
      auto();
    }
    return () => {
      return clearInterval(slideInterval);
    };
  }, [currentSlide, slideInterval, autoScroll]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow right" onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={index == currentSlide ? 'slide current' : 'slide'}>
            {index === currentSlide && (
              <>
                <img src={slide.image} alt="slide" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.description}</p>
                  <hr />
                  <a href="#products" className="--btn --btn-primary">
                    Shop Now
                  </a>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
