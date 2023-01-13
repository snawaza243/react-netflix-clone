// Import the functions you need from the SDKs you need
// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQYpdgD-xz9YXn7eANFS2Lot7xUV3xttU",
  authDomain: "react-netflix-clone-214b6.firebaseapp.com",
  projectId: "react-netflix-clone-214b6",
  storageBucket: "react-netflix-clone-214b6.appspot.com",
  messagingSenderId: "1063988597273",
  appId: "1:1063988597273:web:bd78ea0429e2700f501088"
};

// Initialize Firebase
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };