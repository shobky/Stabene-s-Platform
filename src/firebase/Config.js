import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCFM_4HbZEJRFTbN2Ia_ZBMtprzCg3i0Xo",
    authDomain: "stabene-e23f0.firebaseapp.com",
    projectId: "stabene-e23f0",
    storageBucket: "stabene-e23f0.appspot.com",
    messagingSenderId: "162831197403",
    appId: "1:162831197403:web:9b0e20794b858ae80458fe",
    measurementId: "G-EPQLR5S6GQ"
}

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const auth = getAuth();
