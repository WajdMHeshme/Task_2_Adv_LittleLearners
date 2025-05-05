import Card from "../benefits/cards/Card";
import { SpecialCardData } from "../../Data";
import MainHeading from "../benefits/heading/MainHeading";
import "./Acards.css";
const Acards = () => {
  return (
    <section>
      <div className="container">
        <MainHeading 
        startPgf={"Our Features"}
        heading={"Our Special Features"}
        mainPgf={"Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"}/>
        <div className="myCardsCountainer">
          {SpecialCardData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              heading={card.heading}
              paragraph={card.paragraph}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Acards;
