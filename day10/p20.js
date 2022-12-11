const input = require("./input");
const { vizualize, pixelToCoord } = require("./lib");

let cycles = 0;
let registerX = 1;
const pixelsOn = [];
let currentRow = 0;
let maxColumns = 40;
let localIndex = 0;
let localRegisterX = 1;
for (const instruction of input) {
  if (instruction[0] === "noop") {
    cycles += 1;
    localIndex += 1;
    if (localIndex > maxColumns) {
      currentRow += 1;
      localIndex = 1;
    }
    localRegisterX = registerX + currentRow * maxColumns;
    if (cycles >= localRegisterX && cycles < localRegisterX + 3) {
      pixelsOn.push(cycles);
    }
  } else if (instruction[0] === "addx") {
    for (let i = 0; i < 2; i++) {
      cycles += 1;
      localIndex += 1;
      if (localIndex > maxColumns) {
        currentRow += 1;
        localIndex = 1;
      }
      localRegisterX = registerX + currentRow * maxColumns;
      if (cycles >= localRegisterX && cycles < localRegisterX + 3) {
        pixelsOn.push(cycles);
      }
      if (i + 1 === 2) {
        const instructionNumber = Number(instruction[1]);
        registerX += instructionNumber;
        //
      }
    }
  } else {
    throw new Error(
      `Conditional should not happen. instruction: ${instruction}`
    );
  }
}

// console.log(`pixels to draw: ${pixelsOn}`);
const pixelsToCoords = pixelsOn.map(pixel => {
  return pixelToCoord(pixel);
});
// console.log(`coords: ${pixelsToCoords}`);
vizualize(pixelsToCoords);
