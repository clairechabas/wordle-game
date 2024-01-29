import React from "react";

const WORD_LENGTH = 5;

export const Game = (): React.ReactElement => {
  const [word, setWord] = React.useState<string>("");

  const handleWordSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (word.length !== WORD_LENGTH) {
      window.alert("Word must be 5 letters");
      return;
    }

    // fill each cell of the appropriate row with the letter
    console.log(word);
  };

  return (
    <main className="w-9/12 xl:w-[1145px] mx-auto my-0 flex flex-col items-center">
      <section className="">{word}</section>

      <section className="grid grid-rows-6 grid-cols-5 gap-2">
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className="w-24 h-24 border border-slate-300 rounded"
          ></div>
        ))}
      </section>

      <form onSubmit={handleWordSubmit} className="h-12 mt-12">
        <input
          type="text"
          value={word}
          onChange={(e) => {
            if (e.target.value.length > WORD_LENGTH) {
              window.alert("Word must be 5 letters or less");
              return;
            }
            setWord(e.target.value);
          }}
          placeholder="Type a 5-letter word..."
          className=" w-96 h-full border rounded-md shadow-sm text-gray-800 text-lg py-1.5 px-5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6AA964]"
        />
        <button type="submit" className="btn btn-primary h-full ml-4">
          Submit word
        </button>
      </form>
    </main>
  );
};
