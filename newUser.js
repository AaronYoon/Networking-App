const signupForm = document.querySelector('#NewUserInfo');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm['NewEmail'].value;
    const password = signupForm['NewPassword'].value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
        console.log("User made with credentials: " + email + " & " + password);
        firebase.auth().signOut();
        window.location.href = "./Index";
    }).catch(function (error) {
        var errCode = error.code;
        var errorMessage = error.message;
        if (error) {
            console.log("Error catched: " + errorMessage)
            window.alert(errCode + ": " + errorMessage);
        }
    });
});