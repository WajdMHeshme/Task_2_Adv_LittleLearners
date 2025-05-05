import MainHeading from "../benefits/heading/MainHeading";
import InfoCard from "./cards/InfoCard";
import "./Info.css";
import { CardInfoData } from "../../Data";
const Info = () => {
  return (
    <section id="about">
      <div className="container">
        <MainHeading
          startPgf={"Explore More"}
          heading={"Navigate through our Pages"}
          mainPgf={
            "Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
          }
        />
        <div className="InfoCardContainer">
          {CardInfoData.map((card, index) => (
            <InfoCard
              key={index}
              heading={card.heading}
              line={card.line}
              paragrapgh={card.paragraph}
              btnText={card.btnText}
              arrowIcon={card.arrow}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
