// filepath: pedal-path-map-feature/src/config/firebase.ts
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Paste your friend's Firebase config here
const firebaseConfig = {
  apiKey: 'AIzaSyDqjLZ1zTW9uzdjfa33Lnc04ssdrp2oF4g',
  authDomain: 'pedalpath-4bc87.firebaseapp.com',
  projectId: 'pedalpath-4bc87',
  storageBucket: 'pedalpath-4bc87.firebasestorage.app',
  messagingSenderId: '41310765956',
  appId: '1:41310765956:web:8148d2e60158e97d9593d1'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };