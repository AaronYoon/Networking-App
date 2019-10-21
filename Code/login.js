const emailfld = document.getElementById("EMAIL");
const passwordfld = document.getElementById("PASSWORD");
const loginbtn = document.getElementById("LOGINBTN");
const errortxtfld = document.getElementById("ERRORTXT");

loginbtn.addEventListener("click", e => {
	const email = emailfld.value;
	const pass = passwordfld.value;
	const auth = firebase.auth();
	
	const promise = auth.signInWithEmailAndPassword(email, pass);
	promise.catch(e => {
		errortxtfld.innerHTML = e.message;
	});
});

firebase.auth().onAuthStateChanged(user => {
	if(user) {
		window.location.href = "/forum.html";
	}
	else {
		//Do Nothing
	}
});
