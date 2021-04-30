import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "********************",
  authDomain: "********************.firebaseapp.com",
  projectId: "********************",
  storageBucket: "********************.appspot.com",
  messagingSenderId: "********************",
  appId: "********************",
  measurementId: "********************",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
