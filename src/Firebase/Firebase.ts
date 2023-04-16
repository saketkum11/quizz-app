// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8ZeUYCBAExtFFjsjHBnsNOWCS_XPJv6g",
  authDomain: "quiz-app-d1bc1.firebaseapp.com",
  projectId: "quiz-app-d1bc1",
  storageBucket: "quiz-app-d1bc1.appspot.com",
  messagingSenderId: "528576336150",
  appId: "1:528576336150:web:dc156a2499d02d7ec4c037",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(fireBaseApp);
export const dataBase = getFirestore(fireBaseApp);
