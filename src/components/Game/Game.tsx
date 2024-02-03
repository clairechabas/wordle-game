import React from "react";
import { InputGuess } from "../InputGuess";
import { GuessesGrid } from "../GuessesGrid";
import { GuessLetter, WordMap } from "../../utils/types";

const WORD_LENGTH = 5;

export const Game = ({ word }: { word: WordMap }): React.ReactElement => {
  const [guess, setGuess] = React.useState<string>("");
  const [guesses, setGuesses] = React.useState<GuessLetter[]>(
    Array.from({ length: 30 }, () => ({
      id: crypto.randomUUID(),
      position: 0,
      letter: "",
      status: "undefined",
    }))
  );

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > WORD_LENGTH) {
      window.alert("Word must be 5 letters or less");
      return;
    }
    setGuess(e.target.value);
  };

  const handleWordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const guessArray = guess.toUpperCase().split("");

    if (guessArray.length !== WORD_LENGTH) {
      window.alert("Word must be 5 letters");
      return;
    }

    // fill each cell of the appropriate row with the letter and their appropriate color
    const newGuesses = [...guesses];
    const nextEmptyCellIndex = newGuesses.findIndex(
      (cell) => cell.letter.length === 0
    );

    for (let i = 0; i < guessArray.length; i++) {
      newGuesses[nextEmptyCellIndex + i] = {
        ...newGuesses[nextEmptyCellIndex + i],
        position: i,
        letter: guessArray[i].toUpperCase(),
        status: !word.has(guessArray[i])
          ? "wrong"
          : word.get(guessArray[i]) === i
          ? "correct"
          : "misplaced",
      };
    }
    setGuesses(newGuesses);

    // Reset input field
    setGuess("");
  };

  /**
   * Check the guess
   */
  React.useEffect(() => {
    const numOfGuesses =
      guesses.filter((cell) => cell.letter.length > 0).length / WORD_LENGTH;
    console.log("Number of guesses:", numOfGuesses);

    if (numOfGuesses === 5) {
      window.alert("Last chance, choose wisely!");
    }

    if (numOfGuesses === 6) {
      // End game, announce result and show modal to play again.
      window.alert("You've reached the maximum number of guesses, game over!");
    }

    console.log("New guess!", guesses);
  }, [guesses, word]);

  return (
    <main className="w-9/12 xl:w-[1145px] mx-auto my-0 flex flex-col items-center">
      <GuessesGrid guesses={guesses} />

      <InputGuess
        onChange={handleWordChange}
        onSubmit={handleWordSubmit}
        guess={guess}
      />
    </main>
  );
};
