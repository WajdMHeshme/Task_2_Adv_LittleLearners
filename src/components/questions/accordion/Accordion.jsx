import './Accordion.css'
import { useState } from 'react'
const Accordion = ({question , icons , mainpgf ,exIcon }) => {
    const [click , setClick] = useState(false);
    const toggle = () => {
        setClick(!click);
    }
    
  return (
    <div data-aos="fade-right"  style={{backgroundColor: click ? "#ffffff" : "#ffefe5"}} className='accordion'>
        <div className='mainHead'>
            <p>{question}</p>
            <span onClick={toggle}>{!click && icons}{click && exIcon}</span>
        </div>
        <span className = {click ? 'line' : ''}></span>
        <div style={{display: click ? "block" : "none"}}  className="pgf">
            {mainpgf}
        </div>
    </div>
  )
}

export default Accordion
