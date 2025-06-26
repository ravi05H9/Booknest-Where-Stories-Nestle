// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCG1YMifOtgK_rRONxZW3KQKWNc4g96mY",
  authDomain: "booknest-b8ed3.firebaseapp.com",
  projectId: "booknest-b8ed3",
  storageBucket: "booknest-b8ed3.firebasestorage.app",
  messagingSenderId: "383259186153",
  appId: "1:383259186153:web:ad536ca6c7f39c4b1b7178",
  measurementId: "G-9T6Q40E9TY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);