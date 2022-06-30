// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// other imports
import withFirebaseAuth from 'react-with-firebase-auth';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlzXRsaqQgzh5LwXNzMyIRiw9fApNcock",
  authDomain: "infobyte-879f7.firebaseapp.com",
  projectId: "infobyte-879f7",
  storageBucket: "infobyte-879f7.appspot.com",
  messagingSenderId: "947358625698",
  appId: "1:947358625698:web:ef76e7887cc3a4067cccfb",
  measurementId: "G-7HVG8CC7HX"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

// other Firebase setup stuff

const auth = getAuth(app);
const db = getFirestore(app);

const providers = {
  googleProvider: new GoogleAuthProvider(),
};

const createComponentWithAuth = withFirebaseAuth({
  providers,
  firebaseAppAuth: auth,
});

const signInWithGoogle = () => {
  signInWithPopup(auth, providers.googleProvider);
};

const signOutFirebase = () => {
  signOut(auth);
};

export {
  db,
  auth,
  createComponentWithAuth,
  signInWithGoogle,
  signOutFirebase as signOut,
};
