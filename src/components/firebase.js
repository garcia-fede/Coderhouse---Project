import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAgnnFGpLUhhvyMu-2kCbaNcOjXvxGh_5c",
    authDomain: "e-commerce-83e76.firebaseapp.com",
    projectId: "e-commerce-83e76",
    storageBucket: "e-commerce-83e76.appspot.com",
    messagingSenderId: "732059580064",
    appId: "1:732059580064:web:fdb52d3fe783f76b5afbc5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
