// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database"



// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyrlB8lRYHOho0H2wypZ5LhMkqBpt703c",
  authDomain: "project-tracker-e0bb6.firebaseapp.com",
  databaseURL: "https://project-tracker-e0bb6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-tracker-e0bb6",
  storageBucket: "project-tracker-e0bb6.firebasestorage.app",
  messagingSenderId: "625952780024",
  appId: "1:625952780024:web:ff3a209549c518d05dd50d"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
export const auth = getAuth(app)




