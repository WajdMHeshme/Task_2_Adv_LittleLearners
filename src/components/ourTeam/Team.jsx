import "./Team.css";
import Member from "./member/Member";
import MainHeading from "../benefits/heading/MainHeading";
import { TeamData } from "../../Data";
const Team = () => {
  return (
    <section>
      <div className="container">
        <MainHeading
          startPgf={"Our Teachers With Experties"}
          heading={"Our Team Members"}
          mainPgf={
            "At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
          }
        />

        <div className="memberCardsContainer">
          {TeamData.map((member, index) => (
            <Member
              key={index}
              img={member.img}
              name={member.name}
              icon={member.icon}
              title={member.title}
              mainPgf={member.mainInf}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
