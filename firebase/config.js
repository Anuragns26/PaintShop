import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlWrj_RRWRw--473iHfn90BwIv1_CJtjI",
  authDomain: "paint-shop-d75b2.firebaseapp.com",
  projectId: "paint-shop-d75b2",
  storageBucket: "paint-shop-d75b2.appspot.com",
  messagingSenderId: "478737577706",
  appId: "1:478737577706:web:1389d6dd6ad58f481a4993",
  measurementId: "G-WBQDE1ZEG1",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
