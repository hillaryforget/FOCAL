class Pizza {
  constructor() {
    this.toppings = ["cheese"];
    this.hotSauce = ['satans blood'];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
  addHotSauce(hotSauce) {
    this.hotSauce.push(hotSauce);
  }
}

let pizza1 = new Pizza();
console.log(pizza1); // ["cheese"]
pizza1.addTopping("pineapple");
pizza1.addTopping("peppers");
pizza1.addHotSauce('satans blood');
console.log(pizza1); // ["cheese", "mushrooms", "peppers"]

let pizza2 = new Pizza();
console.log(pizza2); // ["cheese"]
pizza2.addTopping("more cheese");
pizza2.addHotSauce('satans blood');
console.log(pizza2); // ["cheese", "more cheese"];
