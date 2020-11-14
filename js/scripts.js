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

function PizzaOrder() {
  this.pizzas = [];
  this.orderPrice = 0;
  this.lastPizzaPrice = 0;
}

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.sizeListString = "";
}

function Toppings(name, price) {
  this.name = name;
  this.price = price;
  this.toppingsListString = "";
};

PizzaOrder.prototype.AddPizza = function(pizza) {
  this.pizzas.push(pizza);
}

PizzaOrder.prototype.LastPizzaPrice = function() {
  let toppingsValue = 0;
  for (let i = 0; i < this.pizzas[this.pizzas.length - 1].toppings.length; i++) {
    toppingsValue += (this.pizzas[this.pizzas.length - 1].toppings[i].price);
    console.log(toppingsValue);
  }
  return this.lastPizzaPrice = toppingsValue + this.pizzas[this.pizzas.length - 1].size[1];
}

PizzaOrder.prototype.OrderCalcPrice = function() {
  this.orderPrice += this.lastPizzaPrice;
  return this.orderPrice;
}

PizzaOrder.prototype.Size = function() {
  this.sizeListArray = [];
  for (let i = 1; i < this.pizzas[this.pizzas.length - 1].size.length; i++) {
    this.sizeListArray.push(this.pizzas[this.pizzas.length - 1].size[0]);
  }
  return this.sizeListString = this.sizeListArray.join("");
}

PizzaOrder.prototype.Toppings = function() {
  let toppingsListArray = [];
  for (let i = 0; i < this.pizzas[this.pizzas.length - 1].toppings.length; i++) {
    toppingsListArray.push(this.pizzas[this.pizzas.length - 1].toppings[i].name);
  }
  return this.toppingsListString = toppingsListArray.join(", ");
}

$(document).ready(function() {
  let pizzaOrder = new PizzaOrder();
  
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
    let piePrice = pizzaOrder.LastPizzaPrice();
    let pieSize = pizzaOrder.Size();
    let pieToppings = pizzaOrder.Toppings();
    let order = pizzaOrder.OrderCalcPrice();
    $("#pizzaList").append("<li>" + piePrice + "<ul>" + pieSize + ": " + "<span style='font-size: 12pt'>" + pieToppings + "</span>" + "</ul>" + "</li>");
    $("#outputOrderPrice").text(order);
  });

  $("#orderButton").click(function(event) {
    alert("Just kidding! This isn't real website.");
  });
});
