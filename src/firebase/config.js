// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyAGHGqhIjQGcLdMkrMvtumHxa2S1cFiXrs',
  authDomain: 'e-com-31766.firebaseapp.com',
  projectId: 'e-com-31766',
  storageBucket: 'e-com-31766.appspot.com',
  messagingSenderId: '743795044737',
  appId: '1:743795044737:web:75b3226679d0d3628e3880',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
