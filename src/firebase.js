// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/storage"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC8nuPh4D7b0BGRzGAekxYTxRcn-NOl74",
  authDomain: "fir-demo-app-f4d1b.firebaseapp.com",
  projectId: "fir-demo-app-f4d1b",
  storageBucket: "fir-demo-app-f4d1b.appspot.com",
  messagingSenderId: "1021629057659",
  appId: "1:1021629057659:web:68de91cf41c6f71b8770de"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);