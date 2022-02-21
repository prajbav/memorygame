import React, { useState, useEffect } from "react";
import SingleCard from "./component/SingleCard";

import lion from "./images/lion.jpeg";
import bird from "./images/bird.jpeg";
import ele from "./images/ele.png";
import rabbit from "./images/rabbit.png";
import bear from "./images/bear.png";
import panda from "./images/panda.jpeg";
import "./App.css";

const cardImgs = [
  { src: lion, matched: false },
  { src: bird, matched: false },
  { src: ele, matched: false },
  { src: rabbit, matched: false },
  { src: bear, matched: false },
  { src: panda, matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);
  const [matches, setMatches] = useState(0);

  const shuffleCards = () => {
    const shufffled = [...cardImgs, ...cardImgs]
      .sort(() => Math.random() - Math.floor(Math.random() * 5 + 1))
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shufffled);
    setTurns(0);
    setMatches(0);
    setWon(false);
  };

  //console.log(cards);
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetChoice = () => {
    setChoiceTwo(null);
    setChoiceOne(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };
  useEffect(() => {
    //  console.log(choiceOne);
    if (matches < cardImgs.length) {
      if (choiceOne && choiceTwo) {
        setDisabled(true);
        if (choiceOne.src === choiceTwo.src) {
          setCards((prevCards) => {
            return prevCards.map((card) => {
              if (card.src === choiceOne.src) {
                console.log("count", matches);
                setMatches(matches + 1);
                return { ...card, matched: true };
              } else {
                return card;
              }
            });
          });
          console.log("matched");

          resetChoice();
        } else {
          console.log("not matched");
          setTimeout(() => {
            resetChoice();
          }, 1000);
        }
      }
    } else if (matches === cardImgs.length) {
      setWon(true);
    }
  }, [choiceOne, choiceTwo, matches]);

  useEffect(() => {
    shuffleCards();
  }, []);

  console.log(matches, "matches deeky");

  return (
    <div className="App">
      <h1>Card Match Game Using React Hooks</h1>
      <div className="menu-info">
        <span>
          <button onClick={shuffleCards}>Start</button>
        </span>
        <span className="turns-button">Turns:{turns}</span>
      </div>
      {won && (
        <React.Fragment>
          <div
            id="overlay"
            className="container"
            onClick={() => {
              setWon(false);
              shuffleCards();
            }}
          >
            <div className="won-text"> You won! </div>
          </div>
        </React.Fragment>
      )}

      <div className="cards-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleClick={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
