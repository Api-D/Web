import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDdAnoRRXKql-jU3ti9lGF47AX-Zk6jIDY",
  authDomain: "testproject-cf2a5.firebaseapp.com",
  projectId: "testproject-cf2a5",
  storageBucket: "testproject-cf2a5.appspot.com",
  messagingSenderId: "291372032762",
  appId: "1:291372032762:web:e3080156c53629ab76df43",
  measurementId: "G-ESXZC7H72S",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

document.getElementById("reg-btn").addEventListener("click", function () {
  document.getElementById("register-div").style.display = "inline";
  document.getElementById("login-div").style.display = "none";
});

document.getElementById("log-btn").addEventListener("click", function () {
  document.getElementById("register-div").style.display = "none";
  document.getElementById("login-div").style.display = "inline";
});

document.getElementById("login-btn").addEventListener('click', function(){
    const loginEmail= document.getElementById("login-email").value;
    const loginPassword= document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
        const user = userCredential.user;
        document.getElementById("result-box").style.display="inline";
        document.getElementById("login-div").style.display="none";
        document.getElementById("result").innerHTML="Shahbash";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById("result-box").style.display="inline";
        document.getElementById("login-div").style.display="none";
        document.getElementById("result").innerHTML="Bhag Loda";
    });
});
document.getElementById("register-btn").addEventListener('click', function(){
    const RegisterEmail= document.getElementById("register-email").value;
    const RegisterPassword= document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, RegisterEmail, RegisterPassword)
    .then((userCredential) => {
        const user = userCredential.user;
        document.getElementById("result-box").style.display="inline";
        document.getElementById("register-div").style.display="none";
        // document.getElementById("result").innerHTML="Shahbash, have "+ RegisterEmail+" is part of our sanstha";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById("result-box").style.display="inline";
        document.getElementById("register-div").style.display="none";
        // document.getElementById("result").innerHTML="Bhag Loda <br> Pooch km? <br> Shahbas, le reason  "+ errorMessage ;
    });
});
document.getElementById("log-out-btn").addEventListener('click', function(){
    signOut(auth).then(() => {
        document.getElementById("result-box").style.display="none";
        document.getElementById("login-div").style.display="inline";
      }).catch((error) => {
        document.getElementById("result").innerHTML="Bhag Loda<br> Pooch km? <br> Shahbas, le reason  "+ errorMessage ;
      });
});
