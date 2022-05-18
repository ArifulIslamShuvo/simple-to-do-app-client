// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBImVoasYvyBeeK518gxJX0C5HtkWZBcN4",
  authDomain: "simple-to-do-app-af676.firebaseapp.com",
  projectId: "simple-to-do-app-af676",
  storageBucket: "simple-to-do-app-af676.appspot.com",
  messagingSenderId: "85488007820",
  appId: "1:85488007820:web:a87b8a683267c138ea99a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;