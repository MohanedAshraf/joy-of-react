import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ words }) {
  return (
    <>
      <div class="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((idx) => {
          return (
            <p key={idx} class="guess">
              <span class="cell">{words[idx] ? words[idx][0] : ""}</span>
              <span class="cell">{words[idx] ? words[idx][1] : ""}</span>
              <span class="cell">{words[idx] ? words[idx][2] : ""}</span>
              <span class="cell">{words[idx] ? words[idx][3] : ""}</span>
              <span class="cell">{words[idx] ? words[idx][4] : ""}</span>
            </p>
          );
        })}
      </div>
    </>
  );
}

export default Guess;
