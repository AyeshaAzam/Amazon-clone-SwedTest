import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgcYkVc45ubxRxtTIdGdpSe1J7n3Jg-rM",
  authDomain: "clone-swed.firebaseapp.com",
  databaseURL: "https://clone-swed.firebaseio.com",
  projectId: "clone-swed",
  storageBucket: "clone-swed.appspot.com",
  messagingSenderId: "1025989776805",
  appId: "1:1025989776805:web:060bc49badbbce3f78c44c",
  measurementId: "G-M4Q15Z94JG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

// so now we connected firebase with react front-end
