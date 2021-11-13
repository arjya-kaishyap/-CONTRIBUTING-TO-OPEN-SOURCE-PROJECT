import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCSNxe9xswJpI-VFRtvsEpWyknP0QIzFLc",
    authDomain: "classtest-55ab3.firebaseapp.com",
    databaseURL: "https://classtest-55ab3-default-rtdb.firebaseio.com",
    projectId: "classtest-55ab3",
    storageBucket: "classtest-55ab3.appspot.com",
    messagingSenderId: "468103733915",
    appId: "1:468103733915:web:96707aa0ca6cb440261c3e"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();