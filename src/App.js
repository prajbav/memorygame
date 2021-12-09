import { useState, useEffect } from "react";
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

  const shuffleCards = () => {
    const shufffled = [...cardImgs, ...cardImgs]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shufffled);
    setTurns(0);
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
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              console.log("setting matched");
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
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  console.log(cards);

  return (
    <div className="App">
      <h1>Card Match Game</h1>
      <button onClick={shuffleCards}>Start</button>
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
        <p>Turns:{turns}</p>
      </div>
    </div>
  );
}

export default App;
