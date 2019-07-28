import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAUTVM9SXuBQvWA5xbcO-FChTXqxKl86tQ",
  authDomain: "crwn-db-86832.firebaseapp.com",
  databaseURL: "https://crwn-db-86832.firebaseio.com",
  projectId: "crwn-db-86832",
  storageBucket: "",
  messagingSenderId: "214571681195",
  appId: "1:214571681195:web:95737de4b1a64da1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
