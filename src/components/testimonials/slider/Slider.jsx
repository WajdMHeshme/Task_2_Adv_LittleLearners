import React, { useState } from 'react';
import './Slider.css';
import { TestimonialsData } from '../../../Data';
import leftArrow from "/assets/leftArrow.svg";
import rightArrow from "/assets/rightArrow.svg";
import { TiStarFullOutline } from "react-icons/ti";

function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const total = TestimonialsData.length;

  const prevSlide = () => setCurrent(prev => (prev <= 0 ? total - 1 : prev - 1));
  const nextSlide = () => setCurrent(prev => (prev >= total - 1 ? 0 : prev + 1));

  return (
    <div className="slider">
      <div
        data-aos="fade-right"
        className="slides"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {TestimonialsData.map((item, index) => (
          <div key={index} className="slide">
            <div className="card">
              <img src={item.avatar} alt={item.name} className="avatar" />
              <h3>{item.name}</h3>
              <div style={{
                margin: "30px auto"
              }}>
                {Array.from({ length: item.rating }).map((_, i) => <span className='star' key={i} style={{ color: "var(--orange)" }}><TiStarFullOutline /></span>)}
              </div>
              <p className="testimonial-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="btns">
        <button className="arrow left" onClick={prevSlide}><img src={leftArrow} alt="leftArrow" /></button>
        <button className="arrow right" onClick={nextSlide}><img src={rightArrow} alt="rightArrow" /></button>
      </div>

    </div>
  );
}

export default TestimonialSlider;