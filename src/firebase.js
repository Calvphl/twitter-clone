// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCd3GTHcdGQ3VGa_0yA4ZoEem9tx66tk1c",
    authDomain: "twitter-clone-36592.firebaseapp.com",
    projectId: "twitter-clone-36592",
    storageBucket: "twitter-clone-36592.appspot.com",
    messagingSenderId: "414136558616",
    appId: "1:414136558616:web:cb3213d5a3e43d7b0b8f6d",
    measurementId: "G-63N479XTD5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;