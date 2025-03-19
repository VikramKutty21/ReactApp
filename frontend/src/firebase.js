

import firebase from "./firebase";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDE_Q_ZaqdmnHAsjrDOUvjIeuKxApj3oak",
    authDomain: "react-chat-app-310ba.firebaseapp.com",
    projectId: "react-chat-app-310ba",
    storageBucket: "react-chat-app-310ba.firebasestorage.app",
    messagingSenderId: "670669631117",
    appId: "1:670669631117:web:3c50206018d107bd1afcc4",
    measurementId: "G-VLFN097PJ2"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;