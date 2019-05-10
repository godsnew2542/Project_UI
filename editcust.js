$(function() {
    $.get("data/customers.json", function(data) {
        
        console.log(status);
    
        var Search = data;
          var customers = Search[document.cookie];
        document.getElementById("CustomerID").value = customers.customerID;
        document.getElementById("CompanyName").value = customers.companyName;
        document.getElementById("ContactName").value = customers.contactName;
        document.getElementById("ContactTitle").value = customers.contactTitle;
        document.getElementById("Street").value = customers.address.street;
        document.getElementById("City").value = customers.address.region;
        document.getElementById("Region").value = customers.companyName;
        document.getElementById("PostalCode").value = customers.address.postalCode;
        document.getElementById("Country").value = customers.address.country;
        document.getElementById("Phone").value = customers.address.phone;
      });
});
