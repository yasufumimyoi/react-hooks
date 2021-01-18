import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: 'AIzaSyCDEnSJSodKqFl1RX1FF2a_sPtkUfM7XGU',
  authDomain: 'video-learning-a4c3a.firebaseapp.com',
  projectId: 'video-learning-a4c3a',
  storageBucket: 'video-learning-a4c3a.appspot.com',
  messagingSenderId: '660164803466',
  appId: '1:660164803466:web:5b43de729084dd71506673',
  measurementId: 'G-Q9X9W5J2LH',
};

export const app = firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export { firebase };
