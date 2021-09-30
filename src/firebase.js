import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';   // for cloud firestore

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: `${process.env.MESSAGINGSENDER_ID}`,
    appId: `${process.env.APPID}`,
});

const db = firebaseApp.firestore();

export { db };