function PizzaSize(name, costMultiplier) {
  this.name = name;
  this.costMultiplier = costMultiplier;
}
var pizzaSizes = [
  new PizzaSize("Small", 0.75),
  new PizzaSize("Medium", 1),
  new PizzaSize("Large", 1.25),
  new PizzaSize("Extra Large", 1.5)
];

function PizzaCrust(name) {
  this.name = name;
}
var pizzaCrustTypes = [
  new PizzaCrust("Regular"),
  new PizzaCrust("Thin"),
  new PizzaCrust("Deep Dish")
];

function PizzaSauce(name) {
  this.name = name;
}
var pizzaSauceTypes = [
  new PizzaSauce("Original"),
  new PizzaSauce("Ranch"),
  new PizzaSauce("BBQ")
];

function PizzaCheese(name, costFactor) {
  this.name = name;
  this.costAddition - costFactor;
}
var pizzaCheeseTypes = [
  new PizzaCheese("Normal", 0),
  new PizzaCheese("Extra", 1),
  new PizzaCheese("No Cheese", -1)
];

function PizzaTopping(name, costFactor) {
  this.name = name;
  this.costAddition = costFactor;
}
var pizzaToppings = [
  new PizzaTopping("Pepperoni", 1),
  new PizzaTopping("Chicken", 2),
  new PizzaTopping("Beef", 1),
  new PizzaTopping("Sausage", 1),
  new PizzaTopping("Bacon", 2),
  new PizzaTopping("Anchovies", 2),
  new PizzaTopping("Ham", 1),

  new PizzaTopping("Pineapple", 1),
  new PizzaTopping("Tomatoes", 1),
  new PizzaTopping("Mushrooms", 1),
  new PizzaTopping("Onions", 1),
  new PizzaTopping("Olives", 1),
  new PizzaTopping("Peppers", 1)
];

function Pizza(size, crust, sauce, cheese, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this. cheese = cheese;
  this.toppings = toppings;
}

// id = programatic identifier
// header = user-readable heading
// optionList = list of PizzaOptions
// type = "radio" or "checklist"
function PizzaOptionSelection(id, header, optionList, type) {
  this.id = id;
  this.header = header;
  this.optionList = optionList;
  this.type = type;
}

// Returns html to display option selection to the page
// Returns undefined if invalid list type
PizzaOptionSelection.prototype.generateHtml = function() {
  var html = '<h3>' + this.header + '</h3>';
  if (this.type === "radio") {
    // Use i as id for each item
    for (var i = 0; i < this.optionList.length; i++) {
      html +=
      `<p>
      <input type="radio" name="` + this.id + `" id="` + this.id + `-` + i + `" value="` + i + `">
      <label for="` + this.id + `-` + i + `">` + this.optionList[i].name + `</label>
      </p>`;
    }
    return html;
  }
  else if (this.type === "checklist") {
    // Use i as id for each item
    for (var i = 0; i < this.optionList.length; i++) {
      html +=
      `<p>
      <input type="checkbox" class="filled-in" name="` + this.id + `" id="` + this.id + `-` + i + `" value="` + i + `">
      <label for="` + this.id + `-` + i + `">` + this.optionList[i].name + `</label>
      </p>`;
    }
    return html;
  }
}

// Returns jQuery reference of currently checked option
PizzaOptionSelection.prototype.getSelected = function() {
  if (this.type = "radio") {
    return $('input:radio[name=' + this.id + ']:checked');
  }
  else if (this.type = "checkbox") {
    return $('input:checkbox[name=' + this.id + ']:checked');
  }
}

$(document).ready(function() {
  var pizzaSizeSelect = new PizzaOptionSelection("pizza-sizes", "Choose a pizza size", pizzaSizes, "radio");
  var pizzaCrustSelect = new PizzaOptionSelection("crust-types", "Pick your favorite crust", pizzaCrustTypes, "radio");
  var pizzaSauceSelect = new PizzaOptionSelection("sauce-types", "What kind of sauce do you want?", pizzaSauceTypes, "radio");
  var pizzaCheeseSelect = new PizzaOptionSelection("cheese-types", "How much cheese should we add?", pizzaCheeseTypes, "radio");
  var pizzaToppingsSelect = new PizzaOptionSelection("pizza-toppings", "Choose your toppings", pizzaToppings, "checklist");

  $("#pizza-size-select").append(pizzaSizeSelect.generateHtml());
  $("#pizza-crust-select").append(pizzaCrustSelect.generateHtml());
  $("#pizza-sauce-select").append(pizzaSauceSelect.generateHtml());
  $("#pizza-cheese-select").append(pizzaCheeseSelect.generateHtml());
  $("#pizza-toppings-select").append(pizzaToppingsSelect.generateHtml());

  $("#pizza-builder").submit(function(event) {
    event.preventDefault();

  });
});
