import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCddYkaltbp_TEL9P15AzGzL0mQKCsKNjQ",
  
    authDomain: "group-finder-ec8dc.firebaseapp.com",
  
    projectId: "group-finder-ec8dc",
  
    storageBucket: "group-finder-ec8dc.appspot.com",
  
    messagingSenderId: "353338547005",
  
    appId: "1:353338547005:web:bc7d5d91e7d5649e47c354"
  
  };
  
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
