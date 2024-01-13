// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "yash-estate.firebaseapp.com",
  projectId: "yash-estate",
  storageBucket: "yash-estate.appspot.com",
  messagingSenderId: "328458527411",
  appId: "1:328458527411:web:f8a783a834a8c43d8186c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);