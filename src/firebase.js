import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsa5EHU2mXUL6uHkQjWT3CU3jC-JClTkY",
  authDomain: "my-whatsapp-clone-a8f82.firebaseapp.com",
  databaseURL: "https://my-whatsapp-clone-a8f82.firebaseio.com",
  projectId: "my-whatsapp-clone-a8f82",
  storageBucket: "my-whatsapp-clone-a8f82.appspot.com",
  messagingSenderId: "870425979077",
  appId: "1:870425979077:web:5a7b1cde4087421e6ce8ac",
  measurementId: "G-QF77FG8DF5",
};

// Initialize Firebase with a "default" Firebase project
var firebaseProject = firebase.initializeApp(firebaseConfig);

console.log(firebaseProject.name); // "[DEFAULT]"

// Option 1: Access Firebase services via the defaultProject variable
// var defaultStorage = defaultProject.storage();
var db = firebaseProject.firestore();

// Option 2: Access Firebase services using shorthand notation
var storage = firebase.storage();
var auth = firebase.auth();
// constdefaultFirestore = firebase.firestore();

export { db, storage, auth };
