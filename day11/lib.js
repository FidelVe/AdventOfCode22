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

module.exports = { Monkey };
