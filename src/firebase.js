// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/storage"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCV3fDgBmf0MVCTXITmMUnVVrIDu56W9bA",
    authDomain: "react-firebase-app-717e8.firebaseapp.com",
    projectId: "react-firebase-app-717e8",
    storageBucket: "react-firebase-app-717e8.appspot.com",
    messagingSenderId: "221705010217",
    appId: "1:221705010217:web:108def86d9f5b47cdfb038"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);