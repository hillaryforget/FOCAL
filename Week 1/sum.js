const sum = function(numArr) {
    let sum = 0;
    for (let num of numArr) {
      sum += Number(num);
    }
    return sum;
  };

const args = process.argv;
console.log(args);
console.log(args[2]);
console.log(args[3]);
console.log(parseInt(args[2]) + parseInt(args[3]));
console.log(args.slice(2, 4));

console.log(sum(args.slice(2)));
