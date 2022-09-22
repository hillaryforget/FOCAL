console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);

//MY CODE

function whatToDoForLunch(hungry, availableTime) {
  // Write your code here
  if (hungry) {
    if (availableTime <= 20) {
        console.log('pick up a snack or grab something you have ready at home.')
      } if (availableTime >= 20 && availableTime <= 30) {
        'you deserve a break and should take time to cook a tasty meal.'
      } if (availableTime > 30) {
      console.log('this is an intense program after all and you should probably reconsider.')
    }
  } else {
  console.log('wait until hungry')
}
}
//phseudo 
//am i hungry? if yes how much time do i have?
//if hungry and have less than 20min then 'pick up a snack or grab something you have ready at home.'
//if hungry and have at least 20min but not more than 30min then 'you deserve a break and should take time to cook a tasty meal.'
//if hungry and have more than 30min then 'this is an intense program after all and you should probably reconsider.'
//if not hungry 'wait until hungry'