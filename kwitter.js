user = localStorage.getItem("username");
document.getElementById("welcome").innerHTML = "Welcome " + user;
var firebaseConfig = {
    apiKey: "AIzaSyCZQ1Ld1UFAn_geaYeU4P5hI-Sm-kEPNgc",
    authDomain: "chitter-chatter-e619c.firebaseapp.com",
    projectId: "chitter-chatter-e619c",
    storageBucket: "chitter-chatter-e619c.appspot.com",
    messagingSenderId: "32185118945",
    appId: "1:32185118945:web:0380120ba1ce1f94f687a0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);