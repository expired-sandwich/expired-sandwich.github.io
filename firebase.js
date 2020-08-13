// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyAEl1VbkPkUM5guz_BJgOtvwq0Amq-b_9A",
	authDomain: "spider-catcher-c4f85.firebaseapp.com",
	databaseURL: "https://spider-catcher-c4f85.firebaseio.com",
	projectId: "spider-catcher-c4f85",
	storageBucket: "spider-catcher-c4f85.appspot.com",
	messagingSenderId: "48485280051",
	appId: "1:48485280051:web:1af9a2ec1dc15bc76f7646"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, message);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    message:message
  });
}

messagesRef.on("child_added", function(data, prevChildKey) {
  var newData = data.val();
  console.log("name: " + newData.name);
  document.getElementById('test').value += newData.name + '\r\n';
});