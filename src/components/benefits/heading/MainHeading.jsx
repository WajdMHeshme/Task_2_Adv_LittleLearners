import React from 'react'
import './MainHeading.css'

const MainHeading = ({startPgf , heading , mainPgf , icon}) => {
  return (
    <div className='mainHeading'>
        <div className="parag">
            <p className='firstPgf'>{startPgf}{icon}</p>
        </div>
        <h1>{heading}</h1>
        <p>{mainPgf}</p>
    </div>
  )
}

export default MainHeading
