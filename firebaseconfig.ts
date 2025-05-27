// firebase.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq0NXsHcfSlWFA21BhVnOa8noGdC8NE34",
  authDomain: "pedalpath-login.firebaseapp.com",
  projectId: "pedalpath-login",
  storageBucket: "pedalpath-login.appspot.com",
  messagingSenderId: "314443850103",
  appId: "1:314443850103:web:6b6fdd7e2f128a07764172",
  measurementId: "G-0H0GJ0LB3H"
};

// Initialize Firebase app only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Firestore instance
const FIREBASE_DB = getFirestore(app);

// Auth instance without persistence (Expo/React Native)
const FIREBASE_AUTH = initializeAuth(app);

export { FIREBASE_AUTH, FIREBASE_DB, app as FIREBASE_LOGIN };

