import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2ZQixlO9R2niFTQa-BUMD1pRh3tSojkc",
  authDomain: "expense-tracker-project-4e501.firebaseapp.com",
  projectId: "expense-tracker-project-4e501",
  storageBucket: "expense-tracker-project-4e501.appspot.com",
  messagingSenderId: "179208484377",
  appId: "1:179208484377:web:7d612a935e35bb7dee1c88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const db = getFirestore();
export const auth = getAuth(app);