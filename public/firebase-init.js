// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdK72b84qntM2K_-N3GZwtlgfpY-y0Nt0",
  authDomain: "mnguni-digital.firebaseapp.com",
  projectId: "mnguni-digital",
  storageBucket: "mnguni-digital.firebasestorage.app",
  messagingSenderId: "132213374087",
  appId: "1:132213374087:web:edf9c4306f953eb1bb0c22",
  measurementId: "G-LDMR3QDBDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);