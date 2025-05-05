import "./VesMiss.css";
import MainHeading from "../benefits/heading/MainHeading";
import { MissVessCards } from "../../Data";
import NewCard from "./cards/NewCard";
const VesMiss = () => {
  return (
    <section>
      <div className="container">
        <MainHeading
          startPgf={"Mission & Visions"}
          heading={"Our Mission & Visions"}
          mainPgf={
            "We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
          }
        />

        <div className="cardsContainer">
          {MissVessCards.map((card, index) => (
            <NewCard
              key={index}
              title={card.title}
              icon={card.icon}
              pgf={card.pagf}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VesMiss;
