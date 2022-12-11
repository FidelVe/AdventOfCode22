const input = require("./input2");

let cycles = 0;
let registerX = 1;
const cyclesToCheck = [20, 60, 100, 140, 180, 220];
const strength = [];
const registers = [];
for (const instruction of input) {
  if (instruction[0] === "noop") {
    console.log(`registerX: ${registerX}`);
    cycles += 1;
    if (cyclesToCheck.includes(cycles)) {
      registers.push(registerX);
      strength.push(cycles * registerX);
    }
  } else if (instruction[0] === "addx") {
    for (let i = 0; i < 2; i++) {
      console.log(`registerX: ${registerX}`);
      cycles += 1;
      if (cyclesToCheck.includes(cycles)) {
        strength.push(cycles * registerX);
        registers.push(registerX);
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

console.log(`cycles to check: ${cyclesToCheck}`);
console.log(`Strength: ${strength}`);
console.log(`registers: ${registers}`);
console.log(`cycles: ${cycles}`);
console.log(
  strength.reduce((ac, cv) => {
    return ac + cv;
  })
);
