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
  var email = localStorage.getItem('email');
  console.log(email);
  // auth.onAuthStateChanged((user) => {
    if (email) {
        //  console.log(user);
        // User logged in already or has just logged in.
        // console.log(user.email);
        const sign_in_btn = document.querySelector('#sign_in_btn');
        sign_in_btn.innerHTML = email
        // const nav_list = document.querySelector("nav_list")
        
        document.getElementById("log_out_btn").style.visibility = "visible";


        const signOutForm = document.getElementById('log_out_btn');
        signOutForm.addEventListener('click',() => {
          firebase.auth().signOut().then(function () {
            // Sign-out successful.
              console.log("sign out")
              localStorage.clear();  
          }).catch(function (error) {
           // An error happened.
                           });
        } );
    
        
    } else {
        // User not logged in or has just logged out.
        console.log("khong co user!")
        // document.getElementById("log_out_btn").style.visibility = "hidden";

    }
    
    // });

    
