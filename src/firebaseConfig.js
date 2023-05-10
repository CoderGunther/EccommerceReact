// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9nsx4FuXUB1XsYkn-lZToSPW_Ot-OaqA",
  authDomain: "comisioncoder-6b69f.firebaseapp.com",
  projectId: "comisioncoder-6b69f",
  storageBucket: "comisioncoder-6b69f.appspot.com",
  messagingSenderId: "889405852546",
  appId: "1:889405852546:web:fcfae96045c71f028d1d9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
