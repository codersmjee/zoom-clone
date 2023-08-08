// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1aogw1BqFlDuBtKnPaklFp8I-aa0uouo",
  authDomain: "zoom-clone-60490.firebaseapp.com",
  projectId: "zoom-clone-60490",
  storageBucket: "zoom-clone-60490.appspot.com",
  messagingSenderId: "119398885990",
  appId: "1:119398885990:web:ea60e06616f65da9dd1ba7",
  measurementId: "G-7RZ6TFGLNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);