import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB03lI8UZnkhl5D9ZORd6-y6-hERQn1zEk",
  authDomain: "blogapp-c67b3.firebaseapp.com",
  databaseURL: "https://blogapp-c67b3-default-rtdb.firebaseio.com",
  projectId: "blogapp-c67b3",
  storageBucket: "blogapp-c67b3.appspot.com",
  messagingSenderId: "482968306385",
  appId: "1:482968306385:web:8f689e3f86348825407bf0"
};
  const app=initializeApp(firebaseConfig);
  export const db =getFirestore(app);