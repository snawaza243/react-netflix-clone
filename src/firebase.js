import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQYpdgD-xz9YXn7eANFS2Lot7xUV3xttU",
  authDomain: "react-netflix-clone-214b6.firebaseapp.com",
  projectId: "react-netflix-clone-214b6",
  storageBucket: "react-netflix-clone-214b6.appspot.com",
  messagingSenderId: "1063988597273",
  appId: "1:1063988597273:web:bd78ea0429e2700f501088"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };