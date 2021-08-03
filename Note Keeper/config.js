import firebase from 'firebase'
 var firebaseConfig = {
    apiKey: "AIzaSyCgTrMLEa4rjrU64gV8QlaL-QRIy1XKPuE",
    authDomain: "keep-it-f41f9.firebaseapp.com",
    databaseURL: "https://keep-it-f41f9-default-rtdb.firebaseio.com",
    projectId: "keep-it-f41f9",
    storageBucket: "keep-it-f41f9.appspot.com",
    messagingSenderId: "110200630163",
    appId: "1:110200630163:web:583f73168ed4724d90d666"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();
