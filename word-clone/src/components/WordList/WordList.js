import { useState } from "react";

function WordList({ words }) {
  console.log(words);
  return (
    <>
      <div class="guess-results">
        <p class="guess">FIRST</p>
        <p class="guess">GUESS</p>
      </div>
    </>
  );
}

export default WordList;
