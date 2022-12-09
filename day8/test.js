const { checkVisibility } = require("./lib");
const input = ["30373", "25512", "65332", "33549", "35390"];

const visibility = checkVisibility([1, 4], input);
console.log(visibility);
