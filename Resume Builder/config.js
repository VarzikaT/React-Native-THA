import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBjmXxNwE_7mw6-Z7PBejtBtv-y6tnX1bM",
    authDomain: "resumebuilder-2b47c.firebaseapp.com",
    databaseURL: "https://resumebuilder-2b47c-default-rtdb.firebaseio.com",
    projectId: "resumebuilder-2b47c",
    storageBucket: "resumebuilder-2b47c.appspot.com",
    messagingSenderId: "992772560399",
    appId: "1:992772560399:web:c5d8b0a60983309106757a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   export default firebase.database();
