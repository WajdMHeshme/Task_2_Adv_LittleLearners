import './NewCard.css'

const NewCard = ({title , icon , pgf}) => {
  return (
    <div data-aos="fade-right" className='myCard'>
        <div className="titleContent">
        
            <h1>{title}</h1>
            <div className="img">
                <img src= {icon} alt="icon" />
            </div>
            </div>
            <div className="myPgf">
                <p>{pgf}</p>
            </div>
        </div>
  )
}

export default NewCard
