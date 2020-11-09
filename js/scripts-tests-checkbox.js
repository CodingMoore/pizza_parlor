//General Pricing
const small = ["Small", 10];
const medium = ["Medium", 15];
const large = ["Large", 20];

//Cheese
const gargonzola = ["Gargonzola", 1];
const stilton = ["Stilton", 1.5];
const limburger = ["Limburger", 2];
const camelCheese = ["Camel Cheese", 3];
const casuMartzu = ["Casu Martzu", 4.5];

//Meats
const armadillo = ["Armadillo", 1];
const deer = ["Deer", 4.5];
const opossom = ["Opossom", .5];
const alligator = ["Alligator", 2];
const kangaroo = ["Kangaroo", 3];

//Veggies
const rutabaga = ["Rutabaga", 1];
const blueGreenAlgae = ["Blue-Green Algae", .5];
const grass = ["Grass", .5];
const palmFronds = ["Palm Fronds", 2];
const cactus = ["Cactus", 2];

//Extras
const roastedAnts = ["Roasted Ants", 1];
const hornToadTears = ["Horn-Toad Tears", 6];
const tarantulaHair = ["Tarantula Hair", 2.5];
const gratedLichen = ["Grated Lichen", 2];
const alkaSeltzer = ["Alka-Seltzer", 20];

let orderPrice = 0;
let pizzaOrder = new PizzaOrder();

function PizzaOrder() {
  this.pizzas = [];
}
  
function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
  }

function Toppings(name, price) {
    this.name = name;
    this.price = price;
};

PizzaOrder.prototype.AddPizza = function(pizza) {
  this.pizzas.push(pizza);
}

PizzaOrder.prototype.LastPizzaPrice = function() {
  let lastPizzaPrice = 0;
  for (let i = 0; i < this.pizzas[this.pizzas.length - 1].toppings.length; i++) {
    lastPizzaPrice += (this.pizzas[this.pizzas.length - 1].toppings[i].price);
  }
  return lastPizzaPrice + this.pizzas[this.pizzas.length - 1].size[1];
}

PizzaOrder.prototype.OrderCalcPrice = function() {
  orderPrice += this.LastPizzaPrice();
  return orderPrice;
}

PizzaOrder.prototype.Size = function() {
  let sizeListArray = [];
  for (let i = 1; i < this.pizzas[this.pizzas.length - 1].size.length; i++) {
    sizeListArray.push(this.pizzas[this.pizzas.length - 1].size[0]);
    console.log(sizeListArray);
  }
  return sizeListArray.join("");
}

PizzaOrder.prototype.Toppings = function() {
  let toppingsListArray = [];
  for (let i = 0; i < this.pizzas[this.pizzas.length - 1].toppings.length; i++) {
    toppingsListArray.push(this.pizzas[this.pizzas.length - 1].toppings[i].name);
  }
  return toppingsListArray.join(", ");
}


$(document).ready(function() {
  $("#formSubmit").click(function(event) {
    event.preventDefault();
    let toppingsArray = [];
    let pizzaSize = eval($("input:radio[name=pizzaSize]:checked").val());
      $("input:checkbox[name=toppings]:checked").each(function() {
      let toppings = new Toppings(eval($(this).val())[0], eval($(this).val())[1]);
      toppingsArray.push(toppings);
    });
    let pizza = new Pizza(pizzaSize, toppingsArray);
    pizzaOrder.AddPizza(pizza);
    $("#pizzaList").append("<li>" + pizzaOrder.LastPizzaPrice() + "<ul>" + pizzaOrder.Size() + ": " + "<span style='font-size: 12pt'>" + pizzaOrder.Toppings() + "</span>" + "</ul>" + "</li>");
    $("#outputOrderPrice").text(pizzaOrder.OrderCalcPrice());
  });
  $("#orderButton").click(function(event) {
    alert("Just kidding! This isn't real website.");
  });
});
