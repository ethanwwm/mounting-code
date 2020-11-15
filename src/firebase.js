import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDQcQHxpRP0kg7dUBPdVIWWSsOZpi-6Cho",
  authDomain: "mounting-ethanwwm.firebaseapp.com",
  databaseURL: "https://mounting-ethanwwm.firebaseio.com",
  projectId: "mounting-ethanwwm",
  storageBucket: "mounting-ethanwwm.appspot.com",
  messagingSenderId: "885740074574",
  appId: "1:885740074574:web:37fef4eb03bf87895a351f",
  measurementId: "G-TZ0TBGHRYM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
