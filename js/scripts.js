// id = programatic identifier
// text = user-readable description
function PizzaSize(id, text) {
  this.id = id;
  this.text = text;
}

// Option enumerations
var pizzaSizes = [
  new PizzaSize("sm", "Small"),
  new PizzaSize("md", "Medium"),
  new PizzaSize("lg", "Large"),
  new PizzaSize("xl","Extra Large")];

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


$(document).ready(function() {
  $("#pizza-size-select").append(generatePizzaSizes());
});
