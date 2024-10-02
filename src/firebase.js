// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB41xsShRTzONXkLmvc5Fd2hSXaUBvm-U4",
  authDomain: "portfoliomsgs-1a5aa.firebaseapp.com",
  databaseURL: "https://portfoliomsgs-1a5aa-default-rtdb.firebaseio.com",
  projectId: "portfoliomsgs-1a5aa",
  storageBucket: "portfoliomsgs-1a5aa.appspot.com",
  messagingSenderId: "1032752740513",
  appId: "1:1032752740513:web:5ec69a66a5c5e6d82a58e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };