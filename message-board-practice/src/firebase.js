
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdTyw6LxVdJEBy0kTYvuNdSKxZX-a3uS4",
  authDomain: "message-board-practice-d54aa.firebaseapp.com",
  projectId: "message-board-practice-d54aa",
  storageBucket: "message-board-practice-d54aa.appspot.com",
  messagingSenderId: "501550732199",
  appId: "1:501550732199:web:67f60e4abfcf52508f9c82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
