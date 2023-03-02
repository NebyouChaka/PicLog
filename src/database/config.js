import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCeo1WNjE3PtczsTGvSCJafC3_pFDGuVY4",
  authDomain: "photowall-6294a.firebaseapp.com",
  databaseURL: "https://photowall-6294a-default-rtdb.firebaseio.com",
  projectId: "photowall-6294a",
  storageBucket: "photowall-6294a.appspot.com",
  messagingSenderId: "317508649215",
  appId: "1:317508649215:web:2d0ed5a51adeb549aa4cca",
  measurementId: "G-D8MQYB104E"
  }
  
  firebase.initializeApp(config)

  const database = firebase.database()

  export {database}