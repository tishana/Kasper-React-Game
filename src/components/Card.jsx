import React from 'react'
import './card.css'

export default function Card() {
  return (
    <div className="Card">
        <div className='cardTop'>
        <h2>Player Name</h2>
        <h4>Character Name</h4>
        <h4>Character Race</h4>
        <h4>Passive Skills</h4>
        </div>
        <div className='cardBottom'></div>
    </div>
  )
}
