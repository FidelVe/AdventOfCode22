const input = require("./input");

let counter = 0;
input.forEach(each => {
  const value = Number(each[1]);
  counter += value;
});
console.log(`Steps: ${counter}`);
