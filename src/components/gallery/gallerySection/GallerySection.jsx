import React, { useState } from "react";
import "./GallerySection.css";
import leftArrow from "/assets/leftArrow.svg";
import rightArrow from "/assets/rightArrow.svg";

function GallerySection({ title, img1, img2, img3, img4, pgf }) {
  const [current, setCurrent] = useState(0);
  const total = 2;
  const prevSlide = () =>
    setCurrent((prev) => (prev <= 0 ? total - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev >= total - 1 ? 0 : prev + 1));

  return (
    <div className="gallerySlider">
      <div
        className="mySlide"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        <div className="imgConent">
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
          <img src={img4} alt="img" />
        </div>
        <div className="imgConent none">
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
          <img src={img4} alt="img" />
        </div>
      </div>
      <div className="btnContainer">
        <div className="textTitle">
          <h1>{title}</h1>
        </div>

        <div className="arrowsbtn">
          <button className="arrowBtn" onClick={prevSlide}>
            <img src={leftArrow} alt="leftArrow" />
          </button>
          <button className="arrowBtn" onClick={nextSlide}>
            <img src={rightArrow} alt="rightArrow" />
          </button>
        </div>
      </div>

      <div className="info">
        <p>
          {pgf}
        </p>
      </div>
    </div>
  );
}

export default GallerySection;
