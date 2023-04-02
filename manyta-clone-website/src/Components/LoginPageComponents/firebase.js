import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//new task done
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADAOaOsW12VUJkhj8_GUL0HpwfKZK8v-U",
  authDomain: "manyata-66d89.firebaseapp.com",
  projectId: "manyata-66d89",
  storageBucket: "manyata-66d89.appspot.com",
  messagingSenderId: "817642194951",
  appId: "1:817642194951:web:8f2b6068c1a277a60002a2",
  measurementId: "G-XW2X9R0VF4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
