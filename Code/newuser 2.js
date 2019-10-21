function submitNewUser() {
    //var x = document.getElementById("myText").value;
    //document.getElementById("demo").innerHTML = x;

    var firebaseConfig = {
        apiKey: "AIzaSyCqJuHTJhMDFaVrjG3VuLo5dXW8OORpFMg",
        authDomain: "test-website-and-database.firebaseapp.com",
        databaseURL: "https://test-website-and-database.firebaseio.com",
        projectId: "test-website-and-database",
        storageBucket: "test-website-and-database.appspot.com",
        messagingSenderId: "495425967609",
        appId: "1:495425967609:web:96d331828d50cc544dd928",
        measurementId: "G-VH146M2N29"
      };
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