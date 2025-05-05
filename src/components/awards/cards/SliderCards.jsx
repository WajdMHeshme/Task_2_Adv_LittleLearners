import './SliderCards.css'
const SliderCard = ({icon , heading , paragraph}) => {
  return (
    <div data-aos="fade-right" className='slidercards'>
        <div className="img-container">
          {icon}
        </div>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
    </div>
  )
}

export default SliderCard