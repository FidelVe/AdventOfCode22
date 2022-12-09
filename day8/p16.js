const input = require("./input");
const { getScenicScore } = require("./lib");

const scores = [];
for (let y = 0; y < input.length; y++) {
  for (let x = 0; x < input[y].length; x++) {
    const score = getScenicScore([x + 1, y + 1], input);
    scores.push(score);
  }
}
console.log(`Scores raw: "${scores.slice(0, 20)}"`);
const sorted = scores.sort((a, b) => {
  return b - a;
});
console.log(`Scores sorted: "${sorted.slice(0, 10)}"`);
