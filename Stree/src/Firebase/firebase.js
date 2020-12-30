import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC_rzDcZxSrrgr-cTXm0h-U9YeFDKsRBrg",
    authDomain: "stree-e774e.firebaseapp.com",
    projectId: "stree-e774e",
    storageBucket: "stree-e774e.appspot.com",
    messagingSenderId: "419871622158",
    appId: "1:419871622158:web:ccc585df2171c989e2685f",
    measurementId: "G-FC4GJLR9P9"
};
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }
}
 
export default Firebase;