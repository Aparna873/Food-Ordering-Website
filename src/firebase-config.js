import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCjynhsV6lz9t_m-mXoxh_Y9Bl7GDi8OMM",
    authDomain: "food-delivery-website-65aa9.firebaseapp.com",
    projectId: "food-delivery-website-65aa9",
    storageBucket: "food-delivery-website-65aa9.appspot.com",
    messagingSenderId: "378150484110",
    appId: "1:378150484110:web:0ed100aa188f0abdfeb1df",
    measurementId: "G-B8ZKPKNE56"
  };
  const app=initializeApp(firebaseConfig);
  export const auth=getAuth(app);