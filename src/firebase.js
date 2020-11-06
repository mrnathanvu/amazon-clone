import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD26ErV6tN1VifLsdui4kLQ99vdSbCKp6U",
  authDomain: "challenge-de188.firebaseapp.com",
  databaseURL: "https://challenge-de188.firebaseio.com",
  projectId: "challenge-de188",
  storageBucket: "challenge-de188.appspot.com",
  messagingSenderId: "989380357472",
  appId: "1:989380357472:web:c3b021f641c2e3fd2fc205",
  measurementId: "G-ZZ42SEN8K3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };