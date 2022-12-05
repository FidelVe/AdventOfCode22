const input = require("./input");

let counter = 0;

for (const pair of input) {
  const a0 = pair[0][0];
  const a1 = pair[0][1];
  const b0 = pair[1][0];
  const b1 = pair[1][1];

  if (a0 >= b0 && a0 <= b1 && a1 >= b0 && a1 <= b1) {
    counter += 1;
    console.log(`Set: "${a0}-${a1}" - "${b0}-${b1}"`);
    console.log(`Pair "${a0}-${a1}" inside "${b0}-${b1}". Count: ${counter}`);
    console.log("|-----------");
  } else if (b0 >= a0 && b0 <= a1 && b1 >= a0 && b1 <= a1) {
    counter += 1;
    console.log(`Set: "${a0}-${a1}" - "${b0}-${b1}"`);
    console.log(`Pair "${b0}-${b1}" inside "${a0}-${a1}". Count: ${counter}`);
    console.log("|-----------");
  }
}
