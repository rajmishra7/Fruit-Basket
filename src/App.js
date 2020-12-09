import React, { useState } from "react";
import "./styles.css";

var fruitDictionary = {
  "🍇": "Grapes",
  "🍊": "Orange",
  "🍉": "Watermelon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🍎": "Apple",
  "🍒": "Cherries",
  "🍓": "Strawberry"
};

var fruits= Object.keys(fruitDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("name will appear here");
  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = fruitDictionary[userInput];
    
    if (meaning === undefined) {
      meaning = "please enter a valid emoji";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(fruit){
    var meaning = fruitDictionary[fruit];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Fruit Basket !</h1>
      <input
        onChange={inputHandler}
        placeholder="enter any fruit emoji and get the name of it"
      ></input>
      <div className="divOutput">{meaning}</div>
      {
        fruits.map(function(fruit) {
          return <span 
          onClick={() => emojiClickHandler(fruit)}
          style={{fontSize: "2rem",cursor: "pointer", padding: "0.5rem"}} key={fruit}>{fruit} </span>;
        })
      }
    </div>
  );
}
