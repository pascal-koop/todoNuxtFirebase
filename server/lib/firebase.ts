// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NUXT_API_KEY,
  authDomain: process.env.NUXT_AUTH_DOMAIN,
  projectId: process.env.NUXT_PROJECT_ID,
  storageBucket: process.env.NUXT_STORAGE_BUCKET,
  messagingSenderId: process.env.NUXT_MESSAGING_SENDER_ID,
  appId: process.env.NUXT_APP_ID,
  measurementId: process.env.NUXT_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(firebaseApp);
