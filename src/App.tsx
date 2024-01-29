import logo from "./assets/logo.png";
import { Game } from "./components/Game";

function App() {
  return (
    <div className="w-[1145px] mx-auto my0">
      <header className="flex items-center justify-center h-16 mb-8 border">
        <img src={logo} alt="Wordle logo" className="w-6 h-6 mr-2" />
        <h1 className="font-semibold text-3xl">Wordle</h1>
      </header>

      <Game />
    </div>
  );
}

export default App;
