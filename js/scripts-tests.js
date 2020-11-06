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

let pizza1 = new Pizza("small", "sausage", "onion");
pizzaOrder.AddPizza(pizza1);
console.log(pizzaOrder.pizzas);

//Size
const small = ["Small", 10];
const medium = ["Medium", 15];
const large = ["Large", 20];

//Meat
const sausage = ["Sausage", 1];
const chicken = ["Chicken", 1];
const deer = ["Deer", 3];

//Vegi
const onion = ["Onion", .5]
const carrots = ["Carrots", .5]
const turnips = ["Turnips", 1]