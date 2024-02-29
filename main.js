
   const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyDVdJRgrBCLoxL85VquRjBh1nghoyMd7Rg",
  authDomain: "auth-form-591a8.firebaseapp.com",
  projectId: "auth-form-591a8",
  storageBucket: "auth-form-591a8.appspot.com",
  messagingSenderId: "831130814383",
  appId: "1:831130814383:web:2d1a0a5f5acee679ba915a",
  measurementId: "G-PJ3100XPFB"
 });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();
//    sign up function
   const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}
// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}