// id = programatic identifier
// text = user-readable description
function PizzaProperty(id, text) {
  this.id = id;
  this.text = text;
}

// Option enumerations
// new PizzaProperty("", ""),
var pizzaSizes = [
  new PizzaProperty("sm", "Small"),
  new PizzaProperty("md", "Medium"),
  new PizzaProperty("lg", "Large"),
  new PizzaProperty("xl","Extra Large")
];

var pizzaCrustTypes = [
  new PizzaProperty("regular", "Regular"),
  new PizzaProperty("thin", "Thin"),
  new PizzaProperty("deep-dish", "Deep Dish")
];

var pizzaSauceTypes = [
  new PizzaProperty("original", "Original"),
  new PizzaProperty("ranch", "Ranch"),
  new PizzaProperty("bbq", "BBQ")
];

var pizzaCheeseTypes = [
  new PizzaProperty("normal", "Normal"),
  new PizzaProperty("extra", "Extra"),
  new PizzaProperty("none", "No Cheese")
];

var pizzaToppings = [
  new PizzaProperty("pepperoni", "Pepperoni"),
  new PizzaProperty("chicken", "Chicken"),
  new PizzaProperty("beef", "Beef"),
  new PizzaProperty("sausage", "Sausage"),
  new PizzaProperty("bacon", "Bacon"),
  new PizzaProperty("anchovies", "Anchovies"),
  new PizzaProperty("ham", "Ham"),

  new PizzaProperty("pineapple", "Pineapple"),
  new PizzaProperty("tomatoes", "Tomatoes"),
  new PizzaProperty("mushrooms", "Mushrooms"),
  new PizzaProperty("onions", "Onions"),
  new PizzaProperty("olives", "Olives"),
  new PizzaProperty("peppers", "Peppers")
];

// UI generation
// Generic list generators
function generateRadioListFromProperties(propertyList, listID) {
  html = '';
  propertyList.forEach(function(property) {
    html +=
    `<p>
    <input type="radio" name="` + listID + `" id="` + listID + `-` + property.id + `" value="` + property.id + `">
    <label for="` + listID + `-` + property.id + `">` + property.text + `</label>
    </p>`;
  });
  return html;
}

function generateCheckboxListFromProperties(propertyList, listID) {
  html = '';
  propertyList.forEach(function(property) {
    html +=
    `<p>
    <input type="checkbox" class="filled-in" name="` + listID + `" id="` + listID + `-` + property.id + `" value="` + property.id + `">
    <label for="` + listID + `-` + property.id + `">` + property.text + `</label>
    </p>`;
  });
  return html;
}

// Specific list generators
function generatePizzaSizes() {
  html = '<h3>Choose a pizza size</h3>';
  html += generateRadioListFromProperties(pizzaSizes, "pizza-sizes");
  return html;
}

function generateCrustTypes() {
  html = '<h3>Pick your favorite crust</h3>';
  html += generateRadioListFromProperties(pizzaCrustTypes, "crust-types");
  return html;
}

function generateSauceTypes() {
  html = '<h3>What kind of sauce do you want?</h3>';
  html += generateRadioListFromProperties(pizzaSauceTypes, "sauce-types");
  return html;
}

function generateCheeseTypes() {
  html = '<h3>How much cheese should we add?</h3>';
  html += generateRadioListFromProperties(pizzaCheeseTypes, "cheese-types");
  return html;
}

function generatePizzaToppings() {
  html = '<h3>Choose your toppings</h3>';
  html += generateCheckboxListFromProperties(pizzaToppings, "pizza-toppings");
  return html;
}

$(document).ready(function() {
  $("#pizza-size-select").append(generatePizzaSizes());
  $("#pizza-crust-select").append(generateCrustTypes());
  $("#pizza-sauce-select").append(generateSauceTypes());
  $("#pizza-cheese-select").append(generateCheeseTypes());
  $("#pizza-toppings-select").append(generatePizzaToppings());
});
