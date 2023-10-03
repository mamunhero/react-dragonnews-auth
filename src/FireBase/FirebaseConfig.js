import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCyyURNyeUeyWkkznQ3R1tWhgGphV3H8lA",
  authDomain: "react-dragonnews-auth-md-52.firebaseapp.com",
  projectId: "react-dragonnews-auth-md-52",
  storageBucket: "react-dragonnews-auth-md-52.appspot.com",
  messagingSenderId: "688783430436",
  appId: "1:688783430436:web:ebae5218fb2224f73cd9b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;