
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

var firebaseConfig = {
  apiKey: "AIzaSyBBDyuPsfj12PsNsQYtOm8wTOIEGfEqzVs",
  authDomain: "remedia-cc73b.firebaseapp.com",
  databaseURL: "https://remedia-cc73b.firebaseio.com",
  projectId: "remedia-cc73b",
  storageBucket: "remedia-cc73b.appspot.com",
  messagingSenderId: "884410707515",
  appId: "1:884410707515:web:c656e2c124dc160edf761e",
  measurementId: "G-6SS4LXEEKS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const realsignUpButton = document.getElementById('realsignUp');
realsignUpButton.addEventListener('submit',realsignUp );

const realsignInButton = document.getElementById('realsignIn');
realsignInButton.addEventListener('submit',realsignIn );

function realsignUp(){

  var email= document.getElementById("suemail")
  var password = document.getElementById("supassword")

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
  promise.then(res => console.log(res)).catch(e => alert(e.message));

  alert("Signed Up");
}

function realsignIn(){

  var email= document.getElementById("siemail")
  var password = document.getElementById("sipassword")

  const promise = auth.SignInWithEmailAndPassword (email.value, password.value)
  promise.catch(e => alert(e.message));

  alert("Signed In" );
}

