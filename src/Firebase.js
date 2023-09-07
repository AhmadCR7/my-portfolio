import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
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

const db = getFirestore(app);

// Export storage and database
export {  db, app };