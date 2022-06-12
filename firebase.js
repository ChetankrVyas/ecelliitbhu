

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDFnAmXGs0buwNxZzv0fUY61fvvnLOxc9A",
    authDomain: "form-70333.firebaseapp.com",
    databaseURL: "https://form-70333-default-rtdb.firebaseio.com",
    projectId: "form-70333",
    storageBucket: "form-70333.appspot.com",
    messagingSenderId: "169634493199",
    appId: "1:169634493199:web:e46293701e30831bafc47a"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
var formDB = firebase.database().ref('form');

document.getElementById('form').addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal('username');
  var email = getElementVal('email');
  var mobileno = getElementVal('mobileno');
  var subject = getElementVal('subject');
  var urmessage = getElementVal('urmessage');

  console.log(name, email, mobileno, subject, urmessage);

  saveMessages(name, email, mobileno, subject, urmessage);
  document.querySelector('.alert').style.display = "block";

  setTimeout(() => {
    document.querySelector('.alert').style.display = "none";
  }, 3000);

  document.getElementById("form").reset();

}
const saveMessages = (name, email, mobileno, subject, urmessage) => {
  var newform = formDB.push();

  newform.set({
    name: name,
    email: email,
    mobileno: mobileno,
    subject: subject,
    urmessage: urmessage,
  })
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};