$(function() {
    $.get("data/customers.json", function(data) {
        
        console.log(status);
    
        var Search = data;
          var customers = Search[document.cookie];
          var tab =
            "customerID : " + customers.customerID + "<br>" +
            "companyName : " + customers.companyName + "<br>" +
            "contactName : " + customers.contactName + "<br>" +
            "contactTitle : " + customers.contactTitle + "<br>" +
            "address : " + "<br>" +
            "street : "+ customers.address.street + "&nbsp &nbsp" +
            "city : "+ customers.address.city + "&nbsp &nbsp" +
            "region : "+ customers.address.region + "&nbsp &nbsp" +
            "postalCode : "+ customers.address.postalCode + "&nbsp &nbsp" +
            "country : "+ customers.address.country + "&nbsp &nbsp" +
            "phone : "+ customers.address.phone;
    
          $("#datafull").append(tab);
      });
});
