import { useState } from "react";

function Input({ setWords, answer }) {
  const [input, setInput] = useState("");
  const [numOfGuess, setNumOfGuess] = useState(0);
  const [isWinner, setIsWinner] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setNumOfGuess((prev) => prev + 1);
    setWords((prev) => [...prev, input]);
    console.log(answer, input);
    if (answer === input) {
      setIsWinner(true);
    }
    setInput("");
  }

  return (
    <>
      <form class="guess-input-wrapper" onSubmit={onSubmit}>
        <label for="guess-input">Enter guess:</label>
        {isWinner && (
          <div class="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong> {numOfGuess} guesses</strong>.
            </p>
          </div>
        )}

        {!isWinner && numOfGuess === 6 && (
          <div class="sad banner">
            <p>
              Sorry, the correct answer is <strong>LEARN</strong>.
            </p>
          </div>
        )}
        <input
          id="guess-input"
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          minLength={5}
          maxLength={5}
          disabled={numOfGuess === 6}
          type="text"
        />
      </form>
    </>
  );
}

export default Input;
