import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAGa1YT2IVXuLcYAU_-fIniLKCiPw-iD1g",
    authDomain: "clone-fb-33f8d.firebaseapp.com",
    projectId: "clone-fb-33f8d",
    storageBucket: "clone-fb-33f8d.appspot.com",
    messagingSenderId: "972171388396",
    appId: "1:972171388396:web:e8b5c40651b1a96cce4cc9"
  };
  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const storage = firebase.storage();

  export { db, storage };