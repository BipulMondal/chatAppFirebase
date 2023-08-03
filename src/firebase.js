import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDI17lWJ-t0nhYQW84Z6G_sNG-GBFxtkzI",
    authDomain: "todos-478d9.firebaseapp.com",
    projectId: "todos-478d9",
    storageBucket: "todos-478d9.appspot.com",
    messagingSenderId: "133923305522",
    appId: "1:133923305522:web:4c6451611a1bc6cc31a42b"
  };

  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);