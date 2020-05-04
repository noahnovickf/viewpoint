import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "judger-97c65.firebaseapp.com",
  databaseURL: "https://judger-97c65.firebaseio.com",
  projectId: "judger-97c65",
  storageBucket: "judger-97c65.appspot.com",
  messagingSenderId: "617797868263",
  appId: "1:617797868263:web:7c20782932f85a3442a042",
  measurementId: "G-DT5ZXRXPJT",
};

// Initialize Firebase
firebase.initializeApp(config);

export default {
  db: firebase.firestore(),
  storage: firebase.storage(),
  dbFunctions: firebase.functions(),
  dbAnalytics: firebase.analytics(),
};
