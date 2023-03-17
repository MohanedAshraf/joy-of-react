import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Input from "../Input";
import Guess from "../Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = useState([]);
  return (
    <>
      <div>Put a game here!</div>
      <Guess words={words} answer={answer} />
      <Input setWords={setWords} />
    </>
  );
}

export default Game;
