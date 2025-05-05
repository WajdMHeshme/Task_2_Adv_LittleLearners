import React from "react";
import "../../index.css";
import "./Hero.css";
import CountUp from "react-countup";
import heroImage from "/assets/Image Container.png";

const Hero = ({
  title,
  headingInf,
  textInnerHeading,
  mainP,
  num1,
  num2,
  num3,
  p1,
  p2,
  p3,
}) => {
  return (
    <section id="hero">
      <div className="container">
        <div data-aos="zoom-in" className="content">
          <div className="img">
            <img src={heroImage} alt="" />
          </div>
          <div className="textContent">
            <p className="title">{title}</p>
            <h1>
              {headingInf}
              <span> {textInnerHeading}</span>
            </h1>
            <p>{mainP}</p>
            <div className="expContent">
              <div className="col1">
                <p>+
                  <CountUp end={num1} duration={2.5} className="num" />
                </p>
                <span className="pgf">{p1}</span>
              </div>
              <div className="col2">
                <p>+
                  <CountUp end={num2} duration={2.5} className="num" />
                </p>
                <span className="pgf">{p2}</span>
              </div>
              <div className="col3">
                <p>+
                  <CountUp end={num3} duration={2.5} className="num" />
                </p>
                <span className="pgf">{p3}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
