import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBFbsdRAeHZneh_gyzQWrWn3MyVC2xGhnk",

  authDomain: "group-finder-bb64a.firebaseapp.com",

  projectId: "group-finder-bb64a",

  storageBucket: "group-finder-bb64a.appspot.com",

  messagingSenderId: "721411281628",

  appId: "1:721411281628:web:c3936ce719d8e3b4025a19"

};
  
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export default app; 
