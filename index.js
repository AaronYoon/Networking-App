const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['username'].value;
    const password = loginForm['password'].value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
        window.location.href = "./forum"; // when logged in, user gets redirected to forum
    }).catch(function (error) {
        if (error) {
            var errCode = error.code;
            var errorMessage = error.message;
            console.log("Error catched: " + errorMessage)
            window.alert(errCode + ": " + errorMessage);
        }
    });
});

const signup = document.querySelector('#signup');
signup.addEventListener('click', (e) => {
    window.location.href = "./newUser'";
});