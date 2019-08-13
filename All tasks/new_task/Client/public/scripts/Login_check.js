function myFunction() {


    var myobject = {
        email: document.getElementById("email").value,
        pass: document.getElementById("password").value,
    }
    if ((myobject.email !== "") && (myobject.pass != ""))

    {


        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                var json = (JSON.parse(xmlhttp.responseText)._id);
                console.log(json);



                window.localStorage.setItem('user', JSON.stringify(json));


                window.location.href = "/home";

            }
        }

        xmlhttp.open('POST', '/check_login', true);
        xmlhttp.setRequestHeader('content-type', 'application/json');
        xmlhttp.send(JSON.stringify(myobject));

    } else {
        alert("Please Enter all the Values");
    }
    window.localStorage.removeItem('user');
}