// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCwMrWE_qw8lhPVTXP-2m2CWBxGMEb8Uqg",
    authDomain: "networking-application.firebaseapp.com",
	databaseURL: "https://networking-application.firebaseio.com",
	projectId: "networking-application",
	storageBucket: "networking-application.appspot.com",
	messagingSenderId: "235075762282",
	appId: "1:235075762282:web:8cf3a7eb6438fdfc2e3213",
	measurementId: "G-8N1DTVHGVG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();
firebase.firestore();
