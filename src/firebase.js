import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import the specific service you need

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF1wTZaSUZIz1MT2W7mHOgHJgW0SGLPLY",
  authDomain: "sports-central-01.firebaseapp.com",
  projectId: "sports-central-01",
  storageBucket: "sports-central-01.appspot.com",
  messagingSenderId: "268651814423",
  appId: "1:268651814423:web:fcd1aae72bd26afff94652",
  measurementId: "G-EHCS630JG7"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the Auth instance
const auth = getAuth(app);

export { auth };
