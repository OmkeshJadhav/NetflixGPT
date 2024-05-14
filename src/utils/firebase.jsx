// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL_oNVe2wYehPZTVN9Mnew4nJK3L_QiVo",
  authDomain: "netflixgpt0287.firebaseapp.com",
  projectId: "netflixgpt0287",
  storageBucket: "netflixgpt0287.appspot.com",
  messagingSenderId: "945003322803",
  appId: "1:945003322803:web:76151ba29ae889b372ffc6",
  measurementId: "G-EQ3BDB75MJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
