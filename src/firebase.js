import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdYRhBW9AuFwp3GccK4OhP_0XeJoYpG-E",
  authDomain: "clone-d15f2.firebaseapp.com",
  projectId: "clone-d15f2",
  storageBucket: "clone-d15f2.appspot.com",
  messagingSenderId: "144534915529",
  appId: "1:144534915529:web:1c85ded604c567d8b7c018",
  measurementId: "G-NK0G9XX1M2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
