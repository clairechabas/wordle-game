export type WordMap = Map<string, number>;

export type LetterStatus = "correct" | "misplaced" | "wrong" | "undefined";

export type GuessLetter = {
  id: string;
  position: number;
  letter: string;
  status: LetterStatus;
};
