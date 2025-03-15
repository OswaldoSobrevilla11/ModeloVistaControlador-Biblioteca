// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7DUjLYvAkQSAJ04mj1gmGpC20iGJPFek",
  authDomain: "mvcproyecto-cf872.firebaseapp.com",
  projectId: "mvcproyecto-cf872",
  storageBucket: "mvcproyecto-cf872.firebasestorage.app",
  messagingSenderId: "846563282817",
  appId: "1:846563282817:web:b7c20d492208846969a280",
  measurementId: "G-D5K7G8P3TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { db };
