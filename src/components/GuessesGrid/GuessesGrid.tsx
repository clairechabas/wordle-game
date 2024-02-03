import React from "react";
import { Cell } from "../Cell";
import { GuessLetter } from "../../utils/types";

/**
 * The grid displaying the guesses letters and their appropriate color.
 */
export const GuessesGrid = ({
  guesses,
}: {
  guesses: GuessLetter[];
}): React.ReactElement => {
  return (
    <section className="grid grid-rows-6 grid-cols-5 gap-2">
      {guesses.map((guess) => (
        <React.Fragment key={guess.id}>
          <Cell letter={guess.letter} status={guess.status} />
        </React.Fragment>
      ))}
    </section>
  );
};
