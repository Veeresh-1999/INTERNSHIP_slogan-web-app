import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAsh3FS0hp7nbCp2uluYQHMgEvEmC96BQE",
    authDomain: "slogan-login.firebaseapp.com",
    projectId: "slogan-login",
    storageBucket: "slogan-login.appspot.com",
    messagingSenderId: "1043805834828",
    appId: "1:1043805834828:web:2e3fc61d421aeb64076ee9",
    measurementId: "G-FENW0TYD78"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  Document.getElementById("btn-login").addEventListener('click',function(){
    const loginEmail = document.getElementById("email").value;
    const loginPassword = document.getElementById("email").password;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    window.alert("login");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert("invalid error!....");
  });
  });