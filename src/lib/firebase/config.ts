// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0WzRRpjWFzQZkpl8LHg0ePcXKWg_O69c",
    authDomain: "gymtracker-3c9a8.firebaseapp.com",
    projectId: "gymtracker-3c9a8",
    storageBucket: "gymtracker-3c9a8.firebasestorage.app",
    messagingSenderId: "120663785144",
    appId: "1:120663785144:web:870171afe193634ef8fe4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db