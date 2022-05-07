import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDGHZD92bXg1JTBDyDqlRYcKiz2QleDptk",
    authDomain: "eride-4c44a.firebaseapp.com",
    projectId: "eride-4c44a",
    storageBucket: "eride-4c44a.appspot.com",
    messagingSenderId: "547012979442",
    appId: "1:547012979442:web:51f30c97651752c0823e6b"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


