// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA59tOfLF3Ftkbqc8n_ETFmgp8uw2f-qXo",
  authDomain: "stackoverflow-665cf.firebaseapp.com",
  projectId: "stackoverflow-665cf",
  storageBucket: "stackoverflow-665cf.appspot.com",
  messagingSenderId: "5939872847",
  appId: "1:5939872847:web:4dce02795bb0083fc7163a",
  measurementId: "G-3XGCHVDJNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
