import "./Awards.css";
import MainHeading from "../benefits/heading/MainHeading";
import NewSlider from "./slider/NewSlider";
const Awards = () => {
  return (
    <section>
      <div className="container" 
      style={{
        overflow: "hidden",
      }}>
        <MainHeading
          startPgf={"Our Achievements"}
          heading={"Our Awards and Recognitions"}
          mainPgf={
            "Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
          }
        />
        <div className="sliderContainer">
          <NewSlider />
        </div>
      </div>
    </section>
  );
};

export default Awards;
