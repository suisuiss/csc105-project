import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDCl2zT9dA--3rUhVBTC9BwBizxIIGThWo",
    authDomain: "my-project-shop-6941b.firebaseapp.com",
    projectId: "my-project-shop-6941b",
    storageBucket: "my-project-shop-6941b.appspot.com",
    messagingSenderId: "782256601666",
    appId: "1:782256601666:web:913795385ffea2e9894bdb",
    measurementId: "G-CTJX5TPHV1"
  };

  const fire = firebase.initializeApp(firebaseConfig)
  export default fire;