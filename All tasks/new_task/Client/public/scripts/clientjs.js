 function myFunction() {

     var value = {
         name: document.getElementById("username").value,
         email: document.getElementById("email").value,
         pass: document.getElementById("password1").value,
         repass: document.getElementById("password2").value,

     }
     console.log(value);

     if (value.name !== "" && value.email !== "" && value.pass !== "" && value.repass !== "") {


         if (value.pass == value.repass) {
             var xmlhttp = new XMLHttpRequest();
             xmlhttp.onreadystatechange = function () {
                 if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                     var json1 = (JSON.parse(xmlhttp.responseText).message);
                     console.log(json1);


                 }
             }
             xmlhttp.open('POST', 'user_register1', true);

             xmlhttp.setRequestHeader('content-type', 'application/json');
             xmlhttp.send(JSON.stringify(value));

         } else {
             alert("password doesnot match");
         }
     } else {
         alert("Please enter all the values");
     }





 }