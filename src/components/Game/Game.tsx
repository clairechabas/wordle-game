import React from "react";
import { InputGuess } from "../InputGuess";
import { GuessesGrid } from "../GuessesGrid";
import { GuessLetter, WordMap } from "../../utils/types";

const WORD_LENGTH = 5;

export const Game = ({
  word,
  endGame,
}: {
  word: WordMap;
  endGame: ({ won, message }: { won: boolean; message: string }) => void;
}): React.ReactElement => {
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
        status: !Object.values(word).includes(guessArray[i])
          ? "wrong"
          : word[i] === guessArray[i]
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

    const lastGuess = guesses.slice(
      (numOfGuesses - 1) * WORD_LENGTH,
      numOfGuesses * WORD_LENGTH
    );
    const won = lastGuess.every((cell) => cell.status === "correct");

    if (lastGuess.length && won) {
      endGame({
        won: true,
        message: `Congratulations! 🎉${"\n"}You got it in ${numOfGuesses} ${
          numOfGuesses === 1 ? "guess" : "guesses"
        }`,
      });
    }

    if (numOfGuesses === 5 && !won) {
      window.alert("Last chance, choose wisely!");
    }

    if (numOfGuesses === 6) {
      // End game, announce result and show modal to play again.
      if (!lastGuess.every((cell) => cell.status === "correct")) {
        const wordAsString = Object.values(word).join("");

        endGame({
          won: false,
          message: `Sorry! 🥹${"\n"}The correct answer was ${wordAsString}`,
        });
      }
    }
  }, [endGame, guesses, word]);

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
