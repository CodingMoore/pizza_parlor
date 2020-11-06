//General Pricing
const small = ["Small", 10];
const medium = ["Medium", 15];
const large = ["Large", 20];
const none = ["none", 0];

//Meat
const sausage = ["Sausage", 1];
const chicken = ["Chicken", 1];
const deer = ["Deer", 3];

//Vegi
const onion = ["Onion", .5]
const carrots = ["Carrots", .5]
const turnips = ["Turnips", 1]

let pizzaOrder = new PizzaOrder();

function PizzaOrder(pizzas) {
  this.pizzas = [];
}
console.log(pizzaOrder);
  
let pizza = new Pizza();

function Pizza(size,meat,vegi) {
    this.size = size;
    this.meat = meat;
    this.vegi = vegi;
  }
console.log(pizza);

PizzaOrder.prototype.AddPizza = function(pizza) {
  this.pizzas.push(pizza);
}


PizzaOrder.prototype.PizzaCalcPrice = function() {
  let pizzaPriceArray = [];
  for (let i = 0; i < this.pizzas.length; i++) {
  pizzaPrice = this.pizzas[i].size[1] + this.pizzas[i].meat[1] + this.pizzas[i].vegi[1];
  pizzaPriceArray.push(pizzaPrice)
  }
  return pizzaPriceArray;
}

let pizza1 = new Pizza(small, sausage, onion);
pizzaOrder.AddPizza(pizza1);

let pizza2 = new Pizza(large, deer, none);
pizzaOrder.AddPizza(pizza2);

//pizzaOrder.PizzaCalcPrice()







//User Interface Logic
$(document).ready(function() {
  //user input code here (event)
  event.preventDefault();

};)