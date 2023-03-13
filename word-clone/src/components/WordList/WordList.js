import { useState } from "react";
import Guess from "../Guess/Guess";

function WordList({ words }) {
  return (
    <>
      <Guess words={words} />
      {/* <div class="guess-results">
        {words.map((word, idx) => (
          <p key={idx} class="guess">
            {word}
          </p>
        ))}
      </div> */}
    </>
  );
}

export default WordList;
