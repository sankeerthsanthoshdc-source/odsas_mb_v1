// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getGenerativeModel, getVertexAI } from "firebase/vertexai";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtfu7fMMa0mKhfxeVM1F3vYoNque18m7U",
  authDomain: "odsas-31720.firebaseapp.com",
  projectId: "odsas-31720", // Your project ID
  storageBucket: "odsas-31720.firebasestorage.app",
  messagingSenderId: "986632803662",
  appId: "1:986632803662:web:91a4502393caccb08eba1f",
  measurementId: "G-7Z3124XC8R" // If using Analytics, otherwise optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize the Vertex AI service and get a generative model
const vertexAI = getVertexAI(app);
const model = getGenerativeModel(vertexAI, { model: "gemini-pro" });
