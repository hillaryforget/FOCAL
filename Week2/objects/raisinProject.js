const raisinAlarm = function (cookie) {
  for (let val of cookie) {
    if (val === '🍇') {
      return 'Raisin alert!';
    } 
  }
  return 'All good!';
}

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function (cookies) {
  let result = [];
  for (const val in cookies) {
    let raisins = false;
    for (let i = 0; i < cookies[val].length; i++) {
      if (cookies[val][i] === '🍇') {
        raisins = true;
      }
    } 
    if (raisins) {
      result.push ('Raisin alert!');
    }
    else if (!raisins) {
      result.push ('All good!');
    }
  } 
  return result;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);
// Created by: Hillary Forget, Clayton Van Imschoot and Liam Naylor

/*
const raisinAlarmArray = function (cookies) {
  let result = [];
  for (let array in cookies) {
    let raisins = false;
    for (let val in cookies) {
      if (cookies[array][val] === "🍇") {
        raisins = true;
      }
    }
    (raisins) ? result.push('Raisin alert!') : result.push('Nope')
  }
  return result;
};
*/