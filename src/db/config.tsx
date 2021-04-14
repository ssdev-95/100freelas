import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: "jobs-calc-beta",
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
}
 
firebase.apps.length<1 && firebase.initializeApp(firebaseConfig)

export const database = firebase
