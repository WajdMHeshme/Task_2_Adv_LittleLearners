import "./History.css";
import MainHeading from "../benefits/heading/MainHeading";
import { OurHistoryData } from "../../Data";
import OurHistory from "./ourHistory/OurHistory";
const History = () => {
  return (
    <section>
      <div className="container">
        <MainHeading
          startPgf={"Our Progressive Journey"}
          heading={"Our History"}
          mainPgf={
            "Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
          }
        />

        <div className="historySection">
          <div className="historyCard">
            {OurHistoryData.map((section, index) => (
              <OurHistory
                key={index}
                img={section.icon}
                history={section.history}
                title={section.title}
                pgf={section.pgf}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
