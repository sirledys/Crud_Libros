// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAa2LkwWhRZngXrEwaBTCRidYpTLIxcuKs",
    authDomain: "crudlibros-14e82.firebaseapp.com",
    databaseURL: "https://crudlibros-14e82-default-rtdb.firebaseio.com",
    projectId: "crudlibros-14e82",
    storageBucket: "crudlibros-14e82.appspot.com",
    messagingSenderId: "175896090375",
    appId: "1:175896090375:web:ad38d80673d193eff917a2",
    measurementId: "G-S7X5BHESDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export { db }