const { getPriority, input, bisect } = require("./lib");

const repeatedItems = [];
let sum = 0;
for (let entry of input) {
  const bisected = bisect(entry);
  for (const letter of bisected[0]) {
    if (bisected[1].includes(letter)) {
      repeatedItems.push(letter);
      console.log(entry);
      console.log(`${bisected[0]} + ${bisected[1]}`);
      console.log(`repeated letter: ${letter}`);

      const priority = getPriority(letter);
      sum += priority;
      console.log(priority);
      console.log(sum);
      console.log("|--------------");
      break;
    }
  }
}
