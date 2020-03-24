import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCtIEAfcIm_4AetMVAt2ZXtFb9oRLo0RJ0",
  authDomain: "testing-bt3103.firebaseapp.com",
  databaseURL: "https://testing-bt3103.firebaseio.com",
  projectId: "testing-bt3103",
  storageBucket: "testing-bt3103.appspot.com",
  messagingSenderId: "1083754662817",
  appId: "1:1083754662817:web:894dbed8e3e63f61bfd9e0",
  measurementId: "G-H4CC54128R"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;