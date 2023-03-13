import { useState } from "react";

function WordList({ words }) {
  console.log(words);
  return (
    <>
      <div class="guess-results">
        {words.map((word, idx) => (
          <p key={idx} class="guess">
            {word}
          </p>
        ))}
      </div>
    </>
  );
}

export default WordList;
