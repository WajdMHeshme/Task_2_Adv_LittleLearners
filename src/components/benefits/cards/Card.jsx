import './Card.css'
const Card = ({icon , heading , paragraph}) => {
  return (
    <div data-aos="fade-right" className='cards'>
        <div className="img-container">
          {icon}
        </div>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
    </div>
  )
}

export default Card
