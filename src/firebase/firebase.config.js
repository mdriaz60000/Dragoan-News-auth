// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiJtsHS9Cmt-o8xyv1gMMXf3zTbUapmkQ",
  authDomain: "dragoan-news-auth.firebaseapp.com",
  projectId: "dragoan-news-auth",
  storageBucket: "dragoan-news-auth.appspot.com",
  messagingSenderId: "375523840938",
  appId: "1:375523840938:web:edcc999d31c2cd021e51d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;