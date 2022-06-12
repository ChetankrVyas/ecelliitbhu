const form = document.getElementById('form');
const name = document.getElementById('username');
const email = document.getElementById('email');
const mobileno = document.getElementById('mobileno');
const subject = document.getElementById('subject');
const urmessage = document.getElementById('urmessage');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const mobilenoValue = mobileno.value.trim();
    const subjectValue = subject.value.trim();
    const urmessageValue = urmessage.value.trim();

    if (nameValue === '') {
        setErrorFor(name, 'Name cannot be blank');
    } else {
        setSuccessFor(name);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (mobilenoValue === '') {
        setErrorFor(mobileno, 'Mobile Number cannot be blank');
    } else {
        setSuccessFor(mobileno);
    }

    if (subjectValue === '') {
        setErrorFor(subject, 'Subject cannot be blank');
    } else {
        setSuccessFor(subject);
    }
    if (urmessageValue === '') {
        setErrorFor(urmessage, 'Your Message cannot be blank');
    } else {
        setSuccessFor(urmessage);
    }
  
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}