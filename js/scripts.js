// Pizza properties
// id = programatic identifier
// text = user-readable description
function PizzaSize(id, text) {
  this.id = id;
  this.text = text;
}

function PizzaTopping(id, text) {
  this.id = id;
  this.text = text;
}

// Option enumerations
var pizzaSizes = [
  new PizzaSize("sm", "Small"),
  new PizzaSize("md", "Medium"),
  new PizzaSize("lg", "Large"),
  new PizzaSize("xl","Extra Large")
];

  var pizzaToppings = [
    new PizzaTopping("pepperoni", "Pepperoni"),
    new PizzaTopping("chicken", "Chicken"),
    new PizzaTopping("beef", "Beef"),
    new PizzaTopping("sausage", "Sausage"),
    new PizzaTopping("bacon", "Bacon"),
    new PizzaTopping("anchovies", "Anchovies"),
    new PizzaTopping("ham", "Ham"),

    new PizzaTopping("pineapple", "Pineapple"),
    new PizzaTopping("tomatoes", "Tomatoes"),
    new PizzaTopping("mushrooms", "Mushrooms"),
    new PizzaTopping("onions", "Onions"),
    new PizzaTopping("olives", "Olives"),
    new PizzaTopping("peppers", "Peppers")
  ];

// UI generation
function generatePizzaSizes() {
  html = '<h3>Choose a pizza size</h3>';
  pizzaSizes.forEach(function(size) {
    html +=
    `<p>
    <input type="radio" name="pizza-size" id="pizza-size-` + size.id + `" value="` + size.id + `">
    <label for="pizza-size-` + size.id + `">` + size.text + `</label>
    </p>`;
  });
  return html;
}

function generatePizzaToppings() {
  html = '<h3>Choose your toppings</h3>';
  pizzaToppings.forEach(function(topping) {
    html +=
    `<p>
    <input type="checkbox" class="filled-in" name="pizza-topping" id="pizza-topping-` + topping.id + `" value="` + topping.id + `">
    <label for="pizza-topping-` + topping.id + `">` + topping.text + `</label>
    </p>`;
  });
  return html;
}


$(document).ready(function() {
  $("#pizza-size-select").append(generatePizzaSizes());
  $("#pizza-toppings-select").append(generatePizzaToppings());
});
