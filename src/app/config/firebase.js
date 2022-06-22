import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database"
import "firebase/compat/firestore"

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYhA_bKKakAtzfvmGfUNUSXMSITgZpMK0",
  authDomain: "get-booked-17960.firebaseapp.com",
  projectId: "get-booked-17960",
  storageBucket: "get-booked-17960.appspot.com",
  messagingSenderId: "128393823561",
  appId: "1:128393823561:web:706e925a62872534034698",
  measurementId: "G-D3XVBJL4B9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebase.database(firebaseApp)

export const storage = getStorage(firebaseApp);

firebase
  .firestore()
  .settings({ experimentalForceLongPolling: true, merge: true })

export const auth = firebase.auth();

export default firebase
