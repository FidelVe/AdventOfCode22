const input = require("./input.js");

const arrayOfCaloriesSum = input.map(calArray => {
  return calArray.reduce((acc, cv) => {
    return acc + cv;
  });
});

const sorted = [...arrayOfCaloriesSum].sort((a, b) => {
  return b - a;
});

const sum = sorted[0] + sorted[1] + sorted[2];
console.log(`unsorted: ${JSON.stringify(arrayOfCaloriesSum)}`);
console.log(`sorted: ${JSON.stringify(sorted)}`);
console.log(`sum: ${sum}`);
