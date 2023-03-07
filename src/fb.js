import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDu_2V8kx1FPLa5c_lItXIOjlJRwZaCjB8",
  authDomain: "pj-lasttiem.firebaseapp.com",
  projectId: "pj-lasttiem",
  storageBucket: "pj-lasttiem.appspot.com",
  messagingSenderId: "444381902828",
  appId: "1:444381902828:web:e8c3df37ea84a86584b2c9",
  measurementId: "G-JWDJDF1KZJ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);