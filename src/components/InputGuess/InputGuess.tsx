import React from "react";

/**
 * Input field for the user to submit their word guess.
 */
export const InputGuess = ({
  onChange,
  onSubmit,
  guess,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  guess: string;
}): React.ReactElement => {
  return (
    <form onSubmit={onSubmit} className="h-12 mt-12">
      <input
        type="text"
        value={guess}
        onChange={onChange}
        placeholder="Type a 5-letter word..."
        className=" w-96 h-full border rounded-md shadow-sm text-gray-800 text-lg py-1.5 px-5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6AA964]"
      />
      <button type="submit" className="btn btn-primary h-full ml-4">
        Submit word
      </button>
    </form>
  );
};
