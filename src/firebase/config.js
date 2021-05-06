import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDaqDcxQvzMiVf2JcwVA4danK3af7rHCug",
    authDomain: "imgrepo-8aa98.firebaseapp.com",
    projectId: "imgrepo-8aa98",
    storageBucket: "imgrepo-8aa98.appspot.com",
    messagingSenderId: "693400864877",
    appId: "1:693400864877:web:127e2ef2047ab6e9efd764"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initiallize storage
const projectStorage = firebase.storage();

// Initialize firestore
const projectFirestore = firebase.firestore();

// Create timestamp, to order pictures
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };