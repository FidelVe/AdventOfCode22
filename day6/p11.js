const input = require("./input");
const { testForMarker } = require("./lib");

let counter = 3;
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
