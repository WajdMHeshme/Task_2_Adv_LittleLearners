import './OurHistory.css'
import line from '/assets/SubContainer.png';
const OurHistory = ({img , history , title , pgf}) => {
  return (
    <div data-aos="fade-bottom" className='section'>
      <div className="content">
        <div className="line">
            <img src={line} alt="line" />
        </div>
        <div className="img">
            <img src= {img} alt="req" />
        </div>
        <h1>{history}</h1>
      </div>
      <div className="textContent">
        <h3>{title}</h3>
        <p>{pgf}</p>
      </div>
    </div>
  )
}

export default OurHistory;
