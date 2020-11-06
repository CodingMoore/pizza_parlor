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
// let pizza = new Pizza();

function PizzaOrder() {
  this.pizzas = [];
}
  
function Pizza(size,meat,vegi) {
    this.size = size;
    this.meat = meat;
    this.vegi = vegi;
  }

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

PizzaOrder.prototype.OrderCalcPrice = function() {
  pizzaPrice = 0
  for (let i = 0; i < this.pizzas.length; i++) {
  pizzaPrice += this.pizzas[i].size[1] + this.pizzas[i].meat[1] + this.pizzas[i].vegi[1];
  }
  return pizzaPrice;
}


//User Interface Logic
$(document).ready(function() {
  $("#formSubmit").click(function(event) {
    event.preventDefault();
    let pizzaSize = eval($("input:radio[name=pizzaSize]:checked").val());
    let meatType = eval($("input:radio[name=meatType]:checked").val());
    let vegiType = eval($("input:radio[name=vegiType]:checked").val());
    pizza = new Pizza(pizzaSize, meatType, vegiType);
    pizzaOrder.AddPizza(pizza);
    $("#pizzaList").append("<li>" + pizzaOrder.PizzaCalcPrice() + "</li>");
    $("#outputOrderPrice").text(pizzaOrder.OrderCalcPrice());
  });
});