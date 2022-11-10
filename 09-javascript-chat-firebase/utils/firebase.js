// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgmhwHFYSn0FFR4WFa7cGWXQ4VZ6BrFTk",
    authDomain: "projektjs-38a40.firebaseapp.com",
    projectId: "projektjs-38a40",
    storageBucket: "projektjs-38a40.appspot.com",
    messagingSenderId: "548775997296",
    appId: "1:548775997296:web:02337033509595837d69b5",
    databaseURL: "https://projektjs-38a40-default-rtdb.europe-west1.firebasedatabase.app/"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);