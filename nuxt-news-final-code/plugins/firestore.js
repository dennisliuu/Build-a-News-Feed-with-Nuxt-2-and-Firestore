import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  // var config = {
  // };
  firebase.initializeApp(process.env.CONFIG);
}

const db = firebase.firestore();

export default db;
