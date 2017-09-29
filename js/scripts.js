function PizzaSize(id, name, costMultiplier) {
  this.name = name;
  this.costMultiplier = costMultiplier;
}
var pizzaSizes = [
  new PizzaSize("sm", "Small", 0.75),
  new PizzaSize("md", "Medium", 1),
  new PizzaSize("lg", "Large", 1.25),
  new PizzaSize("xl", "Extra Large", 1.5)
];

function PizzaCrust(id, name) {
  this.name = name;
}
var pizzaCrustTypes = [
  new PizzaCrust("regular", "Regular"),
  new PizzaCrust("thin", "Thin"),
  new PizzaCrust("deep-dish", "Deep Dish")
];

function PizzaSauce(id, name) {
  this.name = name;
}
var pizzaSauceTypes = [
  new PizzaSauce("original", "Original"),
  new PizzaSauce("ranch", "Ranch"),
  new PizzaSauce("bbq", "BBQ")
];

function PizzaCheese(id, name, costFactor) {
  this.name = name;
  this.costAddition - costFactor;
}
var pizzaCheeseTypes = [
  new PizzaCheese("normal", "Normal", 0),
  new PizzaCheese("extra", "Extra", 1),
  new PizzaCheese("none", "No Cheese", -1)
];

function PizzaTopping(id, name, costFactor) {
  this.name = name;
  this.costAddition = costFactor;
}
var pizzaToppings = [
  new PizzaTopping("pepperoni", "Pepperoni", 1),
  new PizzaTopping("chicken", "Chicken", 2),
  new PizzaTopping("beef", "Beef", 1),
  new PizzaTopping("sausage", "Sausage", 1),
  new PizzaTopping("bacon", "Bacon", 2),
  new PizzaTopping("anchovies", "Anchovies", 2),
  new PizzaTopping("ham", "Ham", 1),

  new PizzaTopping("pineapple", "Pineapple", 1),
  new PizzaTopping("tomatoes", "Tomatoes", 1),
  new PizzaTopping("mushrooms", "Mushrooms", 1),
  new PizzaTopping("onions", "Onions", 1),
  new PizzaTopping("olives", "Olives", 1),
  new PizzaTopping("peppers", "Peppers", 1)
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
  var id = this.id;
  if (this.type = "radio") {
    this.optionList.forEach(function(option) {
      html +=
      `<p>
      <input type="radio" name="` + id + `" id="` + id + `-` + option.id + `" value="` + option.id + `">
      <label for="` + id + `-` + option.id + `">` + option.text + `</label>
      </p>`;
    });
    return html;
  }
  else if (this.type = "checkbox") {
    this.optionList.forEach(function(option) {
      html +=
      `<p>
      <input type="checkbox" class="filled-in" name="` + id + `" id="` + id + `-` + option.id + `" value="` + option.id + `">
      <label for="` + id + `-` + option.id + `">` + option.text + `</label>
      </p>`;
    });
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

  console.log(pizzaSizeSelect.generateHtml());

  $("#pizza-size-select").append(pizzaSizeSelect.generateHtml());
  $("#pizza-crust-select").append(pizzaCrustSelect.generateHtml());
  $("#pizza-sauce-select").append(pizzaSauceSelect.generateHtml());
  $("#pizza-cheese-select").append(pizzaCheeseSelect.generateHtml());
  $("#pizza-toppings-select").append(pizzaToppingsSelect.generateHtml());

  $("#pizza-builder").submit(function(event) {
    event.preventDefault();

  });
});
