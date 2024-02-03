/**
 * Get the word to find for a game.
 */
export function getRandomWordToFind(): WordMap {
  const randomIndex = Math.floor(Math.random() * wordsToFind.length);
  const word = wordsToFind[randomIndex].toUpperCase();
  const wordMap = new Map();

  for (let i = 0; i < word.length; i++) {
    wordMap.set(word[i], i);
  }

  console.log("Word to find:", wordMap);

  return wordMap;
}

/**
 * A list of words to find.
 *
 * Next version: generate a random 5-letter word to find with a script.
 */
const wordsToFind = [
  "Tiger",
  "Dance",
  "Baked",
  "Wagon",
  "Frown",
  "Jolly",
  "Peach",
  "Quilt",
  "Forge",
  "Plank",
  "Zebra",
  "Oasis",
  "Vital",
  "Haste",
  "Blend",
  "Grape",
  "Surge",
  "Wrist",
  "Onion",
  "Quest",
];
