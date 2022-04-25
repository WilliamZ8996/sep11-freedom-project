import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { getFirestore, collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcKkhi299lPOZXU-iKqpq9VgjQzTVjHO4",
  authDomain: "sep11-freedomproject.firebaseapp.com",
  projectId: "sep11-freedomproject",
  storageBucket: "sep11-freedomproject.appspot.com",
  messagingSenderId: "45014769266",
  appId: "1:45014769266:web:9e4e0573e900fc1c212ceb",
  measurementId: "G-YJ2RJ45TL3"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()

const loginForm = document.querySelector(".login")

//selecting the logOut button
const loggingOut = document.querySelector(".LogOutButton")

//loging the user in

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loginForm.User.value
  const password = loginForm.Pass.value

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user logged in:', cred.user)
      loginForm.reset()
    })
    .catch(err => {
      console.log(err.message)
    })
})

//logging the user out

loggingOut.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      window.location = 'index.html';
      console.log('user signed out')
    })
    .catch(err => {
      console.log(err.message)
    })
})

//detecting auth changes

onAuthStateChanged(auth, (user) => {
  console.log('user status has changed:', user)
})