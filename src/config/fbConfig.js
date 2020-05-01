import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const fbConfig = {
  apiKey: "AIzaSyDqJgq3-TALBNuCZ4SR3pTRpag-R6ejCIk",
  authDomain: "marketing-acad.firebaseapp.com",
  databaseURL: "https://marketing-acad.firebaseio.com",
  projectId: "marketing-acad",
  storageBucket: "marketing-acad.appspot.com",
  messagingSenderId: "607982466429",
  appId: "1:607982466429:web:5a8597e4921182b7958814",
  measurementId: "G-6PGN4YY9NL",
};
// Initialize Firebase
firebase.initializeApp(fbConfig);
firebase.firestore();

export default firebase;
