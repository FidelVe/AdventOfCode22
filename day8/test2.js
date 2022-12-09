const { getScenicScore } = require("./lib");
const input = ["30373", "25512", "65332", "33549", "35390"];

const position = [4, 4];
const score = getScenicScore(position, input);
console.log(`score for position "${position}" = ${score}`);
