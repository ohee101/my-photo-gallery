import { firebase } from '@firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAMjdRuAp-cQ5rlxYsmdg1pKLDlycKuLlY",
    authDomain: "my-gallery-f10c5.firebaseapp.com",
    databaseURL: "https://my-gallery-f10c5-default-rtdb.firebaseio.com",
    projectId: "my-gallery-f10c5",
    storageBucket: "my-gallery-f10c5.appspot.com",
    messagingSenderId: "315994589931",
    appId: "1:315994589931:web:81caaf5560c2b977160cae",
    measurementId: "G-7CYX6B68Z4"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };