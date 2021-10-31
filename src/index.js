import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import * as firebase from 'firebase';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCMf-Kun8hKXqQfy2fxWcInAs27fi8YWg",
  authDomain: "cart-d635b.firebaseapp.com",
  projectId: "cart-d635b",
  storageBucket: "cart-d635b.appspot.com",
  messagingSenderId: "357668036701",
  appId: "1:357668036701:web:971ae9501e62a711ee6db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
