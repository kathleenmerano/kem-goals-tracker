// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBupRb0Csv9hv-19uESJmf8i0zY9E8McTM",
  authDomain: "kem-goal-tracker.firebaseapp.com",
  projectId: "kem-goal-tracker",
  storageBucket: "kem-goal-tracker.firebasestorage.app",
  messagingSenderId: "803582149267",
  appId: "1:803582149267:web:7af71ec90e3b65e0d10366",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
