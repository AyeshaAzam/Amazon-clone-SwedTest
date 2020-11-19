import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgc3kVc21ubxRxtTIdGdpSe1J7n3Jg-rM",
  authDomain: "clone-swed.firebaseapp.com",
  databaseURL: "https://clone-swed.firebaseio.com",
  projectId: "clone-swed",
  storageBucket: "clone-swed.appspot.com",
  messagingSenderId: "1025989776805",
  appId: "1:1025989776805:web:060bc49badaace3f78c44c",
  measurementId: "G-M4Q14Y94JG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

// so now we connected firebase with react front-end
// also run the 'npm i firebase'
