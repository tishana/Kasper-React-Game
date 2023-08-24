import React from 'react'
import Card from './Card'
import './board.css'

export default function Board(props) {
  return (
    <div className='Board'>
        <h1>The Board</h1>
        <ul>
          {props.cards.map(card =>{
            return <Card card={card}/>
          })}
        </ul>
        
    </div>
  )
}
