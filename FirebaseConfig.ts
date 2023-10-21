// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj6UZu-DiGj4Wl_W4fJU3JZbLOhTzIt1A",
  authDomain: "organizr-14d77.firebaseapp.com",
  projectId: "organizr-14d77",
  storageBucket: "organizr-14d77.appspot.com",
  messagingSenderId: "345505801875",
  appId: "1:345505801875:web:d4d1cf97e0b58d44654f66",
  measurementId: "G-XQQFSCNHW0"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);