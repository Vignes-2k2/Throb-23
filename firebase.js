// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQG5-0bHS0YZzhEzF8fXw3YxG996_b-A0",
  authDomain: "mcea-throb-23.firebaseapp.com",
  projectId: "mcea-throb-23",
  storageBucket: "mcea-throb-23.appspot.com",
  messagingSenderId: "53754645278",
  appId: "1:53754645278:web:772e8ca54794f94ca3570f",
  measurementId: "G-Y2XP2254YD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);