// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestone } from "firebase/firestone";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASm8ZWPoc6jBdMzCwlKv9vclFP5eEXe-w",
  authDomain: "ot-mg-app.firebaseapp.com",
  projectId: "ot-mg-app",
  storageBucket: "ot-mg-app.appspot.com",
  messagingSenderId: "750153431852",
  appId: "1:750153431852:web:67b3c3bf389ec0cec78a89",
  measurementId: "G-2DV0E5DEJ4"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestone(FIREBASE_APP);