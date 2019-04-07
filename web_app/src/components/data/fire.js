import firebase from "firebase";

const firebaseconfig = {
  apiKey: "AIzaSyDb5lkP-rz08zkk2e0zyIOnaGk3G2aB4zc",
  authDomain: "sauto-1cbd6.firebaseapp.com",
  databaseURL: "https://sauto-1cbd6.firebaseio.com",
  projectId: "sauto-1cbd6",
  storageBucket: "sauto-1cbd6.appspot.com",
  messagingSenderId: "276031943486"
};

const fire = firebase.initializeApp(firebaseconfig);
export default fire;
