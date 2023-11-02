// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoU4CYeIlqD5SKbgqjspCSRYNMo3rkIWI",
  authDomain: "elektrolisis-9e584.firebaseapp.com",
  projectId: "elektrolisis-9e584",
  storageBucket: "elektrolisis-9e584.appspot.com",
  messagingSenderId: "446964445370",
  appId: "1:446964445370:web:1a3133ecfa1d07e281d283",
  measurementId: "G-WLLZ2GKBBR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
