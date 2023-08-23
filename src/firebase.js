// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD6DqOQ06aCKdy_4HrWbwlspm79qxqAkg",
  authDomain: "demofirebase-42367.firebaseapp.com",
  projectId: "demofirebase-42367",
  storageBucket: "demofirebase-42367.appspot.com",
  messagingSenderId: "607066339021",
  appId: "1:607066339021:web:11dfc7ee481c9bafd7db84",
  measurementId: "G-3FFHFM0Y4L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
