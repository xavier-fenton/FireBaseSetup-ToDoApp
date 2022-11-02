// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDqkhFOEehCohALCjhHT1qnAZeX8fhyQAc',
  authDomain: 'cloudefirebasesetup-todoapp.firebaseapp.com',
  projectId: 'cloudefirebasesetup-todoapp',
  storageBucket: 'cloudefirebasesetup-todoapp.appspot.com',
  messagingSenderId: '1052816668084',
  appId: '1:1052816668084:web:e5e139787f9acca5392ee1',
}
// Initialize Firebase

const app = initializeApp(firebaseConfig)
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app)
