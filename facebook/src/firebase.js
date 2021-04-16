import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7mY6sBXgbKEcB9rpzfMDgCA1sk0bQhIQ",
  authDomain: "meta-facebook-clone.firebaseapp.com",
  projectId: "meta-facebook-clone",
  storageBucket: "meta-facebook-clone.appspot.com",
  messagingSenderId: "69106381261",
  appId: "1:69106381261:web:4a02439f8e3fb207f3d484",
  measurementId: "G-CZ99Q6NKCG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
