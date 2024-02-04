import React from "react";
import logo from "./assets/logo.png";
import { Game } from "./components/Game";
import { getRandomWordToFind } from "./utils/wordsToFind";
import { WordMap } from "./utils/types";
import clsx from "clsx";

function App() {
  const [wordOfGame, setWordOfGame] = React.useState<WordMap | null>(null);
  const [message, setMessage] = React.useState<string>("");
  const [won, setWon] = React.useState<boolean>(false);

  /**
   * Set the word of the game when page loads.
   *
   * Later, this will be set on the "Start game" button press.
   */
  const onStartGame = () => {
    setMessage("");

    const word = getRandomWordToFind();
    setWordOfGame(word);
  };

  const endGame = ({ won, message }: { won: boolean; message: string }) => {
    setMessage(message);
    setWon(won);
    setWordOfGame(null);
  };

  return (
    <div className="mx-auto my-0 text-slate-800">
      <header className="w-full h-16 flex items-center mb-12 border-b border-slate-300">
        <div className="w-9/12 xl:w-[1145px] mx-auto my0 flex items-center justify-center">
          <img src={logo} alt="Wordle logo" className="w-6 h-6 mr-2" />
          <h1 className="font-semibold text-3xl">Wordle</h1>
        </div>
      </header>

      {wordOfGame ? (
        <Game word={wordOfGame} endGame={endGame} />
      ) : (
        <div className="mx-auto mt-[10%] p-9 max-w-[600px] h-[350px] flex flex-col justify-around items-center rounded-xl border-[12px] border-[#D1B036]">
          <h2 className="text-4xl font-bold text-center whitespace-pre-line leading-[3rem]">
            {message || "Start new game"}
          </h2>
          <button
            onClick={onStartGame}
            className="btn btn-primary text-2xl w-[80%] h-14 bg-slate-800 hover:opacity-80"
          >
            {message ? "Play again" : `Let's go!`}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
