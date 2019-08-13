 function product_insert_Function() {
     var ownerid = localStorage.getItem('user');

     console.log("----------called the Insert Method--------------")
     var add_product = {
         product_id: document.getElementById("ProductId").value,
         product_name: document.getElementById("Productname").value,
         product_owner: document.getElementById("Productowner").value,
         product_ownerid: ownerid,
         product_url: document.getElementById("Producturl").value,

     }
     if ((add_product.product_id != "") && (add_product.product_name != "") && (add_product.product_owner != "") && (add_product.product_url != "")) {

         var xmlhttp = new XMLHttpRequest();
         xmlhttp.onreadystatechange = function () {
             if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                 var json1 = (JSON.parse(xmlhttp.responseText));
                 console.log(json1);


             }
         }

         function checkUrl(product_url) {
             regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
             if (regexp.test(product_url)) {
                 return alert('Valid URL');
             } else {
                 return alert('Invalid URL');
             }
         }

         xmlhttp.open('POST', '/insert_product', true);
         xmlhttp.setRequestHeader('content-type', 'application/json');
         xmlhttp.send(JSON.stringify(add_product));
     } else {
         alert("Please enter all the values");
     }

 }



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