const form = document.querySelector('form');
const email = document.getElementById('email');
const button = document.getElementById('notify-button');
const emailValue = email.value;
const small = form.querySelector('small');

button.addEventListener('click', validateEmail);



function validateEmail(){
    let atposition = email.value.indexOf('@');
    let dotposition = email.value.lastIndexOf('.');
    if (atposition < 1 ||dotposition < atposition + 2 || dotposition + 2 >= email.value.length){
        small.textContent = 'Please provide a valid email address';
        small.style.visibility = 'visible'
        email.classList.add('error')
        return false
    }
} 
