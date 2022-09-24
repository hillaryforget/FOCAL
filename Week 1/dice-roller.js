const args = process.argv.splice(2);

const rollSixSided = function () {
  return (Math.floor(Math.random() * 6) + 1);
};

const diceRoller = function (rolls) {
  let rolledDice = [];
  for (let i = 0; i < rolls; i++) {
    rolledDice.push(rollSixSided());
  }
  return `Rolled ${rolls} dice: ${rolledDice.join(", ")}`
}

console.log(diceRoller(args));