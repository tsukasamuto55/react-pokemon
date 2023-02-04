// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnBqio4LxQqkFylN5Y8ZpklQMdYBWiMyg",
  authDomain: "message-board-8ee2d.firebaseapp.com",
  projectId: "message-board-8ee2d",
  storageBucket: "message-board-8ee2d.appspot.com",
  messagingSenderId: "819785127031",
  appId: "1:819785127031:web:b5eb83bb4484619f89e272",
  measurementId: "G-41N86QL0LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db }