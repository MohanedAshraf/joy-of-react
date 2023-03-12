import { useState } from "react";

function Input({ setWords }) {
  const [input, setInput] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setInput("");
    setWords((prev) => [...prev, input]);
  }

  return (
    <>
      <form class="guess-input-wrapper" onSubmit={onSubmit}>
        <label for="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          minLength={5}
          maxLength={5}
          type="text"
        />
      </form>
    </>
  );
}

export default Input;
