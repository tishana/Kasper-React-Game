import React, { useState } from 'react'
import Header from './components/Header'
import Board from './components/Board'
import './app.css'
export default function App() {
  // setting state
  const [card, setCard] = useState({
    name: "Frodo",
    race: "Hobbit",
    skills: "Sneak, Steal",
  });
  // const [cardName, setCardName] = useState('N/A')
  // const [cardRace, setCardRace] = useState('N/A')
  // const [cardSkills, setCardSkills] = useState('N/A')

  // functions
  const handleNameChange = (e) => {
    console.log(e.target.value)
    setCardName(e.target.value)
  }

  const handleRaceChange = (e) => {
    console.log(e.target.value)
    setCardRace(e.target.value)
  }

  const handleSkillsChange = (e) => {
    console.log(e.target.value)
    setCardSkills(e.target.value)
  }
  // function to create a new card
  // a button to create new cards
  return (
    <div className="App">
      <h1>Name: {card.name}</h1>
      <h1>Race: {card.race}</h1>
      <h1>Skills: {card.skills}</h1>
      <div className='inputs'>
        {/* <input placeholder='Player Name' /> */}
        <input placeholder='Character Name' onChange={handleNameChange}/>
        <input placeholder='Character Race' onChange={handleRaceChange}/>
        <input placeholder='Character Skills' onChange={handleSkillsChange}/>
        {/* SUBMIT BUTTON*/}
        {/* <button onClick={() =>{setPlayerName('Sarah')}}>Create Card</button>  */}
      </div>
        <Board />
    </div>
  )
}
