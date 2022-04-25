import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { getFirestore, collection, getDocs, addDoc, doc, onSnapshot, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

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

  var loadNum = 0

  onAuthStateChanged(auth, (user) => {
    const docRef = doc(db, 'accounts', user.uid)
    onSnapshot(docRef, (doc) => {
      var info = doc.data().userInfo
      info.forEach(loadAffirm);
      
      function loadAffirm(){
        if(info[loadNum] != ""){
          console.log(info)
          var ul = document.createElement("li")
          console.log(info[loadNum])
          console.log(loadNum)
          if(info[loadNum] != undefined){
           ul.innerHTML = info[loadNum]
          document.querySelector("#uls").appendChild(ul) 
          }
        }
        loadNum++
      }
      
      
      submitButton.addEventListener("click",function(){
        var userAffirms = document.querySelector("#userAffirm").value
          listAffirm.push(userAffirms)
          document.querySelector("#userAffirm").value = ""
          if(listAffirm[num] != ""){
            var ul = document.createElement("li")
            ul.innerHTML = listAffirm[num]
            document.querySelector("#uls").appendChild(ul) 
            console.log(info)
          }
          num++
      })
        document.querySelector(".buttonc").addEventListener('submit', (e) => {
                  e.preventDefault()
        setDoc(docRef, {userInfo:listAffirm})
        .then(() => {

          console.log('user added data')

        })
        .catch(err => {
          console.log(err.message)
        })

        })
      })
    })
            var num = 0 
            var listAffirm = []

            var submitButton = document.querySelector("#submit")

            var deleteButton = document.querySelector("#deleting")
            deleteButton.addEventListener("click",function(){
                document.querySelector("#comment").value = ""
            })


            var affirmArr = [ "I am love. I am purpose. I was made with divine intention.","I am worthy of what I desire.","I can. I will. End of story.","I am adventurous. I overcome fears by following my dreams.","I feed my spirit. I train my body. I focus my mind. It’s my time.","I am in charge of my life.", "I am the hero of my own life.","I will not compare myself to strangers on the Internet.","I am choosing and not waiting to be chosen.","I am worthy. I am loved. I am enough.","I am my light.", "I have the power to create change.", "I believe in the good things coming.", "I am resilient and can get through anything.","I will acommplish everything that needs to get done.", "I claim my desires. I hold great visions. I am ready to receive.","I’m going to make myself so proud.", "My presence is my power.", "When you really want it. you are unstoppable." ]
            var genButton = document.querySelector("#generate")
            genButton.addEventListener("click",function(){
              var randNum = Math.floor(Math.random()*affirmArr.length)
              document.querySelector("#genAffirm").innerHTML = affirmArr[randNum]
            })


