// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdtHFi6kLlbNu3TprW7tLitv-tWrT5XII",
  authDomain: "mypprtfolio.firebaseapp.com",
  databaseURL: "https://mypprtfolio-default-rtdb.firebaseio.com",
  projectId: "mypprtfolio",
  storageBucket: "mypprtfolio.appspot.com",
  messagingSenderId: "1082911424166",
  appId: "1:1082911424166:web:d89834e543e2da88c87e67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

