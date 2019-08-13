 function product_insert_Function() {
     var ownerid = localStorage.getItem('user');
     $("#product-form").on("submit", function (event) {
             event.preventDefault();
             $.ajax({
                     type: "POST",
                     url: "/addpage",
                     data: {
                         Id: $("#product-form #ProductId").val(),
                         Productname: $("#product-form #Productname").val(),
                         Owner: $("#product-form #Productowner").val(),
                         Ownerid: $("#product-form #ownerid").val(),
                         productUrl: $("#product-form #Producturl").val()
                     },
                     dataType: "json",
                     success: function (data) {

                         console.log(data);
                     }
                     else {
                         console.log("error");
                     }
                 },

                 error: function () {
                     console.log(“error”);
                 },
             });
     });




 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function () {
     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
         var json1 = (JSON.parse(xmlhttp.responseText));
         var my_obj = json1;


         var table = document.getElementById('table1');
         table.border = '1';

         for (let i = 0; i < my_obj.length; i++) {

             var row = table.insertRow()
             var ownerId = String(my_obj[i]._id);

             row.insertCell(0).innerHTML = my_obj[i]._id;
             row.insertCell(1).innerHTML = my_obj[i].Id;
             row.insertCell(2).innerHTML = my_obj[i].Productname;
             row.insertCell(3).innerHTML = my_obj[i].Owner;
             row.insertCell(4).innerHTML = my_obj[i].Ownerid;
             row.insertCell(5).innerHTML = my_obj[i].productUrl;
             row.insertCell(6).innerHTML = ' <a class="btn waves-effect waves-light col s8" href="/editpage/' + ownerId + '"onclick="updateFunction()">Edit</a>';
             row.insertCell(7).innerHTML = ' <a class="btn waves-effect waves-light col s8" onclick="deleteFunction(\'' + ownerId + '\')">Delete</a>';

         }
     }
 }
 xmlhttp.open('GET', '/all_product', true);
 xmlhttp.setRequestHeader('content-type', 'application/json');
 xmlhttp.send();


 function updatepro(id) {


     console.log("update function calls here------", id);
     var update_product = {
         product_id: document.getElementById("ProductId").value,
         product_name: document.getElementById("Productname").value,
         product_owner: document.getElementById("Productowner").value,
         product_url: document.getElementById("Producturl").value

     }

     var xmlhttp = new XMLHttpRequest();
     xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
             var json1 = (JSON.parse(xmlhttp.responseText));
         }
     }
     xmlhttp.open('PUT', '/update_product/' + id, true);
     xmlhttp.setRequestHeader('content-type', 'application/json');
     xmlhttp.send(JSON.stringify(update_product));
 }

 function deleteFunction(myId) {
     console.log("delete function calls here");
     console.log(myId);
     var xmlhttp = new XMLHttpRequest();
     xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
             var json1 = (JSON.parse(xmlhttp.responseText));
             console.log(json1);
         }
     }

     xmlhttp.open('DELETE', '/del_product/' + myId, true);
     //  xmlhttp.setRequestHeader('content-type', 'application/json');

     xmlhttp.send();


 }

 function loggout() {
     window.localStorage.removeItem('user');
     window.location.href('/login');
 }