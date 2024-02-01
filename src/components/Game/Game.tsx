import React from "react";
import { InputWord } from "../InputWord";
import { GuessesGrid } from "../GuessesGrid";

const WORD_LENGTH = 5;

export const Game = (): React.ReactElement => {
  const [word, setWord] = React.useState<string>("");
  const [guesses, setGuesses] = React.useState<string[]>(
    Array.from({ length: 30 }, () => "")
  );

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > WORD_LENGTH) {
      window.alert("Word must be 5 letters or less");
      return;
    }
    setWord(e.target.value);
  };

  const handleWordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (word.length !== WORD_LENGTH) {
      window.alert("Word must be 5 letters");
      return;
    }

    // fill each cell of the appropriate row with the letter and their appropriate color
    const newGuesses = [...guesses];
    const nextEmptyCellIndex = newGuesses.findIndex(
      (cell) => cell.length === 0
    );
    for (let i = 0; i < word.length; i++) {
      newGuesses[nextEmptyCellIndex + i] = word[i];
    }
    setGuesses(newGuesses);

    // Reset input field
    setWord("");
  };

  React.useEffect(() => {
    const numOfGuesses =
      guesses.filter((cell) => cell.length > 0).length / WORD_LENGTH;
    console.log("Number of guesses:", numOfGuesses);

    if (numOfGuesses === 5) {
      window.alert("Last chance, choose wisely!");
    }

    if (numOfGuesses === 6) {
      // End game, announce result and show modal to play again.
      window.alert("You've reached the maximum number of guesses, game over!");
    }

    console.log("New guess!", guesses);
  }, [guesses]);

  return (
    <main className="w-9/12 xl:w-[1145px] mx-auto my-0 flex flex-col items-center">
      <GuessesGrid guesses={guesses} />

      <InputWord
        onChange={handleWordChange}
        onSubmit={handleWordSubmit}
        word={word}
      />
    </main>
  );
};
