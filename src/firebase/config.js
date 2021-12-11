// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAkNImN046m8PIGHBF4Ne1U_lYQj0CQ5A",
  authDomain: "carolinails.firebaseapp.com",
  projectId: "carolinails",
  storageBucket: "carolinails.appspot.com",
  messagingSenderId: "808162066433",
  appId: "1:808162066433:web:088a04f4e25b0d0c3f8000",
  measurementId: "G-EJ36724QBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)