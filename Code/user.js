firebase.auth().onAuthStateChanged(user => {
    if(user) {
        getUserName();
    }
    else {
        window.location.href = "/login.html";
    }
});

const logoutbtn = document.getElementById("LOGOUTBTN");
const usernametxt = document.getElementById("USERNAME");
const userimg = document.getElementById("USERIMG");

var firestore = firebase.firestore();
var userName = ""


var userDocRef = "";



function getUserName(){
    if (firebase.auth().currentUser !== null) {
        userDocRef = firestore.doc("Users/"+firebase.auth().currentUser.uid);
    }
    if (userDocRef !== "") {
        userDocRef.onSnapshot(function (doc) {
            if (doc && doc.exists) {
                const docdata = doc.data();
                usernametxt.innerHTML = "Welcome back " + docdata.UserName + "!";
                userimg.src=docdata.Image;
            }
        })
    }	
}

realtimeUserUpdate = function() {
    getUserName();
}

logoutbtn.addEventListener("click", e => {
    firebase.auth().signOut();
});

function upload(){
    var storageRef = firebase.storage().ref();






    var x = document.getElementById("myFile");
    var txt = "";
    if ('files' in x) {
      if (x.files.length == 0) {
        txt = "Select one or more files.";
      } else {
        for (var i = 0; i < x.files.length; i++) {
            txt += "<br><strong>" + (i+1) + ". file</strong><br>";
                var file = x.files[i];
            if ('name' in file) {
                txt += "name: " + file.name + "<br>";
            }
            if ('size' in file) {
                txt += "size: " + file.size + " bytes <br>";
            }

            var userimgstor = storageRef.child("UserImages/"+firebase.auth().currentUser.uid)
            userimgstor.put(file).then(function(snapshot) {
                console.log("File Uploaded !!");
            });
            if (firebase.auth().currentUser !== null) {
                userDocRef = firestore.doc("Users/"+firebase.auth().currentUser.uid);
            }
            userimgstor.getDownloadURL().then(function(url) {
                userDocRef.set({Image: url}, { merge: true })
                .then(function() {
                    console.log("Document successfully written!");
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });  	
            })
            .catch(function(error) {
                console.log("Error !!")
            });
        }
      }
    } 
    else {
      if (x.value == "") {
        txt += "Select one or more files.";
      } else {
        txt += "The files property is not supported by your browser!";
        txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
      }
    }
  }