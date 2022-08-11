import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/database'

const env = process.env

const firebaseConfig = {
  apiKey: env.REACT_APP_FIREBASE_KEY,
  authDomain: env.REACT_APP_FIREBASE_DOMAIN,
  projectId: env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.REACT_APP_FIREBASE_SENDER_ID,
  appId: env.REACT_APP_FIREBASE_API_ID,
  measurementId: env.REACT_APP_FIREBASE_MEASUREMENT_ID
};


const app = firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default app;