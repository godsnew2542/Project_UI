$(function(){
    $('#login').click(function(){     
        var email = $("#email").val();
        var password = $("#password").val();
          console.log(email);
          console.log(password);
          if (email == 'admin@nw.com' && password == '12345**') {
              var r = confirm("คุณแน่ใจแล้วใช่ไหม");
              if (r == true) {
                  window.location = "dashboard.html";
              }
          } else {
              if (email == "" && password == "") {
                  alert("กรุณากรอก Eamil And Password");
                  return false;
              } else if (email == "") {
                  alert("กรุณากรอก Email");
                  return false;
              } else if (password == "") {
                  alert("กรุณากรอก Password");
                  return false;
              } else if (!(email == "" && password == "")) {
                  alert("Email Or Password Earro");
                  return false;
              }
            }
    });
});