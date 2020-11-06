//Business Logic
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
console.log(pizzaOrder.pizzas)







//User Interface Logic
$(document).ready(function() {
  //user input code here (event)
  event.preventDefault();

};)