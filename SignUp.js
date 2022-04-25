console.log("hello from signUp.js")

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { getFirestore, collection, getDocs, addDoc, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

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

const colAccount = collection(db, 'accounts')
getDocs(colAccount)
  .then(snapshot => {
    let userInfo = []
    snapshot.docs.forEach(doc => {
      userInfo.push({ ...doc.data(), id: doc.id })
    })
    console.log(userInfo)
  })
  .catch(err => {
    console.log(err.message)
  })
  
  const signupForm = document.querySelector('.signUp')
  
  document.querySelector(".signUpButton").addEventListener("click", function(){
      
    signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = signupForm.newUser.value
    const password = signupForm.newPass.value

    createUserWithEmailAndPassword(auth, email, password)
      .then(cred => {
        console.log('user created:', cred.user)
        const colAccount = doc(db, 'accounts', cred.user.uid)
            setDoc(colAccount, {userInfo: [] })
        signupForm.reset();
      })
      .catch(err => {
        console.log(err.message)
      })
  })
})
