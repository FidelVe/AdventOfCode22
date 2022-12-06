const input = require("./input");
const { testForMarker } = require("./lib");

let counter = 13; // for puzzle 2 day 6
// let counter = 3; // for puzzle 1 day 6
const buffer = [...input.slice(0, counter + 1)];

while (counter < input.length) {
  //
  const isMarker = testForMarker(buffer);
  if (isMarker) break;

  //
  console.log(`"${buffer}" is not a marker.`);
  //
  counter += 1;
  for (let i = 0; i < buffer.length; i++) {
    buffer[i] = input[counter - (buffer.length - (i + 1))];
  }
}

console.log(`"${buffer}" is a marker at char ${counter + 1}`);
