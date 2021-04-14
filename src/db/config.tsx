import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBKPITDD7fTKivzrhU3VbWmzRG1AIa4Xi0",
    authDomain: "jobs-calc-beta.firebaseapp.com",
    projectId: "jobs-calc-beta",
    storageBucket: "jobs-calc-beta.appspot.com",
    messagingSenderId: "497783524681",
    appId: "1:497783524681:web:2508ceb2a5bb3be4769e98"
}
 
firebase.apps.length<1 && firebase.initializeApp(firebaseConfig)

export const database = firebase
