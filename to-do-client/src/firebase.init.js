// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEg7AcokIiDBhzEpjayOpAQjnpX8TngF4",
  authDomain: "to-do-react-30a8e.firebaseapp.com",
  projectId: "to-do-react-30a8e",
  storageBucket: "to-do-react-30a8e.appspot.com",
  messagingSenderId: "866195871813",
  appId: "1:866195871813:web:f282093fde8417524aeb2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
