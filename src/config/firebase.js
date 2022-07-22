import firebase from "firebase";
import 'firebase/storage';

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDLoO3g7ONiSeF8UHGhsql5hDaIa5_qVU8",
    authDomain: "my-invest-89f25.firebaseapp.com",
    projectId: "my-invest-89f25",
    storageBucket: "my-invest-89f25.appspot.com",
    messagingSenderId: "697215775838",
    appId: "1:697215775838:web:975bf43ad9d8c39b64f0cf",
    measurementId: "G-YEDG0V4SX5"
};

firebase.initializeApp(firebaseConfig);
// const database = firebase.firestore();

export default firebase;
  
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
