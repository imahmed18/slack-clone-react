// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDWV_NOuf1htpYXrAd1-qqy_9LK0DsgdzY",
    authDomain: "slack-clone-80860.firebaseapp.com",
    databaseURL: "https://slack-clone-80860-default-rtdb.firebaseio.com",
    projectId: "slack-clone-80860",
    storageBucket: "slack-clone-80860.appspot.com",
    messagingSenderId: "1029082338999",
    appId: "1:1029082338999:web:7faf0886dae72dcd53df32",
    measurementId: "G-J9PMSBSHY1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;