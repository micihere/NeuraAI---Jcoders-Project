// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAUijn2ezvH0sXMioFS4BFrVpCDh-QcW9U",
    authDomain: "jcoders.firebaseapp.com",
    projectId: "jcoders",
    storageBucket: "jcoders.appspot.com",
    messagingSenderId: "1027969905487",
    appId: "1:1027969905487:web:14b5271471411a7a568b3a",
    measurementId: "G-BP9L78PZ4B"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
