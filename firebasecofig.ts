// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq0NXsHcfSlWFA21BhVnOa8noGdC8NE34",
  authDomain: "pedalpath-login.firebaseapp.com",
  projectId: "pedalpath-login",
  storageBucket: "pedalpath-login.firebasestorage.app",
  messagingSenderId: "314443850103",
  appId: "1:314443850103:web:6b6fdd7e2f128a07764172",
  measurementId: "G-0H0GJ0LB3H"
};

// Initialize Firebase
const FIREBASE_LOGIN = getApps().length ? getApp() : initializeApp(firebaseConfig);
export { FIREBASE_LOGIN };
export const FIREBASE_AUTH = getAuth(FIREBASE_LOGIN); // Initialize Firebase Authentication
export const FIREBASE_DB = getFirestore(FIREBASE_LOGIN); // Initialize Firebase Firestore