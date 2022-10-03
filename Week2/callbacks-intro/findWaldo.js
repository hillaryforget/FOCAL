// The second argument/parameter is expected to be a (callback) function
const findWaldo = function (names, found) {
  names.forEach((el, i) => {
    if (el === 'Waldo') {
      found(i);
    }
  })
};
// for (let i = 0; i < names.length; i++) {
//  let name = names[i];
//  if (name === "Waldo") {
//     found(i);   // execute callback
//   }
// }

const actionWhenFound = function (index) {
    //console.log("Found Waldo at index " + index + '!') 
    console.log(`Found Waldo at index ${index}!`)
}

findWaldo(["Alice", "Bob", "Winston", "Waldo"], actionWhenFound);