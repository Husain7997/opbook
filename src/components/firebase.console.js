// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBom4bxWtO-nVL92XUGe7xYzfABGAtW7g0",
  authDomain: "opbook-3e78e.firebaseapp.com",
  projectId: "opbook-3e78e",
  storageBucket: "opbook-3e78e.appspot.com",
  messagingSenderId: "233221400871",
  appId: "1:233221400871:web:57fb4ff5765aac7aa02102",
  measurementId: "G-X9YS3EDCXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;