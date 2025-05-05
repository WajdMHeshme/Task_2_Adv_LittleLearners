import React, { useState } from "react";
import "./NewSlider.css";
import { NewSliderData } from "../../../Data";
import SliderCard from "../cards/SliderCards";
import leftArrow from "/assets/leftArrow.svg";
import rightArrow from "/assets/rightArrow.svg";

function NewSlider() {
  const [current, setCurrent] = useState(0);
  const total = NewSliderData.length;

  const prevSlide = () =>
    setCurrent((prev) => (prev <= 0 ? total - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev >= total - 1 ? 0 : prev + 1));

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {NewSliderData.map((card, index) => (
          <div key={index}  className="slide">
            <SliderCard
              icon={card.icon}
              heading={card.heading}
              paragraph={card.paragraph}
            />
          </div>
        ))}
      </div>
      <div className="btnsContainer">
        <div style={{fontSize:"18px"}} className="text">
          <p>8 More Awards</p>
        </div>

        <div className="arrowbtns">
          <button className="arrowBtn" onClick={prevSlide}>
            <img src={leftArrow} alt="leftArrow" />
          </button>
          <button className="arrowBtn" onClick={nextSlide}>
            <img src={rightArrow} alt="rightArrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewSlider;
