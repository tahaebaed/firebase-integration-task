import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDe76GYETIfSfhLLQPaiTjf8b3oIvKGSHU',
  authDomain: 'fir-integration-task.firebaseapp.com',
  projectId: 'fir-integration-task',
  storageBucket: 'fir-integration-task.appspot.com',
  messagingSenderId: '410660825218',
  appId: '1:410660825218:web:11678d7dddbd6355eeac9b',
  measurementId: 'G-K9JVWFW8E6',
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore(app)
