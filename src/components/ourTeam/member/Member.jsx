import "./Member.css";

const Member = ({ img, name, icon, title, mainPgf }) => {
  return (
    <div data-aos="fade-right" className="member">
      <div className="startInfo">
        <div className="info">
          <div className="img">
            <img src={img} alt="img" />
          </div>
          <h2>{name}</h2>
        </div>
        <span>{icon}</span>
      </div>
      <div className="memberInfo">
        <h4>{title}</h4>
        <p>{mainPgf}</p>
      </div>
    </div>
  );
};

export default Member;
