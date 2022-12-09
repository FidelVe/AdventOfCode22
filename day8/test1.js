const { checkVisibility } = require("./lib");
const input = ["30373", "25512", "65332", "33549", "35390"];

let visible = 0;
let nonVisible = 0;
for (let y = 0; y < input.length; y++) {
  for (let x = 0; x < input[y].length; x++) {
    const visibility = checkVisibility([x + 1, y + 1], input);
    if (visibility.includes(true)) {
      visible += 1;
    } else {
      nonVisible += 1;
      console.log(`${x + 1}, ${y + 1}`);
    }
  }
}

console.log(`Visible: ${visible}. non visible: ${nonVisible}`);
