import adjectives from "./data/adjectives.js";
import objects from "./data/objects.js";

const wordsOfWisdomWrapper = document.getElementById("words-of-wisdom");

if (wordsOfWisdomWrapper && adjectives && objects) {
  const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
  const objectIndex = Math.floor(Math.random() * objects.length);

  const wordsOfWisdom = document.createElement("span");
  wordsOfWisdom.innerText = ` ${adjectives[adjectiveIndex]} ${objects[objectIndex]}`;
  wordsOfWisdomWrapper.append(wordsOfWisdom);
}
