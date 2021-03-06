// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(brightLights) {
  console.log(brightLights);
  var row = tbody.append("tr");
  Object.entries(brightLights).forEach(function([key, value]) {
    // console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});

var button = d3.select("#filter-btn");

var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  var filterData = tableData.filter(date => date.datetime === inputValue);
  var tBodyFilter = d3.select("tbody");
  tBodyFilter.html("");
  filterData.forEach(function(brightLights) {
    console.log(brightLights);
    var row = tBodyFilter.append("tr");
    Object.entries(brightLights).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value)});
    });
  };
