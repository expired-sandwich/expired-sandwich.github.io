
var firebaseConfig = {
	apiKey: "AIzaSyDIR6Go8QoYic9psU4R_YRrfNp6e_HZQc4",
	authDomain: "test-62d52.firebaseapp.com",
	projectId: "test-62d52",
	storageBucket: "test-62d52.appspot.com",
	messagingSenderId: "790136710979",
	appId: "1:790136710979:web:1ac3789f5d8d038ca9f1f6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function signUpWithEmailPassword() {
    var email = "test@example.com";
    var password = "hunter2";
    // [START auth_signup_password]
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    // [END auth_signup_password]
  }

  function signInWithEmailPassword() {
    var email = "test@example.com";
    var password = "hunter2";
    // [START auth_signin_password]
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    // [END auth_signin_password]
  }

const signIn = document.getElementById('signIn');
signIn.addEventListener('click', signUpWithEmailPassword)