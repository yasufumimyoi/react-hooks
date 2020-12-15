import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA6tGRFySYmoDm7CU6cBAoOXkRLRUkuGXQ",
  authDomain: "video-app-aee1b.firebaseapp.com",
  databaseURL: "https://video-app-aee1b.firebaseio.com",
  projectId: "video-app-aee1b",
  storageBucket: "video-app-aee1b.appspot.com",
  messagingSenderId: "871554306959",
  appId: "1:871554306959:web:f8e14b923b297f8d8771fa",
};

export const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;
