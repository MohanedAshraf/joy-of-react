import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ words, answer }) {
  return (
    <>
      <div class="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((idx) => {
          const checkAlpha = checkGuess(words[idx], answer);
          const classNames = checkAlpha
            ? checkAlpha.map((element) => `cell ${element.status}`)
            : range(5).map((idx) => "cell");
          return (
            <p key={idx} class="guess">
              <span className={classNames[0]}>
                {words[idx] ? words[idx][0] : ""}
              </span>
              <span className={classNames[1]}>
                {words[idx] ? words[idx][1] : ""}
              </span>
              <span className={classNames[2]}>
                {words[idx] ? words[idx][2] : ""}
              </span>
              <span className={classNames[3]}>
                {words[idx] ? words[idx][3] : ""}
              </span>
              <span className={classNames[4]}>
                {words[idx] ? words[idx][4] : ""}
              </span>
            </p>
          );
        })}
      </div>
    </>
  );
}

export default Guess;
