// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAou_XY-DftIMgCvwWyiTS67pLOqOC05p0",
  authDomain: "projectpt-7cfc0.firebaseapp.com",
  projectId: "projectpt-7cfc0",
  storageBucket: "projectpt-7cfc0.firebasestorage.app",
  messagingSenderId: "907726567438",
  appId: "1:907726567438:web:d9d956eda76f541c2a645f",
  measurementId: "G-1MP2QGLCJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app);

export default app;