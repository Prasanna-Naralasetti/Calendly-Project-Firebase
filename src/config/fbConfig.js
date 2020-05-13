import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAfB_ggs1XrWqpLJIUGPDC6NrxzmRA2RvY",
  authDomain: "calendly-f643a.firebaseapp.com",
  databaseURL: "https://calendly-f643a.firebaseio.com",
  projectId: "calendly-f643a",
  storageBucket: "calendly-f643a.appspot.com",
  messagingSenderId: "677788999799",
  appId: "1:677788999799:web:22d7fefcea00f9de642672",
  measurementId: "G-CBXPY48Z4H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase