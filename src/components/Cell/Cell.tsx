import React from "react";
import { LetterStatus } from "../../utils/types";

const STATUS_COLOR = {
  misplaced: "bg-[#b39f4c] border-[#b39f4c]",
  correct: "bg-[#628C54] border-[#628C54]",
  wrong: "bg-[#3A3A3C] border-[#3A3A3C]",
  undefined: "bg-transparent",
};

/**
 * Cell showing a letter in a word row.
 */
export const Cell = ({
  letter,
  status,
}: {
  letter: string;
  status: LetterStatus;
}): React.ReactElement => {
  console.log("letter, status", letter, status, STATUS_COLOR[status]);
  const statusColor = STATUS_COLOR[status];
  const classNames = `w-24 h-24 border rounded flex justify-center items-center font-bold text-4xl text-white ${statusColor}`;

  return <div className={classNames}>{letter}</div>;
};
