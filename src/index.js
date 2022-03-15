import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuXu26w6OPCNJct8SNfHAsUoFBlD-J4WQ",
  authDomain: "moody-foodies-9599d.firebaseapp.com",
  databaseURL: "https://moody-foodies-9599d-default-rtdb.firebaseio.com",
  projectId: "moody-foodies-9599d",
  storageBucket: "moody-foodies-9599d.appspot.com",
  messagingSenderId: "334288957813",
  appId: "1:334288957813:web:6b0ec62f0daedd2c29633c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
