const input = require("./input");

const alph = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

function getPriority(letter) {
  if (alph.includes(letter)) {
    return alph.indexOf(letter) + 1;
  } else if (alph.includes(letter.toLowerCase())) {
    return alph.indexOf(letter.toLowerCase()) + 27;
  }
  return null;
}

function bisect(str) {
  return [str.slice(0, str.length / 2), str.slice(str.length / 2)];
}
// const foo = alph.map(letter => {
//   const a = getPriority(letter);
//   const b = getPriority(letter.toUpperCase());
//   return [[letter, a], [letter.toUpperCase(), b]];
// });

// foo.forEach(pair => {
//   console.log(
//     `letter ${pair[0][0]} => ${pair[0][1]} | letter ${pair[1][0]} => ${
//       pair[1][1]
//     }`
//   );
// });

module.exports = {
  getPriority,
  input,
  bisect
};
