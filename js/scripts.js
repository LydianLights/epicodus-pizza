function Pizza(size, crust, sauce, cheese, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
}

Pizza.prototype.getPrice = function() {
  var price = 10;
  var toppingsPrice = 0;
  this.toppings.forEach(function(topping) {
    toppingsPrice += topping.costFactor;
  });
  toppingsPrice += this.cheese.costFactor;
  price += toppingsPrice * 2;
  price *= this.size.costMultiplier;
  return Math.floor(price) + 0.99;
}

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
  new PizzaCrust("Deep-Dish")
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
  this.costFactor = costFactor;
}
var pizzaCheeseTypes = [
  new PizzaCheese("Normal", 0),
  new PizzaCheese("Extra", 1),
  new PizzaCheese("No Cheese", -1)
];

function PizzaTopping(name, costFactor) {
  this.name = name;
  this.costFactor = costFactor;
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

// id = html identifier
// header = user-readable heading
// optionList = list of PizzaOptions
// type = "radio" or "checklist"
function PizzaOptionMenu(id, optionList, type) {
  this.id = id;
  this.optionList = optionList;
  this.type = type;
}

// Returns html to display option selection to the page
// Returns undefined if invalid list type
PizzaOptionMenu.prototype.generateHtml = function() {
  var html = '';
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

// Returns array of PizzaOptions(s) corresponding to checked item(s)
PizzaOptionMenu.prototype.getSelected = function() {
  var list = this.optionList;
  if (this.type === "radio") {
    var id = $('input:radio[name=' + this.id + ']:checked').val();
    return list[id];
  }
  else if (this.type === "checklist") {
    var output = [];
    $('input:checkbox[name=' + this.id + ']:checked').each(function(){
      var id = $(this).val();
      output.push(list[id]);
    })
    return output;
  }
}

$(document).ready(function() {
  var sizeMenu = new PizzaOptionMenu("pizza-sizes", pizzaSizes, "radio");
  var crustMenu = new PizzaOptionMenu("crust-types", pizzaCrustTypes, "radio");
  var sauceMenu = new PizzaOptionMenu("sauce-types", pizzaSauceTypes, "radio");
  var cheeseMenu = new PizzaOptionMenu("cheese-types", pizzaCheeseTypes, "radio");
  var toppingsMenu = new PizzaOptionMenu("pizza-toppings", pizzaToppings, "checklist");

  $("#pizza-size-menu .generated-menu").append(sizeMenu.generateHtml());
  $("#pizza-crust-menu .generated-menu").append(crustMenu.generateHtml());
  $("#pizza-sauce-menu .generated-menu").append(sauceMenu.generateHtml());
  $("#pizza-cheese-menu .generated-menu").append(cheeseMenu.generateHtml());
  $("#pizza-toppings-menu .generated-menu").append(toppingsMenu.generateHtml());

  $("#pizza-builder-intro .btn-start").click(function() {
    $("#pizza-builder-intro").slideUp();
    $("#pizza-builder").slideDown();
  });

  $("#pizza-size-menu .btn-continue").click(function() {
    $("#pizza-size-menu").slideUp();
    $("#pizza-crust-menu").slideDown();
  });
  $("#pizza-crust-menu .btn-continue").click(function() {
    $("#pizza-crust-menu").slideUp();
    $("#pizza-sauce-menu").slideDown();
  });
  $("#pizza-sauce-menu .btn-continue").click(function() {
    $("#pizza-sauce-menu").slideUp();
    $("#pizza-cheese-menu").slideDown();
  });
  $("#pizza-cheese-menu .btn-continue").click(function() {
    $("#pizza-cheese-menu").slideUp();
    $("#pizza-toppings-menu").slideDown();
  });

  $("#pizza-toppings-menu .btn-order").click(function() {
    var size, crust, sauce, cheese, toppings, price;
    size = sizeMenu.getSelected();
    crust = crustMenu.getSelected();
    sauce = sauceMenu.getSelected();
    cheese = cheeseMenu.getSelected();
    toppings = toppingsMenu.getSelected();
    var pizza = new Pizza(size, crust, sauce, cheese, toppings);
    price = pizza.getPrice();

    $(".result-size").text(size.name.toLowerCase());
    $(".result-crust").text(crust.name.toLowerCase());
    $(".result-sauce").text(sauce.name.toLowerCase());

    $(".result-cost").text(price);

    $("#pizza-builder").slideUp();
    $("#pizza-builder-result").slideDown();
  });
});
