$(function() {
    $.get("data/products.json", function(data, status) {
        console.log(data);
        console.log(data.length);
        console.log(status);
        $("#products").append(data.length);
      });
  $.get("data/customers.json", function(data, status) {
    console.log(data);
    console.log(data.length);
    console.log(status);
    
    $("#customers").append(data.length);
  });
  $.get("data/suppliers.json", function(data, status) {
    console.log(data);
    console.log(data.length);
    console.log(status);
    $("#suppliers").append(data.length);
  });
  $.get("data/orders.json", function(data, status) {
    console.log(data);
    console.log(data.length);
    console.log(status);
    $("#orders").append(data.length);
  });
});
