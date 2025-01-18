import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "brightroute-c9d58.firebaseapp.com",
  projectId: "brightroute-c9d58",
  storageBucket: "brightroute-c9d58.firebasestorage.app",
  messagingSenderId: "111489898515",
  appId: "1:111489898515:web:4cc7cfec8ed7f261f287e6",
  measurementId: "G-QC59JT8PV7"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);