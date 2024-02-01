import React from "react";
import { Cell } from "../Cell";

/**
 * The grid displaying the guesses letters and their appropriate color.
 */
export const GuessesGrid = ({
  guesses,
}: {
  guesses: string[];
}): React.ReactElement => {
  return (
    <section className="grid grid-rows-6 grid-cols-5 gap-2">
      {guesses.map((letter, index) => (
        <React.Fragment key={index}>
          <Cell letter={letter} />
        </React.Fragment>
      ))}
    </section>
  );
};
