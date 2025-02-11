// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIRESTORE_APIKEY,
  authDomain: process.env.FIRESTORE_AUTHDOMAIN,
  projectId: process.env.FIRESTORE_PROJECTID,
  storageBucket: process.env.FIRESTORE_STORAGEBUCKET,
  messagingSenderId: process.env.FIRESTORE_SENDERID,
  appId: process.env.FIRESTORE_APPID,
  measurementId: process.env.FIRESTORE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth_firebase = getAuth(app);
export const storage = getStorage(app)