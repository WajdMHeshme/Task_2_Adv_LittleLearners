import './StudentsCard.css'
const StudentsCard = ({img , title , pgf}) => {
  return (
    <div data-aos="fade-up" className='studentCard'>
      <div className="imageContainer">
        <img src= {img} alt="" />
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p>{pgf}</p>
      </div>
    </div>
  )
}

export default StudentsCard