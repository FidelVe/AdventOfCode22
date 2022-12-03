const { getPriority, input, bisect } = require("./lib");

const maxRepetitions = 100;
let rep = 0;
const badges = [];
let sum = 0;

while (rep <= maxRepetitions) {
  //
  const startIndex = rep * 3;
  const endIndex = rep * 3 + 3;
  const set = input.slice(startIndex, endIndex);

  if (set.length > 0) {
    const parsedSet =
      set[0].length <= set[1].length && set[0].length <= set[2].length
        ? [set[0], set[1], set[2]]
        : set[1].length <= set[0].length && set[1].length <= set[2].length
        ? [set[1], set[0], set[2]]
        : [set[2], set[0], set[1]];

    parsedSet.forEach(each => console.log(each));

    for (const letter of parsedSet[0]) {
      if (parsedSet[1].includes(letter) && parsedSet[2].includes(letter)) {
        //
        badges.push(letter);
        const priority = getPriority(letter);
        sum += priority;
        console.log(`letter: ${letter}. priority: ${priority}`);
        console.log(sum);
        console.log("!-----");
        break;
      }
    }
  }

  //
  rep += 1;
}

console.log(`reps: ${rep}`);
