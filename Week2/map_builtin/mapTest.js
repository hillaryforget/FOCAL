const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// write code here to use map
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]


/*lighthouses.map((element) => {
  const {length} = element;
  return length;
});
console.log(lighthouses.length);*/


let nameLength = lighthouses.map((element) => {
const {length} = element;
return length;
}); 
console.log(nameLength.length);