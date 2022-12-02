const input = require("./input.js");

let mostCalories = 0;
let elfIndex = 0;
let elfBag = [];

let foo = 0;
for (let elf of input) {
  currentElfCalories = elf.reduce((acc, cv) => {
    return acc + cv;
  });

  console.log(
    `elf ${foo + 1} => ${JSON.stringify(elf)} => ${currentElfCalories}`
  );
  if (currentElfCalories >= mostCalories) {
    mostCalories = currentElfCalories;
    elfIndex = foo;
    elfBag = elf;
  }
  foo += 1;
}

console.log(`most calories: ${mostCalories}`);
console.log(`Elf index: ${elfIndex}`);
console.log(`Elf number: ${elfIndex + 1}`);
console.log(`Elf bag: ${elfBag}`);
