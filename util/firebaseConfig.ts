// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD45I6dg17LKP0y2F_d9geBoS0SiUz2lGQ",
  authDomain: "savannah-6115b.firebaseapp.com",
  projectId: "savannah-6115b",
  storageBucket: "savannah-6115b.appspot.com",
  messagingSenderId: "1039265460478",
  appId: "1:1039265460478:web:0aa1b50674a6dfc5f0f5af",
  measurementId: "G-T5T66R2K71"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
