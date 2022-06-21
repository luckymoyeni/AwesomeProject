// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'; 
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEYVsfygVRNWjs7EgCaFVp4Y_cRwMOk-Y",
  authDomain: "extra-hand-db32e.firebaseapp.com",
  projectId: "extra-hand-db32e",
  storageBucket: "extra-hand-db32e.appspot.com",
  messagingSenderId: "202529863759",
  appId: "1:202529863759:web:4bd0f11cca5811c377923a",
  measurementId: "G-7PTEKY5V19",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = app.auth();

export { auth };
const analytics = getAnalytics(app);
