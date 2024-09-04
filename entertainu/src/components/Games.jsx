import React from 'react'
import i1 from '../images/Flames.jpg'
import i2 from '../images/Love Calculator.jpg'
import '../Games.css'
export const Games = () => {
  return (
    <div className='games-section'>
        <div >
            <img className="game" src={i1} alt="" />
        </div>
        <div >
            <img className="game" src={i2} alt="" />
        </div>
    </div>
  )
}
