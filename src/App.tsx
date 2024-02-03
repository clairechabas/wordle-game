import React from "react";
import logo from "./assets/logo.png";
import { Game } from "./components/Game";
import { getRandomWordToFind } from "./utils/wordsToFind";
import { WordMap } from "./utils/types";

function App() {
  const [wordOfGame, setWordOfGame] = React.useState<WordMap | null>(null);

  /**
   * Set the word of the game when page loads.
   *
   * Later, this will be set on the "Start game" button press.
   */
  React.useEffect(() => {
    const word = getRandomWordToFind();
    setWordOfGame(word);
  }, []);

  return (
    <div className="mx-auto my-0">
      <header className="w-full h-16 flex items-center mb-12 border-b">
        <div className="w-9/12 xl:w-[1145px] mx-auto my0 flex items-center justify-center">
          <img src={logo} alt="Wordle logo" className="w-6 h-6 mr-2" />
          <h1 className="font-semibold text-3xl">Wordle</h1>
        </div>
      </header>

      {wordOfGame ? <Game word={wordOfGame} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
