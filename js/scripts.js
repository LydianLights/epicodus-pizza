// id = programatic identifier
// text = user-readable description
function PizzaOption(id, text) {
  this.id = id;
  this.text = text;
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
  if (this.type = "radio") {
    this.optionList.forEach(function(option) {
      html +=
      `<p>
      <input type="radio" name="` + this.id + `" id="` + this.id + `-` + option.id + `" value="` + option.id + `">
      <label for="` + this.id + `-` + option.id + `">` + option.text + `</label>
      </p>`;
    });
    return html;
  }
  else if (this.type = "checkbox") {
    this.optionList.forEach(function(option) {
      html +=
      `<p>
      <input type="checkbox" class="filled-in" name="` + this.id + `" id="` + this.id + `-` + option.id + `" value="` + option.id + `">
      <label for="` + this.id + `-` + option.id + `">` + option.text + `</label>
      </p>`;
    });
    return html;
  }
  return undefined;
}

// Option enumerations
// new PizzaOption("", ""),
var pizzaSizes = [
  new PizzaOption("sm", "Small"),
  new PizzaOption("md", "Medium"),
  new PizzaOption("lg", "Large"),
  new PizzaOption("xl","Extra Large")
];

var pizzaCrustTypes = [
  new PizzaOption("regular", "Regular"),
  new PizzaOption("thin", "Thin"),
  new PizzaOption("deep-dish", "Deep Dish")
];

var pizzaSauceTypes = [
  new PizzaOption("original", "Original"),
  new PizzaOption("ranch", "Ranch"),
  new PizzaOption("bbq", "BBQ")
];

var pizzaCheeseTypes = [
  new PizzaOption("normal", "Normal"),
  new PizzaOption("extra", "Extra"),
  new PizzaOption("none", "No Cheese")
];

var pizzaToppings = [
  new PizzaOption("pepperoni", "Pepperoni"),
  new PizzaOption("chicken", "Chicken"),
  new PizzaOption("beef", "Beef"),
  new PizzaOption("sausage", "Sausage"),
  new PizzaOption("bacon", "Bacon"),
  new PizzaOption("anchovies", "Anchovies"),
  new PizzaOption("ham", "Ham"),

  new PizzaOption("pineapple", "Pineapple"),
  new PizzaOption("tomatoes", "Tomatoes"),
  new PizzaOption("mushrooms", "Mushrooms"),
  new PizzaOption("onions", "Onions"),
  new PizzaOption("olives", "Olives"),
  new PizzaOption("peppers", "Peppers")
];

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
});
