// Import the functions you need from the SDKs you need
import firebase from "firebase";
// import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// console.log(firebase.auth);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgFfbQxa4BBsiEmTB9TCDNorq4kK7U3Oo",
  authDomain: "movies-app-f5e9b.firebaseapp.com",
  projectId: "movies-app-f5e9b",
  storageBucket: "movies-app-f5e9b.appspot.com",
  messagingSenderId: "320770791880",
  appId: "1:320770791880:web:067fbb61063ca77a2ac8fd",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
