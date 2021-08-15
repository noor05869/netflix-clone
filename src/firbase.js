import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCpDbxHiPYAgsLrxBjChgxwMIRDnfZJU8o",
    authDomain: "netflix-auth-ac294.firebaseapp.com",
    projectId: "netflix-auth-ac294",
    storageBucket: "netflix-auth-ac294.appspot.com",
    messagingSenderId: "140128455913",
    appId: "1:140128455913:web:4135b91f809354fe943478",
    measurementId: "G-W541025NDS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;