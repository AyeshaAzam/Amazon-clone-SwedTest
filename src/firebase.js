import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
 apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
  authDomain: "clone-swed.firebaseapp.com",
  databaseURL: "https://clone-swed.firebaseio.com",
  projectId: "clone-swed",
  storageBucket: "clone-swed.appspot.com",
  messagingSenderId: "1025989776805",
  appId: "1:1025989776805:web:060bc49badaf661ae8c44c",
  
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

// so now we connected firebase with react front-end
