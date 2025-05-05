
import './TopNav.css'
import rImg from '/assets/Abstract Design (2).png'
import lImg from '/assets/Abstract Design (3).png'
import shap1 from '/assets/Abstract Design.png'
import shap2 from "/assets/Abstract Design.png"
const TopNav = ({text , icon}) => {
  return (
    <div className='topNav'>
        <img className='leftPhoto' src = {rImg} alt="left" />
        <img className='rightPhoto' src = {lImg} alt="right" />
        <p>{text}</p>
        <span>{icon}</span>
        <img className='left' src={shap1} alt="" />
        <img className='right' src={shap2} alt="" />
    </div>
  )
}

export default TopNav