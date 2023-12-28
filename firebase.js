// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// access to database at firestore
import { getFirestore , collection } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-notes-app-46aac.firebaseapp.com",
  projectId: "react-notes-app-46aac",
  storageBucket: "react-notes-app-46aac.appspot.com",
  messagingSenderId: "739721133734",
  appId: "1:739721133734:web:4f72fadf9714b98e2dbe67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
