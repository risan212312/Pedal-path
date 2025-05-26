// Firebase App (the core Firebase SDK) is always required and must be listed first
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDqjLZ1zTW9uzdjfa33Lnc04ssdrp2oF4g',
  authDomain: 'pedalpath-4bc87.firebaseapp.com',
  projectId: 'pedalpath-4bc87',
  storageBucket: 'pedalpath-4bc87.firebasestorage.app',
  messagingSenderId: '41310765956',
  appId: '1:41310765956:web:8148d2e60158e97d9593d1',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

