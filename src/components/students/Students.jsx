import "./Students.css";
import MainHeading from "../benefits/heading/MainHeading";
import { StudentsCardData } from "../../Data";
import StudentsCard from "./studentsCards/StudentsCard";
const Students = () => {
  return (
    <section>
      <div className="container">
        <MainHeading
          startPgf={"Our Features"}
          heading={"What Students Learn"}
          mainPgf={
            "At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
          }
        />

        <div className="cardsStudents">
          {StudentsCardData.map((card, index) => (
            <StudentsCard
              key={index}
              img={card.img}
              title={card.title}
              pgf={card.pgf}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Students;
