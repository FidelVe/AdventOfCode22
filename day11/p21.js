const { monkeys, getMonkeyBusiness } = require("./lib");

const maxRounds = 20;
const monkeyChecks = new Array(monkeys.length).fill(0);
console.log("Initial item distribution");
monkeys.forEach(monkey =>
  console.log(`Monkey ${monkey.id}. items: ${monkey.items}`)
);
console.log("|----------");
for (let ii = 0; ii < maxRounds; ii++) {
  for (let i = 0; i < monkeys.length; i++) {
    monkeyChecks[i] = monkeyChecks[i] + monkeys[i].items.length;
    const itemsToThrow = monkeys[i].throw();
    // console.log("items to throw");
    // console.log(itemsToThrow);
    itemsToThrow.forEach(itemArray => {
      monkeys[itemArray[1].toString()].catch(itemArray[0]);
    });
  }
  console.log(`Distribution after round ${ii + 1}`);
  monkeys.forEach(monkey =>
    console.log(`Monkey ${monkey.id}. items: ${monkey.items}`)
  );
  console.log("|----------");
}

monkeyChecks.forEach((checks, id) =>
  console.log(`Monkey ${id} made ${checks} checks`)
);
const monkeyBusiness = getMonkeyBusiness(monkeyChecks);
console.log(`Monkey business: ${monkeyBusiness}`);
