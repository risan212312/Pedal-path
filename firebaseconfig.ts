// firebase.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyDqjLZ1zTW9uzdjfa33Lnc04ssdrp2oF4g',
  authDomain: 'pedalpath-4bc87.firebaseapp.com',
  projectId: 'pedalpath-4bc87',
  storageBucket: 'pedalpath-4bc87.firebasestorage.app',
  messagingSenderId: '41310765956',
  appId: '1:41310765956:web:8148d2e601',
};

// Initialize Firebase app only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Firestore instance
const FIREBASE_DB = getFirestore(app);

// Auth instance without persistence (Expo/React Native)
const FIREBASE_AUTH = initializeAuth(app);

export { FIREBASE_AUTH, FIREBASE_DB, app as FIREBASE_LOGIN };

