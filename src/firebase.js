// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import authentication service
//import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3MC9pXyneLjS0EkI9Qz7mfXAu0VmiDcY",
  authDomain: "moodapp-a3eff.firebaseapp.com",
  projectId: "moodapp-a3eff",
  storageBucket: "moodapp-a3eff.appspot.com",
  messagingSenderId: "999609098195",
  appId: "1:999609098195:web:47c2018798233f214c1926",
  measurementId: "G-1R342F3TLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Initialize Firebase Authentication
//const analytics = getAnalytics(app);

// Export auth so you can use it in your Login and Signup components
export { auth };
