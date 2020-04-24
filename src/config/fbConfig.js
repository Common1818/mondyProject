import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const fbConfig = {
    apiKey: "AIzaSyB5g47Gm9K7GZpUa4x4tJmzaNIn2miVKIg",
    authDomain: "mondy-s-project.firebaseapp.com",
    databaseURL: "https://mondy-s-project.firebaseio.com",
    projectId: "mondy-s-project",
    storageBucket: "mondy-s-project.appspot.com",
    messagingSenderId: "306036602303",
    appId: "1:306036602303:web:557544cecfe5f6db11dd0a",
    measurementId: "G-YW25RXL11P"
};
// Initialize Firebase
firebase.initializeApp(fbConfig);
firebase.firestore();

export default firebase;
