const { monkeys2, getMonkeyBusiness } = require("./lib");

// const maxRounds = 10000;
const maxRounds = 10000;
const makeChecks = [1, 20, 1000, 2000, 3000, 10000];
// const makeChecks = new Array(20).fill(null).map((foo, index) => {
//   return index + 1;
// });
const monkeyChecks = new Array(monkeys2.length).fill(0);

for (let ii = 0; ii < maxRounds; ii++) {
  for (let i = 0; i < monkeys2.length; i++) {
    monkeyChecks[i] = monkeyChecks[i] + monkeys2[i].items.length;
    const itemsToThrow = monkeys2[i].throw();
    // console.log("items to throw");
    // console.log(itemsToThrow);
    itemsToThrow.forEach(itemArray => {
      monkeys2[itemArray[1].toString()].catch(itemArray[0]);
    });
  }
  if (makeChecks.includes(ii + 1)) {
    console.log(`Distribution after round ${ii + 1}`);
    monkeyChecks.forEach((checks, id) =>
      console.log(`Monkey ${id} made ${checks} checks`)
    );
    console.log("|----------");
  }
}

const monkeyBusiness = getMonkeyBusiness(monkeyChecks);
console.log(`Monkey business: ${monkeyBusiness}`);
