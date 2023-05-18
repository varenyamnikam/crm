import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCggZCcBun0cwNfOWGC2K8pZcgIRWMfqwY",
  authDomain: "olx-sijeesh.firebaseapp.com",
  projectId: "olx-sijeesh",
  storageBucket: "olx-sijeesh.appspot.com",
  messagingSenderId: "767411886432",
  appId: "1:767411886432:web:2ef6862afc88f2c423a605",
  measurementId: "G-4ELNR9DJHL",
};

export const Firebase = firebase.initializeApp(firebaseConfig); //named export
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCanr5fmTavRrU4o9IrjUxEZqe_GjNJpD4",
//   authDomain: "campusresalemate.firebaseapp.com",
//   projectId: "campusresalemate",
//   storageBucket: "campusresalemate.appspot.com",
//   messagingSenderId: "1039592446485",
//   appId: "1:1039592446485:web:77df757570a4d7a97d0c1c",
//   measurementId: "G-QPYEKJ44VE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
