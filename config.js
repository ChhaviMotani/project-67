import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyATYnkZepIFmdBC37BmiKKSCSjcnoSl1Zg",
    authDomain: "classtest-46ff4.firebaseapp.com",
    projectId: "classtest-46ff4",
    storageBucket: "classtest-46ff4.appspot.com",
    messagingSenderId: "1007911068324",
    appId: "1:1007911068324:web:f1dd748fe8274108d0bc31"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();