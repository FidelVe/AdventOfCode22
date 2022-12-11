const input = require("./input");
/*
 * Class describing a thiving monkey
 * @param id {Number} - id of the monkey.
 * @param items {Number[]} - array of items the monkey has
 * @param operationData {Array} - [Number, '+' | '*']
 * @param testData {Array} - [test, monkeyNumberIfTrue, monkeyNumberIfFalse]
 */
class Monkey {
  constructor(id, items, operationData, testData) {
    this.id = id;
    this.items = items;
    this.operationData = operationData;
    this.testData = testData;
  }
  check = item => {
    //
    const operator = operationData[0] === null ? item : operationData[0];
    const itemStepOne =
      operationData[1] === "+" ? item + operator : item * operator;
    const itemStepTwo = Math.round(itemStepOne / 3);
    return itemStepTwo;
  };
  throw = () => {
    // monkey throws all items in order according to the test data
    const arrayOfItems = [];
    for (const item of this.items) {
      // throw each item one by one
      const newItemValue = this.check(item);
      if (newItemValue % test[0] === 0) {
        // returns [newItemValue, monkeyId]
        arrayOfItems.push([newItemValue, test[1]]);
      } else {
        // returns [newItemValue, monkeyId]
        arrayOfItems.push([newItemValue, test[2]]);
      }
    }
    this.items = [];
    return arrayOfItems;
  };
  catch = item => {
    //
    this.items.push(item);
  };
  round = () => {
    //
  };
}

const monkey0 = new Monkey(
  input["0"].id,
  input["0"].items,
  input["0"].operation,
  input["0"].test
);
const monkey1 = new Monkey(
  input["1"].id,
  input["1"].items,
  input["1"].operation,
  input["1"].test
);
const monkey2 = new Monkey(
  input["2"].id,
  input["2"].items,
  input["2"].operation,
  input["2"].test
);
const monkey3 = new Monkey(
  input["3"].id,
  input["3"].items,
  input["3"].operation,
  input["3"].test
);
const monkey4 = new Monkey(
  input["4"].id,
  input["4"].items,
  input["4"].operation,
  input["4"].test
);
const monkey5 = new Monkey(
  input["5"].id,
  input["5"].items,
  input["5"].operation,
  input["5"].test
);
const monkey6 = new Monkey(
  input["6"].id,
  input["6"].items,
  input["6"].operation,
  input["6"].test
);
const monkey7 = new Monkey(
  input["7"].id,
  input["7"].items,
  input["7"].operation,
  input["7"].test
);

const monkeys = [
  monkey0,
  monkey1,
  monkey2,
  monkey3,
  monkey4,
  monkey5,
  monkey6,
  monkey7
];
module.exports = { monkeys };
