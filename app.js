// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnjAiYImHYEV5EDdrdbvTe44InylOaT7w",
  authDomain: "project1-d9ae8.firebaseapp.com",
  databaseURL: "https://project1-d9ae8-default-rtdb.firebaseio.com",
  projectId: "project1-d9ae8",
  storageBucket: "project1-d9ae8.appspot.com",
  messagingSenderId: "363979197844",
  appId: "1:363979197844:web:342849912940e8eb679381",
  measurementId: "G-BMVTCVWG0V"
};
const auth = firebase.auth()
const database = firebase.database()
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  // Set up our register function
function register () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value

    if (validate_email(email) == false || validate_password(password) == fasle){
        alert('Email or Password is Qutta line!')
    }
    if (validate_field(full_name) == false ){
        alert('One extra field is Qutta line!')
        return
    }
}
auth.createUserWithEmailAndPassword(email,passowrd)
.then (function() {
var user = auth.currentUser


var database_ref = database.ref()


var user_data = {
email: email,
fullname : full_name,
last_login : Date.now()
}
database_ref.child('users/' + user.vid).set(user_data)

alert('User Created!!')
})
.catch(function(error){
    var error_code  = error.code
   var error_message = error.message
   alert(error_message)
})
function validate_email(email){
    expression =/^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true){
        // Email is good
        return true
    } else{
        // Email is not good
        return false
    }
}
function validate_password(password){
if (password < 6){
    return false
} else {
    return true
}
}
function validate_field(field){
    if(field == null)
    return false
}
if(field.length <=0){
    return false
} else {
    return true
}
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  // Handle user registration on the server
  // (Verify credentials, store user data, generate session/token, etc.)
  
  // For simplicity, assume registration is successful
  const registrationData = {
    success: true,
    // Include any user data needed for the dashboard
  };

  res.json(registrationData);
});

app.get('/dashboard', (req, res) => {
  // Render the user dashboard
  res.send('Welcome to the User Dashboard!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});