// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF9fK0253ohsYiYV3NXheaTe-kfZE6qSI",
  authDomain: "ai-trip-planner-38b5c.firebaseapp.com",
  projectId: "ai-trip-planner-38b5c",
  storageBucket: "ai-trip-planner-38b5c.firebasestorage.app",
  messagingSenderId: "856625361008",
  appId: "1:856625361008:web:db473c613e88ce237204b5",
  measurementId: "G-XPYBRH97W6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);