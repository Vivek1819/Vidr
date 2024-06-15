import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBRkxjTTCyrtJcEvyPPr-tJCksCDd7_FeU",
  authDomain: "fir-32ccd.firebaseapp.com",
  projectId: "fir-32ccd",
  storageBucket: "fir-32ccd.appspot.com",
  messagingSenderId: "472547609049",
  appId: "1:472547609049:web:d95cc2934a60a698abb1c8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider= new GoogleAuthProvider();

export default app;