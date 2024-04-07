import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB6ole84j_FEAn-T4TA6a_-QLSDa0iGoIw",
    authDomain: "grocery-store-e16a4.firebaseapp.com",
    projectId: "grocery-store-e16a4",
    storageBucket: "grocery-store-e16a4.appspot.com",
    messagingSenderId: "41923067350",
    appId: "1:41923067350:web:d93a04cb843916033d7877",
    measurementId: "G-CJW7EMJ7P6"
  };

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const fs = firebase.firestore()
const storage = firebase.storage()

export {auth, fs, storage}

