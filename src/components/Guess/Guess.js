import React from "react";
import { range } from '../../utils'
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) { 

  const style = status ? `cell ${status}` : `cell`

  return (
    <span className={style}>
      {letter}
    </span>
  );
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={value ? result[num].letter : undefined}
          status={value ? result[num].status : ''}
        />
      ))}
    </p>
  );
}

export default Guess;
