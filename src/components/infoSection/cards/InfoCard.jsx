import "./InfoCard.css";
const InfoCard = ({ heading, line, paragrapgh, btnText, arrowIcon }) => {
  return (
    <div data-aos="fade-right" className="InfoCard">
      <h2>{heading}</h2>
      <div className="imageContainer">
        <img src={line} alt="line" />
      </div>
      <div className="text">
        <p>{paragrapgh}</p>
      </div>
      <button className="btn">
        {btnText} {arrowIcon}
      </button>
    </div>
  );
};

export default InfoCard;
