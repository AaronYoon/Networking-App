firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user.email + " logged in");
    } else {
        console.log("user logged out");
    }
});

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    firebase.auth().signOut();
    window.location.href = "./Index";
});