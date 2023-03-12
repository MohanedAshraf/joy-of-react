import { useState } from "react";

function Input() {
  const [word, setWord] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setWord("");
  }
  console.log(word);
  return (
    <>
      <form class="guess-input-wrapper" onSubmit={onSubmit}>
        <label for="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          minLength={5}
          maxLength={5}
          type="text"
        />
      </form>
    </>
  );
}

export default Input;
