import React, { useState } from 'react'
import Header from './components/Header'
import Board from './components/Board'
import './app.css'
export default function App() {
  // setting state
  const [newCard, setNewCard] = useState({})
  const [playerName, setPlayerName] = useState("Sara")
  // function to create a new card
  // a button to create new cards
  return (
    <div className="App">
      <h1>{playerName}</h1>
      <div className='inputs'>
        <input placeholder='Player Name' />
        <input placeholder='Character Name'/>
        <input placeholder='Character Race'/>
        <input placeholder='Character Skills'/>
        {/* SUBMIT BUTTON */}
        <button>Create Card</button>
      </div>
        <Board />
    </div>
  )
}
