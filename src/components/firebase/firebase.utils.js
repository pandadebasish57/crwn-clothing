import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAkpOYe3vOXDj8bBdWUj6itjQFchmZboD4",
    authDomain: "crwn-db-33a6b.firebaseapp.com",
    projectId: "crwn-db-33a6b",
    storageBucket: "crwn-db-33a6b.appspot.com",
    messagingSenderId: "372898847945",
    appId: "1:372898847945:web:b7133d72b60ca3d0fdc118"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;