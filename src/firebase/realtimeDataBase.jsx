import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDcc3VuJAuPIIQKCo1fajOPf_DDt_q3bhA",
    authDomain: "fabapp-3ab37.firebaseapp.com",
    databaseURL: "https://fabapp-3ab37-default-rtdb.firebaseio.com",
    projectId: "fabapp-3ab37",
    storageBucket: "fabapp-3ab37.appspot.com",
    messagingSenderId: "754449041404",
    appId: "1:754449041404:web:0ade7f53bf0b540c2bd479",
    measurementId: "G-K4C94C94WD"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  
  export { database };