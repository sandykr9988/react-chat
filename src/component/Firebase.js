// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqylrBuJCVH1FdvOBWLh_iLlFIXHIoqso",
  authDomain: "react-chat-e1fcb.firebaseapp.com",
  projectId: "react-chat-e1fcb",
  storageBucket: "react-chat-e1fcb.appspot.com",
  messagingSenderId: "260288495518",
  appId: "1:260288495518:web:f4d44569ddad1c91cf208f",
  measurementId: "G-SWBVXFQJN9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
