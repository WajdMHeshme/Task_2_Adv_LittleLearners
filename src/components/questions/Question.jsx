import "./Question.css";
import "../../index.css";
import MainHeading from "../benefits/heading/MainHeading";
import Accordion from "./accordion/Accordion";
import { AccordionData } from "../../Data";
const Question = () => {
  return (
    <section id="life">
      <div className="container">
        <MainHeading
          startPgf={"Solutions For The Doubts"}
          heading={"Frequently Asked Questions"}
          mainPgf={
            "Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
          }
        />

        <div className="accordinContainer">
          {AccordionData.map((accordion, index) => (
            <Accordion
              key={index}
              icons={accordion.icon}
              exIcon={accordion.extraIcon}
              question={accordion.question}
              mainpgf = {accordion.pgf}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Question;
