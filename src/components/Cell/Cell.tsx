import React from "react";

/**
 * Cell showing a letter in a word row.
 */
export const Cell = ({ letter }: { letter: string }): React.ReactElement => {
  return (
    <div className="w-24 h-24 border border-slate-300 rounded flex justify-center items-center font-bold text-4xl">
      {letter}
    </div>
  );
};
