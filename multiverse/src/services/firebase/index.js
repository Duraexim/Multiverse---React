
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCkgboEgqRZoYRTzZfYTRVzMZhCL6XZTeg",
  authDomain: "multiverse---react.firebaseapp.com",
  projectId: "multiverse---react",
  storageBucket: "multiverse---react.appspot.com",
  messagingSenderId: "167189952486",
  appId: "1:167189952486:web:0a7cb1a3f2314e76cc4827"
};


const app = initializeApp(firebaseConfig);


export const firestoreDb = getFirestore (app)




