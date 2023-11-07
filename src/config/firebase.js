// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
  prompt: "select_account ",
});

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export default app;
