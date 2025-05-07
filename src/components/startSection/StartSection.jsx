import "./StartSection.css";
import CornerImg from "/assets/AbstractDesign5.png";
const StartSection = ({ title, mainTitle, paragraph }) => {
  return (
    <div data-aos="zoom-in" className="start">
      <div className="imgCorner">
        <img src={CornerImg} alt="img" />
      </div>
      <div className="content">
        <div className="contentTitles">
          <p> {title}</p>
          <h1> {mainTitle}</h1>
        </div>
        <div className="pgfContainer">
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default StartSection;
