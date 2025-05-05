import MainHeading from "../benefits/heading/MainHeading";
import "./Testimonials.css";
import "../benefits/heading/MainHeading.css";
import TestimonialSlider from "./slider/Slider";
const Testimonials = () => {
  return (
    <section id="adimission">
      <div className="myContainer">
        <MainHeading
          startPgf={"Their Happy Words 🤗"}
          heading={"Our Testimonials"}
          mainPgf={
            "Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
          }
        />
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
