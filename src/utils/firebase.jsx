// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADyWyEwlg1AkqOa3PZgJ_0_uBkyICsjFM",
  authDomain: "netflixgpt-om0287.firebaseapp.com",
  projectId: "netflixgpt-om0287",
  storageBucket: "netflixgpt-om0287.appspot.com",
  messagingSenderId: "481246280395",
  appId: "1:481246280395:web:577213d6de9a52f50fb94e",
  measurementId: "G-WL3RK2MLDT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
