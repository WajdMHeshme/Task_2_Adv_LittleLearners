import MainHeading from "./heading/MainHeading";
import { CardData } from "../../Data";
import Card from "./cards/Card";
import "./Benefits.css";
const Benefits = () => {
  return (
    <div id="academics">
      <div className="container">
        <MainHeading
          startPgf={"Children Deserve Bright Future"}
          heading={"Our Benefits"}
          mainPgf={
            "With a dedicated team of experienced educators, state-of-the-art facilities,and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
          }
        />
        <div className="cardContainer">
          {CardData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              heading={card.heading}
              paragraph={card.paragraph}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
