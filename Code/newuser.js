function submitNewUser() {
    //var x = document.getElementById("myText").value;
    //document.getElementById("demo").innerHTML = x;

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
    var database = firebase.database();
    var ref = database.ref('test');
    console.log(firebase);

    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var zipcode = document.getElementById("zipcode").value;

    var data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        country: country,
        zipcode: zipcode
    };
    ref.push(data);
  }