import React, { useRef, useState } from 'react'
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

  const [cards, setCards] = useState([])
  // const [cardName, setCardName] = useState('N/A')
  // const [cardRace, setCardRace] = useState('N/A')
  // const [cardSkills, setCardSkills] = useState('N/A')

  const cardNameRef = useRef(null)
  const cardRaceRef = useRef(null)
  const cardSkillsRef = useRef(null)
  // Arrays and Objects

  // functions
  const handleNameChange = (e) => {
    // console.log(e.target.value)
    // setCardName(e.target.value)
  }

  const handleRaceChange = (e) => {
    // console.log(e.target.value)
    // setCardRace(e.target.value)
  }

  const handleSkillsChange = (e) => {
    // console.log(e.target.value)
    // setCardSkills(e.target.value)
  }

  const handleSubmit = () => {
    const newCard = {
      name: cardNameRef.current.value,
      race: cardRaceRef.current.value,
      skills: cardSkillsRef.current.value
    }
    setCard(newCard)

    const oldArr = cards
    oldArr.push(newCard)
    setCards(oldArr)
    console.log(cards)
  }
  // function to create a new card
  // a button to create new cards
  return (
    <div className="App">
      {/* <h1>Name: {card.name}</h1>
      <h1>Race: {card.race}</h1>
      <h1>Skills: {card.skills}</h1> */}
      <div className='inputs'>
        {/* <input placeholder='Player Name' /> */}
        <input placeholder='Character Name' ref={cardNameRef}/>
        <input placeholder='Character Race' ref={cardRaceRef}/>
        <input placeholder='Character Skills' ref={cardSkillsRef} />
        {/* SUBMIT BUTTON*/}
        <button onClick={handleSubmit}>Create Card</button> 
      </div>
        <Board cards={cards}/>
    </div>
  )
}
