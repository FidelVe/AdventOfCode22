const input = require("./input");

/*
 * Rules:
 * Rocks beats scissors   => A > Z = 3 + 0 = 3
 * Rocks draw Rocks       => A = X = 1 + 3 = 4
 * Rocks loss Paper       => A < Y = 2 + 6 = 8
 * Paper beats Rocks      => B > X = 1 + 0 = 1
 * Paper draw Paper       => B = Y = 2 + 3 = 5
 * Paper loss Scissors    => B < Z = 3 + 6 = 9
 * Scissors beats paper   => C > Y = 2 + 0 = 2
 * Scissors draw scissors => C = Z = 3 + 3 = 6
 * Scissors loss rock     => C < X = 1 + 6 = 7
 */

const rules = [
  ["A", "X", 3], // I lose  X
  ["A", "Y", 4], // draw    Y
  ["A", "Z", 8], // I win   Z
  ["B", "X", 1], // I lose  X
  ["B", "Y", 5], // draw    Y
  ["B", "Z", 9], // I win   Z
  ["C", "X", 2], // I lose  X
  ["C", "Y", 6], // draw    Y
  ["C", "Z", 7] // I win    Z
];

let score = 0;

for (let game of input) {
  for (rule of rules) {
    if (game[0] === rule[0] && game[1] === rule[1]) {
      score += rule[2];
      console.log("|----------------------");
      console.log(
        `Game result: ${game[0]} & ${game[1]}. rule: ${rule[0]} & ${
          rule[1]
        } = ${rule[2]}`
      );
      console.log(`Score: ${score}`);
    }
  }
}

console.log("|**********************");
console.log(`Final score: ${score}`);
